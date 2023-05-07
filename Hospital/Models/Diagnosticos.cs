using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Hospital.Models
{
    public class Diagnosticos
    {
        [Key]
        public int Id { get; set; }
        public string ValoracionEspecialista { get; set; }
        public string Enfermedad { get; set; }
        public int CitaId { get; set; }
        public virtual Citas Cita { get; set; }
    }
}
