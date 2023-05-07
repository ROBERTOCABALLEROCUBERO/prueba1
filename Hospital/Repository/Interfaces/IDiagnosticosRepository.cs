using Hospital.Models;

namespace Hospital.Repository
{
    public interface IDiagnosticosRepository
    {

      
            Task<IEnumerable<Diagnosticos>> GetDiagnosticos();
            Task<Diagnosticos> GetDiagnosticoById(int id);
            Task<Diagnosticos> InsertDiagnostico(Diagnosticos diagnostico);
            Task<Diagnosticos> UpdateDiagnostico(int id, Diagnosticos diagnostico);
            Task<Diagnosticos> DeleteDiagnostico(int id);
            Task<Diagnosticos> GetDiagnosticoByCitaId(int citaId);
        }
    }

