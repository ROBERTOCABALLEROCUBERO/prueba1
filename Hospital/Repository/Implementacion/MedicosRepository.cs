using Hospital.Data;
using Hospital.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Hospital.Repository.Implementacion
{
    public class MedicosRepository : IMedicosRepository
    {
        private readonly HospitalContext _context;

        public MedicosRepository(HospitalContext context)
        {
            _context = context;
        }

        public async Task<Medicos> GetMedicoByUserNameAndPassword(string userName, string password)
        {
            var medico = await _context.Medicos.FirstOrDefaultAsync(m => m.Usuario == userName);

            if (medico == null)
            {
                return null;
            }

            var passwordHasher = new PasswordHasher<string>();
            var result = passwordHasher.VerifyHashedPassword(null, medico.Clave, password);

            if (result != PasswordVerificationResult.Success)
            {
                return null;
            }

            return medico;
        }

        public async Task<IEnumerable<Medicos>> GetMedicos()
        {
            return await _context.Medicos.ToListAsync();
        }


        public async Task<Medicos> GetMedicoByUserName(string userName)
        {
            return await _context.Medicos.FirstOrDefaultAsync(m => m.Usuario == userName);
        }

        public async Task<Medicos> InsertMedico(Medicos medico)
        {
            if (_context.Pacientes.Any(p => p.Usuario == medico.Usuario))
            {
                // El médico ya existe en la tabla Pacientes
                // Puedes lanzar una excepción aquí o devolver un valor nulo
                throw new Exception("El usuario ya existe en la tabla Pacientes.");
            }

            if (_context.Medicos.Any(m => m.Usuario == medico.Usuario))
            {
                throw new Exception("El usuario ya existe en la tabla Medico.");
            }

            try
            {
                _context.Medicos.Add(medico);
                await _context.SaveChangesAsync();
                // Código que guarda los cambios en la base de datos


            }
            catch (Exception ex)
            {
                // Manejar la excepción y mostrar el mensaje de error completo
                Console.WriteLine("Error al guardar los cambios: " + ex.InnerException.Message);
            }

            return medico;
        }


        public async Task<List<Medicos>> GetMedicosDisponiblesParaFecha(DateTime fechaCita)
        {
            var medicos = await _context.Medicos.ToListAsync();
            var citas = await _context.Citas.Where(c => c.Fecha == fechaCita).ToListAsync();

            var medicosDisponibles = new List<Medicos>();
            foreach (var medico in medicos)
            {
                var citasDelDia = citas.Where(c => c.usuariomedico == medico.Usuario).ToList();
                if (citasDelDia.Count < 10)
                {
                    medicosDisponibles.Add(medico);
                }
            }

            return medicosDisponibles;
        }



        public async Task<bool> UpdateMedico(string user, Medicos medico)
        {
            var existingMedico = await _context.Medicos.FirstOrDefaultAsync(m => m.Usuario == user);

            if (_context.Pacientes.Any(p => p.Usuario == medico.Usuario))
            {
                // El médico ya existe en la tabla Pacientes
                // Puedes lanzar una excepción aquí o devolver un valor nulo
                throw new Exception("El usuario ya existe en la tabla Pacientes.");
            }

            if (_context.Medicos.Any(m => m.Usuario == medico.Usuario))
            {
                throw new Exception("El usuario ya existe en la tabla Medico.");
            }

            if (existingMedico != null)
            {
                existingMedico.Nombre = medico.Nombre;
                existingMedico.Apellidos = medico.Apellidos;
                existingMedico.Clave = medico.Clave;
                existingMedico.NumColegiado = medico.NumColegiado;
                await _context.SaveChangesAsync();
                return true;
            }

            return false;
        }

        public async Task<bool> DeleteMedico(string userName)
        {
            var existingMedico = await _context.Medicos.FirstOrDefaultAsync(m => m.Usuario == userName);

            if (existingMedico != null)
            {
                _context.Medicos.Remove(existingMedico);
                await _context.SaveChangesAsync();
                return true;
            }

            return false;
        }


    }

}
