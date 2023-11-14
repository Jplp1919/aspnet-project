using App.Domain.DTO;

namespace App.Domain.Interfaces.Application
{
    public interface ITokenService
    {
       string GenerateToken(PessoaDTO pessoa);
    }




}
