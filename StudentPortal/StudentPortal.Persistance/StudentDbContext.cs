using Microsoft.EntityFrameworkCore;
using StudentPortal.Domain.Users;
using System;
using System.Collections.Generic;
using System.Text;

namespace StudentPortal.Persistance
{

    public class StudentDbContext : DbContext
    {
        public StudentDbContext(DbContextOptions<StudentDbContext> options) : base((DbContextOptions)options)
        {

        }

        public DbSet<User> Users { get; set; }
    }
}
