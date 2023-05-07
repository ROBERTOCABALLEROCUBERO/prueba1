using Hospital.DTO;
using Hospital.Models;

namespace Hospital.Services
{
    public interface IPacientesService
    {
        Task<Pacientes> GetPacienteByUserNameAndPassword(string userName, string password);
        Task<IEnumerable<Pacientes>> GetPacientes();
        Task<Pacientes> GetPacienteByUserName(string userName);
        Task<Pacientes> InsertPaciente(Pacientes paciente);
        Task<Pacientes> UpdatePaciente(string userName, PacientesDTO paciente);
        Task<Pacientes> DeletePaciente(string userName);
        Task<Pacientes> RegisterPacienteAsync(PacientesDTO paciente);

        Task<Pacientes> GetPacienteByToken(string username);
    }
}
