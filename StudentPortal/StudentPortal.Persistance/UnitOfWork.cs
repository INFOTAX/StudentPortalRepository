using System.Threading.Tasks;

namespace StudentPortal.Persistance
{
    public class UnitOfWork : IUnitOfWork
    {
         private readonly StudentDbContext _context;
        public UnitOfWork(StudentDbContext context)
        {
            _context = context;

        }
        public async Task CompleteAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}