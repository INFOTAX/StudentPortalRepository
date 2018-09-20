using System;
using System.Collections.Generic;
using System.Text;

namespace StudentPortal.Domain.Users
{
   public class User
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public string Qualification { get; set; }
        public string ContactNumber { get; set; }
        public string Address { get; set; }
        public string Subject { get; set; }

        public User()
        {

        }

        public User(string id,string name,string email,string password,string confirmPassword,string qualification,string contactNumber,string address)
        {
            Id = id;
            Name = name;
            Email = email;
            Password = password;
            ConfirmPassword = confirmPassword;
            Qualification = qualification;
            ContactNumber = contactNumber;
            Address = address;
        }
    }
    
}
