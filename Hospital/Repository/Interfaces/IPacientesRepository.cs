using Hospital.Models;

namespace Hospital.Repository
{
    public interface IPacientesRepository
    {
        Task<Pacientes> GetPacienteByUserNameAndPassword(string userName, string password);
        Task<IEnumerable<Pacientes>> GetPacientes();
        Task<Pacientes> GetPacienteByUserName(string userName);
        Task<Pacientes> InsertPaciente(Pacientes paciente);
        Task<Pacientes> UpdatePaciente(string userName, Pacientes paciente);
        Task<Pacientes> DeletePaciente(string userName);
    }

}
