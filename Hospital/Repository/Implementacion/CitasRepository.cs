using Hospital.Data;
using Hospital.DTO;
using Hospital.Models;
using Hospital.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hospital.Repository.Implementacion
{
    public class CitasRepository : ICitasRepository
    {
        private readonly HospitalContext _context;


        public CitasRepository(HospitalContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Citas>> GetCitas()
        {
            return await _context.Citas.ToListAsync();
        }

        public async Task<Citas> GetCitasById(int id)
        {
            return await _context.Citas.FindAsync(id);
        }

        public async Task<Citas> InsertCitas(Citas citas)
        {
            _context.Citas.Add(citas);
            await _context.SaveChangesAsync();
            return citas;
        }

        public async Task<Citas> UpdateCitas(int id, Citas citas)
        {
            var citasToUpdate = await _context.Citas.FindAsync(id);

            if (citasToUpdate != null)
            {
                citasToUpdate.Fecha = citas.Fecha;
                citasToUpdate.Observaciones = citas.Observaciones;
                citasToUpdate.usuariopaciente = citas.usuariopaciente;
                citasToUpdate.usuariomedico = citas.usuariomedico;

                await _context.SaveChangesAsync();
            }

            return citasToUpdate;
        }

        public async Task<bool> DeleteCitas(int id)
        {
            var citas = await _context.Citas.FindAsync(id);

            if (citas == null)
            {
                return false;
            }

            _context.Citas.Remove(citas);
            await _context.SaveChangesAsync();

            return true;
        }


        public async Task<IEnumerable<Citas>> GetCitasByPaciente(string pacientenombre)
        {
            return await _context.Citas
                .Where(c => c.usuariopaciente == pacientenombre)
                .ToListAsync();
        }

        public async Task<IEnumerable<Citas>> GetCitasByMedico(string mediconombre)
        {
            return await _context.Citas
                .Where(c => c.usuariomedico == mediconombre)
                .ToListAsync();
        }



    }


}

