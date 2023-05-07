using Hospital.Models;

namespace Hospital.Repository
{
    public interface IMedicosRepository
    {
        Task<Medicos> GetMedicoByUserNameAndPassword(string userName, string password);
        Task<IEnumerable<Medicos>> GetMedicos();
        Task<Medicos> GetMedicoByUserName(string userName);
        Task<Medicos> InsertMedico(Medicos medico);
        Task<bool> UpdateMedico(string user, Medicos medico);
        Task<bool> DeleteMedico(string userName);

        Task<List<Medicos>> GetMedicosDisponiblesParaFecha(DateTime fechaCita);
    }

}
