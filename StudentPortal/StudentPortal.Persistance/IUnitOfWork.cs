using System.Threading.Tasks;

namespace StudentPortal.Persistance
{
    public interface IUnitOfWork
    {
        Task CompleteAsync();
    }
}