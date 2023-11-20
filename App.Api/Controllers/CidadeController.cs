using App.Domain.DTO;
using App.Domain.Entities;
using App.Domain.Interfaces.Application;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace App.Api.Controllers
{
    [Produces("application/json")]
    [Route("cidade")]
    public class CidadeController : Controller
    {
        private ICidadeService _cidadeService;
        public CidadeController(ICidadeService cidadeService)
        {
            _cidadeService = cidadeService;
        }
        [HttpPost("criar")]
        public IActionResult Criar([FromBody] Cidade cidade)
        {
            try
            {
                _cidadeService.Criar(cidade);
                return Json(RetornoApi.Sucesso("Cidade criada com sucesso!"));
            }
            catch (Exception ex)
            {
                return Json(RetornoApi.Erro(ex.Message));
            }
        }
        [HttpPut("editar")]
        public IActionResult Editar([FromBody] Cidade cidade)
        {
            try
            {
                _cidadeService.Editar(cidade);
                return Json(RetornoApi.Sucesso("Cidade editada com sucesso!"));
            }
            catch (Exception ex)
            {
                return Json(RetornoApi.Erro(ex.Message));
            }
        }
        [HttpDelete("deletar")]
        public IActionResult Deletar([FromBody] int id)
        {
            try
            {
                _cidadeService.Deletar(id);
                return Json(RetornoApi.Sucesso("Cidade deletada com sucesso!"));
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
                var cidade = _cidadeService.BuscarPorId(id);
                return Json(RetornoApi.Sucesso(cidade));
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
                var obj = _cidadeService.BuscarLista(busca);
                return Json(RetornoApi.Sucesso(obj));
            }
            catch (Exception ex)
            {
                return Json(RetornoApi.Erro(ex.Message));
            }
        }
    }
}
