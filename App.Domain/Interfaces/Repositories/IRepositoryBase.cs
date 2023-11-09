using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace App.Domain.Interfaces.Repositories
{
    public interface IRepositoryBase where TEntity : class
    {
        IOrderedQueryable<TEntity> Query(Expression<TEntity, bool>> where);
        void Save(TEntity obj);
        void Update(TEntity obj);
        void Delete(int id);

        int saveChanges();

        DbContext Context();





    }
}
