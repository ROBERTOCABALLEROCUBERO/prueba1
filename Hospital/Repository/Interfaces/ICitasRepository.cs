using Hospital.Data;
using Hospital.Models;

namespace Hospital.Repository.Interfaces
{
    public interface ICitasRepository
    {
        Task<IEnumerable<Citas>> GetCitas();
        Task<Citas> GetCitasById(int id);
        Task<Citas> InsertCitas(Citas citas);
        Task<Citas> UpdateCitas(int id, Citas citas);
        Task<bool> DeleteCitas(int id);
        Task<IEnumerable<Citas>> GetCitasByPaciente(string pacientenombre);
        Task<IEnumerable<Citas>> GetCitasByMedico(string mediconombre);


    }
}
