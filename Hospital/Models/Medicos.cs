namespace Hospital.Models
{
    public class Medicos : Usuarios
    {
        public string NumColegiado { get; set; }
        public virtual ICollection<Citas> Citas { get; set; }
    }
}
