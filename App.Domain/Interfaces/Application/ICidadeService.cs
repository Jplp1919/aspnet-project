﻿using App.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Domain.Interfaces.Application
{
    public interface ICidadeService
    {
        void Editar(Cidade obj);

        void Deletar(int id);

        void Criar(Cidade obj);

        Cidade BuscarPorId(int id);

        List<Cidade> BuscarLista(string? busca);

    }
}
