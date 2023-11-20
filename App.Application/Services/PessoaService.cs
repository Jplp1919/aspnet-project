
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
    public class PessoaService : IPessoaService
    {
        private IRepositoryBase<Pessoa> _repository { get; set; }
        public PessoaService(IRepositoryBase<Pessoa> repository)
        {
            _repository = repository;
        }
        private void ValidarDados(Pessoa pessoa)
        {
            if (string.IsNullOrEmpty(pessoa.Nome))
            {
                
                throw new ArgumentNullException(nameof(pessoa.Nome), "Nome não pode estar vazio.");
            }

            if (string.IsNullOrEmpty(pessoa.Cpf))
            {
                throw new ArgumentNullException(nameof(pessoa.Cpf), "O CPF não pode estar vazio.");
            }

            if (string.IsNullOrEmpty(pessoa.Email))
            {
                throw new ArgumentNullException(nameof(pessoa.Email), "Email não pode estar vazio.");
            }
            if (string.IsNullOrEmpty(pessoa.Senha))
            {
                throw new ArgumentNullException(nameof(pessoa.Senha), "Senha não pode estar vazia.");
            }
        }
      
      public void Criar(Pessoa pessoa)
        {
            ValidarDados(pessoa);
            _repository.Save(pessoa);
            _repository.SaveChanges();
        }
        public void Editar(Pessoa pessoa)
        {
            var dadosAntigos = _repository.Query(x => x.Id ==
            pessoa.Id).FirstOrDefault();
            if (dadosAntigos == null)
            {
                throw new ArgumentException("Usuário não encontrado.");
            }
            Pessoa dadosAtualizados = new Pessoa
            {
                Id = dadosAntigos.Id,
                Nome = pessoa.Nome ?? dadosAntigos.Nome,
                Cpf = pessoa.Cpf ?? dadosAntigos.Cpf,
                DataNascimento = (pessoa.DataNascimento != null) ? pessoa.DataNascimento :
            dadosAntigos.DataNascimento,
                Email = (pessoa.Email != null) ? pessoa.Email :
            dadosAntigos.Email,
                Senha = (pessoa.Senha != null) ? pessoa.Senha :
            dadosAntigos.Senha
            };
            _repository.Update(dadosAtualizados);
            _repository.SaveChanges();
        }
        public void Deletar(int id)
        {

            var dadosAntigos = _repository.Query(x => x.Id == id).FirstOrDefault();
            if (dadosAntigos == null)
            {
               
                throw new ArgumentException("Usuário não encontrado.");
            }
            _repository.Delete(id);
            _repository.SaveChanges();
        }
        public Pessoa BuscarPorId(int id)
        {
            var obj = _repository.Query(x => x.Id == id).FirstOrDefault();
            return obj;
        }
        public List<Pessoa> BuscarLista(string? busca)
        {
            busca = (busca ?? "").ToUpper();

            return _repository.Query(x =>

           (
           x.Nome.ToUpper().Contains(busca) ||
           x.DataNascimento.Year.ToString().Contains(busca) ||
           x.DataNascimento.Month.ToString().Contains(busca) ||
           x.Cpf.ToUpper().Contains(busca)

           )

           ).ToList();


        }

        public Pessoa Login(string email, string senha)
        {
           var pessoas = new List<Pessoa>() { 
             new Pessoa { Id = 1, Nome = "teste", Email = "teste.net", Senha = "123" },
             new Pessoa { Id = 1, Nome = "teste2", Email = "teste2.net", Senha = "123" }
       };
            return pessoas.FirstOrDefault(x =>
            x.Email == email
            && x.Senha == senha);
        }
    }
}
