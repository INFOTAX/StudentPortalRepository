using Microsoft.EntityFrameworkCore;
using StudentPortal.Domain.Users;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace StudentPortal.Persistance.Repositories
{
    public class UserRepository : RepositoryBase<User>, IUserRepository
    {
        private readonly StudentDbContext _context;

        public UserRepository(StudentDbContext context) : base(context)
        {
            _context = context;
        }

        public override Task<User> GetAllAsync(object id)
        {
            throw new NotImplementedException();
        }

        public override Task<User> GetAsync(object id)
        {
            return _context.Users.FindAsync(id);
        }

        public Task<User> GetAsync(object id, string userProfileId)
        {
            return _context.Users.FindAsync(id);
        }
    }
}
