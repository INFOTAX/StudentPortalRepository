using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace StudentPortal.Domain.Users
{
    public interface IUserRepository : IRepositoryBase<User>
    {
        Task<User> GetAsync(object id, string userProfileId);
        
    }
}
