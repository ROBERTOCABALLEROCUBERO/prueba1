using System.ComponentModel.DataAnnotations;

namespace Hospital.Models
{
    public class Usuarios
    {
        [Key]
        public string Usuario { get; set; }
        public string Nombre { get; set; }
        public string Apellidos { get; set; }
        public string Clave { get; set; }
    }

}
