using Microsoft.EntityFrameworkCore;
using StudentPortal.Domain.Users;
using System;
using System.Collections.Generic;
using System.Text;

namespace StudentPortal.Persistance
{
    public interface IReadModelDatabase
    {
        DbSet<User> Users { get; }
    }
    public class ReadModelDatabase : IReadModelDatabase
    {
        private readonly StudentDbContext _context;

        public ReadModelDatabase(StudentDbContext context)
        {
            _context = context;
        }
        public DbSet<User> Users => _context.Users;
    }
}
