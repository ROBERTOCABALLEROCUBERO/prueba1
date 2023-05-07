namespace Hospital.Models
{
    public class Pacientes : Usuarios
    {
        public string NumSeguridadSocial { get; set; }
        public string NumTarjeta { get; set; }
        public string Telefono { get; set; }
        public string Direccion { get; set; }
        public virtual ICollection<Citas> Citas { get; set; }
    }

}
