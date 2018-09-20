using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using StudentPortal.Domain.Users;
using StudentPortal.Persistance;

namespace StudentPortal.WebApp.RegisterApi
{
    [Produces("application/json")]
    [Route("api/Register")]
    public class RegisterController : Controller
    {
        private readonly IUserRepository _userRepository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly string _clientId;
        private readonly string _connection;
        private readonly HttpClient _httpClient;
        private string registerUrl = "dbconnections/signup";

        public RegisterController(IUserRepository userRepository,IUnitOfWork unitOfWork,IConfiguration iconfiguration)
        {
            _userRepository = userRepository;
            _unitOfWork = unitOfWork;
            _clientId = iconfiguration.GetSection("Auth0Settings").GetSection("ClientId").Value;
             _connection = iconfiguration.GetSection("Auth0Settings").GetSection("Connection").Value;

            _httpClient = new HttpClient()
            {
                BaseAddress = new Uri(iconfiguration.GetSection("Auth0Settings").GetSection("Host").Value),
            };

            _httpClient.DefaultRequestHeaders.Accept.Clear();
        }

     [HttpPost]
        public async Task<IActionResult> Register([FromBody] SaveUserResource model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var createUser = new User(model.Id,model.Name, model.Email, model.Password, model.ConfirmPassword, 
                                        model.Qualification, model.ContactNumber, model.Address);

             var registerResponse = await RegisterAsyncFromAuth0(model.Email, model.Password);                           
            _userRepository.Add(createUser);
            await _unitOfWork.CompleteAsync();
            return Ok(registerResponse);

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
}