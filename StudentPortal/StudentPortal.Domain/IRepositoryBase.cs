using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace StudentPortal.Domain
{
     public interface IRepositoryBase<T> where T : class
    {
        Task<T> GetAsync(object id);
        Task<T> GetAllAsync(object id);

        void Add(T entity);

        void AddRange(IEnumerable<T> entities);

        void Remove(T entity);

        void RemoveRange(IEnumerable<T> entities);

    }
}
