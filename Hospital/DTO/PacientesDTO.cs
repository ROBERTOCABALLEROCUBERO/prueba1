using Hospital.Data;
using Hospital.Models;
using System.Data.Entity;

namespace Hospital.DTO
{
    public class PacientesDTO
    {


            public string Usuario { get; set; }
            public string Nombre { get; set; }
            public string Apellidos { get; set; } 

            public string Clave { get; set; }
            public string NumSeguridadSocial { get; set; }
            public string NumTarjeta { get; set; }
            public string Telefono { get; set; }
            public string Direccion { get; set; }
  //          public ICollection<CitaDTO> Citas { get; set; }
        }


}    

