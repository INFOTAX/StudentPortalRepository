using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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

        public RegisterController(IUserRepository userRepository,IUnitOfWork unitOfWork)
        {
            _userRepository = userRepository;
            _unitOfWork = unitOfWork;
        }

     [HttpPost]
        public async Task<IActionResult> Register([FromBody] SaveUserResource model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var createUser = new User(model.Id,model.Name, model.Email, model.Password, model.ConfirmPassword, 
                                        model.Qualification, model.ContactNumber, model.Address);
            _userRepository.Add(createUser);
            await _unitOfWork.CompleteAsync();
            return Ok(createUser);
        }
    }
}