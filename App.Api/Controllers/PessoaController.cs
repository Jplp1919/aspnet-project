using App.Application.Services;
using App.Domain.DTO;
using App.Domain.Entities;
using App.Domain.Interfaces.Application;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace App.Api.Controllers
{
    [Produces("application/json")]
    [Route("pessoa")]
    public class PessoaController : Controller
    {
        private IPessoaService _pessoaService;
        public PessoaController(IPessoaService pessoaService)
        {
            _pessoaService = pessoaService;
        }
        [HttpPost("criar")]
        public IActionResult Criar([FromBody] Pessoa pessoa)
        {
            try
            {
                _pessoaService.Criar(pessoa);
                return Json(RetornoApi.Sucesso("Pessoa criada com sucesso!"));
            }
            catch (Exception ex)
            {
                return Json(RetornoApi.Erro(ex.Message));
            }
        }
        [HttpPut("editar")]
        public IActionResult Editar([FromBody] Pessoa pessoa)
        {
            try
            {
                _pessoaService.Editar(pessoa);
                return Json(RetornoApi.Sucesso("Pessoa editada com sucesso!"));
            }
            catch (Exception ex)
            {
                return Json(RetornoApi.Erro(ex.Message));
            }
        }
        [HttpDelete("deletar")]
        public IActionResult Deletar([FromHeader] int id)
        {
            try
            {
                _pessoaService.Deletar(id);
                return Json(RetornoApi.Sucesso("Pessoa deletada com sucesso!"));
            }
            catch (Exception ex)
            {
                return Json(RetornoApi.Erro(ex.Message));
            }
        }
        [HttpGet("buscarPorId")]
        public IActionResult BuscarPorId([FromHeader] int id)
        {
            try
            {
                var pessoa = _pessoaService.BuscarPorId(id);
                return Json(RetornoApi.Sucesso(pessoa));
            }
            catch (Exception ex)
            {
                return Json(RetornoApi.Erro(ex.Message));
            }
        }

        [HttpGet("login")]
        public IActionResult Login([FromHeader] string email, string senha)
        {
            try
            {
                var pessoa = _pessoaService.Login(email, senha);
                return Json(RetornoApi.Sucesso(pessoa));
            }
            catch (Exception ex)
            {
                return Json(RetornoApi.Erro(ex.Message));
            }
        }


        [HttpGet("buscarLista")]
        [AllowAnonymous]
        public JsonResult BuscarLista(string? busca)
        {
            try
            {
                var obj = _pessoaService.BuscarLista(busca);
                return Json(RetornoApi.Sucesso(obj));
            }
            catch (Exception ex)
            {
                return Json(RetornoApi.Erro(ex.Message));
            }
        }
    }
}
