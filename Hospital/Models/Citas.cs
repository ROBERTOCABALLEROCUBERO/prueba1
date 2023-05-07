using System.ComponentModel.DataAnnotations;

namespace Hospital.Models
{
    public class Citas
    {
        [Key]
        public int Id { get; set; }
        public DateTime Fecha { get; set; }
        public string Observaciones { get; set; }

        public string usuariopaciente { get; set; }
        public virtual Pacientes Paciente { get; set; }

        public string usuariomedico { get; set; }
        public virtual Medicos Medico { get; set; }

        public virtual Diagnosticos Diagnostico { get; set; }
    }
}
