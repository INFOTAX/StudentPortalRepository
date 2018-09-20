using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StudentPortal.WebApp.RegisterApi
{
    public class SaveUserResource
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public string Qualification { get; set; }
        public string ContactNumber { get; set; }
        public string Address { get; set; }
    }
}
