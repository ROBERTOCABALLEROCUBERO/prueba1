using Hospital.DTO;
using Hospital.Models;

namespace Hospital.Services.Intefaces
{
    public interface IDiagnosticosService
    {
        Task<IEnumerable<DiagnosticosDTO>> GetDiagnosticos();
        Task<DiagnosticosDTO> GetDiagnosticoById(int id);
        Task<DiagnosticosDTO> InsertDiagnostico(DiagnosticosDTO diagnostico);
        Task<Diagnosticos> UpdateDiagnostico(int id, DiagnosticosDTO diagnostico);
        Task<bool> DeleteDiagnostico(int id);
        Task<Diagnosticos> GetDiagnosticoByCitaId(int citaId);
    }

}
