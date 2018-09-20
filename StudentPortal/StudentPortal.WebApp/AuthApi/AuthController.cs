using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using StudentPortal.Domain.Users;

namespace StudentPortal.WebApp.AuthApi
{
    [Produces("application/json")]
    [Route("api/Auth")]
    public class AuthController : Controller
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        private readonly string _clientId;
        private readonly string _audience;
        private readonly string _connection;
        private readonly HttpClient _httpClient;
        private string tokenUrl = "oauth/token";
        private string userProfileUrl = "userinfo";
        private string registerUrl = "dbconnections/signup";

        public AuthController(IUserRepository userProfileRepository, IConfiguration iconfiguration, IMapper mapper)
        {
            _userRepository = userProfileRepository;
            _mapper = mapper;


            _clientId = iconfiguration.GetSection("Auth0Settings").GetSection("ClientId").Value;
            _audience = iconfiguration.GetSection("Auth0Settings").GetSection("Audience").Value;
            _connection = iconfiguration.GetSection("Auth0Settings").GetSection("Connection").Value;

            _httpClient = new HttpClient()
            {
                BaseAddress = new Uri(iconfiguration.GetSection("Auth0Settings").GetSection("Host").Value),
            };

            _httpClient.DefaultRequestHeaders.Accept.Clear();

        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDetail registerDetail )
        {
            var registerResponse = await RegisterAsyncFromAuth0(registerDetail.Email, registerDetail.Password);
            return Ok(registerResponse);
        }


        [HttpPost]
        [Route("token")]
        public async Task<IActionResult> GetAuthToken([FromBody] LoginDetail loginDetail)
        {
            var tokenResponse = await GetTokenAsyncFromAuth0(loginDetail.UserName, loginDetail.Password);

           
            if (String.IsNullOrEmpty(tokenResponse.AccessToken))
                return BadRequest();

            var userProfile = await GetUserInfoFromAuth0(tokenResponse.AccessToken);

            var user = await _userRepository.GetAsync(loginDetail.UserName);

            tokenResponse.UserProfile = new UserProfile(userProfile.UserId,
                                                        userProfile.Name,
                                                        userProfile.Email
                                                        
                                                       );
            
            

            return Ok(tokenResponse);
        }

        private async Task<RegisterResponse> RegisterAsyncFromAuth0(string email,string password)
        {
            var rawResult = await _httpClient.PostAsync(registerUrl, new FormUrlEncodedContent(new[]
            {
                new KeyValuePair<string, string>("client_id",_clientId),
                new KeyValuePair<string, string>("email",email),
                new KeyValuePair<string, string>("password",password),
                new KeyValuePair<string, string>("connection",_connection),
            }));

            var data = await rawResult.Content.ReadAsStringAsync();

            return JsonConvert.DeserializeObject<RegisterResponse>(data);
        }

        private async Task<TokenResponse> GetTokenAsyncFromAuth0(string userName, string password)
        {

            var rawResult = await _httpClient.PostAsync(tokenUrl, new FormUrlEncodedContent(new[]
            {
                new KeyValuePair<string, string>("grant_type","password"),
                new KeyValuePair<string, string>("client_id",_clientId),
                new KeyValuePair<string, string>("audience",_audience),
                new KeyValuePair<string, string>("username",userName),
                new KeyValuePair<string, string>("password",password),
                new KeyValuePair<string, string>("scope","openid"),
            }));

            //return await rawResult.Content.ReadAsAsync<TokenResponse>();

            var data = await rawResult.Content.ReadAsStringAsync();

            return JsonConvert.DeserializeObject<TokenResponse>(data);
        }

        private async Task<UserProfile> GetUserInfoFromAuth0(string access_token)
        {

            _httpClient.DefaultRequestHeaders.Authorization =
                                new AuthenticationHeaderValue("Bearer", access_token);

            var rawResult = await _httpClient.GetAsync(userProfileUrl);

            var data = await rawResult.Content.ReadAsStringAsync();

            return JsonConvert.DeserializeObject<UserProfile>(data);
        }
    }

    internal class UserProfile
    {
        [JsonProperty("sub")]
        public string UserId { get; set; }

        public string Name { get; set; }
        public string Email { get; set; }


        public string Role { get; set; }

        public UserProfile(string userId, string name, string email)
        {
            UserId = userId;
            Name = name;
            Email = email;
            
        }


    }

    public class LoginDetail
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }

    public class RegisterDetail
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

     internal class RegisterResponse
    {
        [JsonProperty("_id")]
        public string Id { get; set; }

        [JsonProperty("email_verified")]
        public string EmailVerified { get; set; }

        [JsonProperty("email")]
        public string Email { get; set; }
    }
    internal class TokenResponse
    {
        [JsonProperty("access_token")]
        public string AccessToken { get; set; }

        [JsonProperty("refresh_token")]
        public string RefreshToken { get; set; }


        public UserProfile UserProfile { get; set; }
    }

   
}