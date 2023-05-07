using Hospital.DTO;
using Hospital.Models;

namespace Hospital.Services.Intefaces
{
    public interface IMedicosService
    {
        Task<Medicos> GetMedicoByUserNameAndPassword(string userName, string password);
        Task<IEnumerable<Medicos>> GetMedicos();
        Task<Medicos> GetMedicoByUserName(string userName);
        Task<Medicos> InsertMedico(MedicosDTO medico);
        Task<bool> UpdateMedico(string user, MedicosDTO medicodto);
        Task<bool> DeleteMedico(string userName);
        Task<Medicos> GetMedicoByToken(string token);

    }
}
