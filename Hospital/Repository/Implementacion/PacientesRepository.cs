using Hospital.Data;
using Hospital.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Hospital.Repository.Implementacion
{
    public class PacientesRepository : IPacientesRepository
    {
        private readonly HospitalContext _context;

        public PacientesRepository(HospitalContext context)
        {
            _context = context;
        }

        public async Task<Pacientes> GetPacienteByUserNameAndPassword(string userName, string password)
        {
            var paciente = await _context.Pacientes.FirstOrDefaultAsync(p => p.Usuario == userName);

            if (paciente == null)
            {
                return null;
            }

            var passwordHasher = new PasswordHasher<string>();
            var result = passwordHasher.VerifyHashedPassword(null, paciente.Clave, password);

            if (result != PasswordVerificationResult.Success)
            {
                return null;
            }

            return paciente;
        }

        public async Task<IEnumerable<Pacientes>> GetPacientes()
        {
            return await _context.Pacientes.ToListAsync();
        }

        public async Task<Pacientes> GetPacienteByUserName(string userName)
        {
            return await _context.Pacientes.FirstOrDefaultAsync(p => p.Usuario == userName);
        }

        public async Task<Pacientes> InsertPaciente(Pacientes paciente)
        {
            // Verificar si el usuario ya existe en la tabla Médicos
            if (_context.Medicos.Any(m => m.Usuario == paciente.Usuario))
            {
                throw new Exception("El usuario ya existe en la tabla Médicos.");
            }

            // Verificar si el usuario ya existe en la tabla Pacientes
            if (_context.Pacientes.Any(p => p.Usuario == paciente.Usuario))
            {
                throw new Exception("El usuario ya existe en la tabla Pacientes.");
            }

            // Si el usuario no existe en ninguna de las dos tablas, se guarda
            _context.Pacientes.Add(paciente);
            await _context.SaveChangesAsync();
            return paciente;
        }


        public async Task<Pacientes> UpdatePaciente(string userName, Pacientes paciente)
        {
            var pacienteToUpdate = await _context.Pacientes.FirstOrDefaultAsync(p => p.Usuario == userName);

            if (pacienteToUpdate != null)
            {
                pacienteToUpdate.Nombre = paciente.Nombre;
                pacienteToUpdate.Apellidos = paciente.Apellidos;
                pacienteToUpdate.Clave = paciente.Clave;
                pacienteToUpdate.NumSeguridadSocial = paciente.NumSeguridadSocial;
                pacienteToUpdate.NumTarjeta = paciente.NumTarjeta;
                pacienteToUpdate.Telefono = paciente.Telefono;
                pacienteToUpdate.Direccion = paciente.Direccion;

                await _context.SaveChangesAsync();
            }
            return pacienteToUpdate;
        }

        public async Task<Pacientes> DeletePaciente(string userName)
        {
            var pacienteToDelete = await _context.Pacientes.FirstOrDefaultAsync(p => p.Usuario == userName);

            if (pacienteToDelete != null)
            {
                _context.Pacientes.Remove(pacienteToDelete);
                await _context.SaveChangesAsync();
            }

            return pacienteToDelete;
        }
    }
}
