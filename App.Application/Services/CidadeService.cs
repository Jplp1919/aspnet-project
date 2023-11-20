using App.Domain.Entities;
using App.Domain.Interfaces.Application;
using App.Domain.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Application.Services
{
    public class CidadeService : ICidadeService
    {

        private IRepositoryBase<Cidade> _repository { get; set; }
        public CidadeService(IRepositoryBase<Cidade> repository)
        {
            _repository = repository;
        }


        private void ValidarDados(Cidade cidade )
        {
            if (string.IsNullOrEmpty(cidade.Nome))
            {

                throw new ArgumentNullException(nameof(cidade.Nome), "Nome não pode estar vazio.");
            }

            if (string.IsNullOrEmpty(cidade.Uf))
            {
                throw new ArgumentNullException(nameof(cidade.Uf), "O UF não pode estar vazio.");
            }

            if (string.IsNullOrEmpty(cidade.Cep))
            {
                throw new ArgumentNullException(nameof(cidade.Cep), "O CEP não pode estar vazio.");
            }
          
        }

        public List<Cidade> BuscarLista(string? busca)
        {
            busca = (busca ?? "").ToUpper();

            return _repository.Query(x =>

           (
           x.Nome.ToUpper().Contains(busca) ||
           x.Uf.ToUpper().Contains(busca) ||
           x.Cep.ToUpper().Contains(busca)
           )

           ).ToList();
        }

        public Cidade BuscarPorId(int id)
        {
            var obj = _repository.Query(x => x.Id == id).FirstOrDefault();
            return obj;
        }

        public void Criar(Cidade obj)
        {
            ValidarDados(obj);
            _repository.Save(obj);
            _repository.SaveChanges();
        }

        public void Deletar(int id)
        {
            var dadosAntigos = _repository.Query(x => x.Id == id).FirstOrDefault();
            if (dadosAntigos == null)
            {

                throw new ArgumentException("Cidade não encontrada.");
            }
            _repository.Delete(id);
            _repository.SaveChanges();
        }

        public void Editar(Cidade cidade)
        {
            var dadosAntigos = _repository.Query(x => x.Id ==
             cidade.Id).FirstOrDefault();
            if (dadosAntigos == null)
            {
                throw new ArgumentException("Usuário não encontrado.");
            }
            Cidade dadosAtualizados = new Cidade
            {
                Id = dadosAntigos.Id,
                Nome = cidade.Nome ?? dadosAntigos.Nome,
                Uf = cidade.Uf ?? dadosAntigos.Uf,
                Cep = cidade.Cep ?? dadosAntigos.Cep,
               
            };
            _repository.Update(dadosAtualizados);
            _repository.SaveChanges();
        }
    }
}
