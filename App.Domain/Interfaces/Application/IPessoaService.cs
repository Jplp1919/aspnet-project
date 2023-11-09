using App.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Domain.Interfaces.Application
{
    internal interface IPessoaService
    {
        void Editar(Pessoa obj);

        void Deletar(int id);

        void criar(Pessoa obj);

        Pessoa BuscarPorId(int id);

        List<Pessoa> BuscarLista();


    }
}
