using Hospital.DTO;
using Hospital.Models;
using System.Security.Claims;

namespace Hospital.Services
{
    public interface ICitasService
    {


        Task<IEnumerable<Citas>> GetCitas();
        Task<CitasDTO> GetCitasById(int id);
        Task<CitasDTO> InsertCitas(CitasDTO citas, ClaimsPrincipal user);
        Task<CitasDTO> UpdateCitas(int id, CitasDTO citas);
        Task<bool> DeleteCitas(int id);
        Task<IEnumerable<CitasDTO>> GetCitasByPaciente(string pacientenombre);
        Task<IEnumerable<CitasDTO>> GetCitasByMedico(string mediconombre);
    }
}

    

