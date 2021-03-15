
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace bluemodas.Models
{
    public class Client
    {
        [Key]
        public int id { get; set; }

        [Required(ErrorMessage ="Name field's required")]
        public string name { get; set; }

        [Required(ErrorMessage = "E-mail field's required")]
        public string email { get; set; }

        [Required(ErrorMessage = "Phone field's required")]
        public string phone { get; set; }
    }
}
