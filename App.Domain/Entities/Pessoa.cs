using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.Domain.Entities
{
    public class Pessoa
    {
  
        public int Id { get; set; }

        [Required]
        public string Nome { get; set; }

        [Required]
        public DateOnly DataNascimento { get; set; }
        
        [Required]
        public string Cpf { get; set; }
        
        [Required]
        public string Email { get; set; }
        
        [Required]
        public string Senha { get; set; }


    }
}
