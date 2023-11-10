﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using App.Domain.DTO;
using App.Domain.Interfaces.Application;
using Microsoft.AspNetCore.Authorization;

namespace App.Application.Services
{
    public class LoginService : ILoginService
    {

        private readonly ITokenService _tokenService;

        public LoginService(ITokenService tokenService)
        {
            _tokenService = tokenService;
        }

        public PessoaDTO Login(PessoaDTO pessoa)
        {
            string token = _tokenService.GenerateToken(pessoa);
            pessoa.Token = token;
            pessoa.Senha = "";
            return pessoa;
        }
    }
}
