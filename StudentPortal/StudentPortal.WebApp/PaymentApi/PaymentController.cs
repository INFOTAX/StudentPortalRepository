using System;
using System.Net.Http;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using StudentPortal.Persistance;

namespace StudentPortal.WebApp.PaymentApi
{
    [Produces("application/json")]
    [Route("api/Payment")]
    public class PaymentController : Controller
    {
        private readonly IReadModelDatabase _database;
        private readonly HttpClient _httpClient;
        private readonly string _key;

        public PaymentController(IReadModelDatabase database,IConfiguration iconfiguration)
        {
            _database = database;
            

            _httpClient = new HttpClient()
            {
                BaseAddress = new Uri(iconfiguration.GetSection("PayU").GetSection("URL").Value),
            };

            _httpClient.DefaultRequestHeaders.Accept.Clear();
      

        }
        

        // [HttpPost]
        // public async Task<IActionResult> Payment([FromBody] PaymentResource model)
        // {

        // }

    }
}