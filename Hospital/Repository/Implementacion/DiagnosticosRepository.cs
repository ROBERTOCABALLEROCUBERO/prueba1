using Hospital.Data;
using Hospital.Models;
using Hospital.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Hospital.Repository.Implementacion
{

    public class DiagnosticosRepository : IDiagnosticosRepository
    {
        private readonly HospitalContext _context;

        public DiagnosticosRepository(HospitalContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Diagnosticos>> GetDiagnosticos()
        {
            return await _context.Diagnosticos.ToListAsync();
        }

        public async Task<Diagnosticos> GetDiagnosticoById(int id)
        {
            return await _context.Diagnosticos.FindAsync(id);
        }

        public async Task<Diagnosticos> InsertDiagnostico(Diagnosticos diagnostico)
        {
            _context.Diagnosticos.Add(diagnostico);
            await _context.SaveChangesAsync();
            return diagnostico;
        }

        public async Task<Diagnosticos> UpdateDiagnostico(int id, Diagnosticos diagnostico)
        {
            var diagnosticoToUpdate = await _context.Diagnosticos.FindAsync(id);

            if (diagnosticoToUpdate != null)
            {
                diagnosticoToUpdate.ValoracionEspecialista = diagnostico.ValoracionEspecialista;
                diagnosticoToUpdate.Enfermedad = diagnostico.Enfermedad;
                diagnosticoToUpdate.CitaId = diagnostico.CitaId;

                await _context.SaveChangesAsync();
            }

            return diagnosticoToUpdate;
        }

        public async Task<Diagnosticos> DeleteDiagnostico(int id)
        {
            var diagnosticoToDelete = await _context.Diagnosticos.FindAsync(id);

            if (diagnosticoToDelete != null)
            {
                _context.Diagnosticos.Remove(diagnosticoToDelete);
                await _context.SaveChangesAsync();
            }

            return diagnosticoToDelete;
        }

        public async Task<Diagnosticos> GetDiagnosticoByCitaId(int citaId)
        {
            return await _context.Diagnosticos.FirstOrDefaultAsync(d => d.CitaId == citaId);
        }
    }
}

