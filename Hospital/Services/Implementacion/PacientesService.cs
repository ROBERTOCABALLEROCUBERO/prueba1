using FluentValidation.Results;
using Hospital.DTO;
using Hospital.Models;
using Hospital.Repository;
using Hospital.Repository.Interfaces;
using System.Security.Claims;

namespace Hospital.Services.Implementacion
{
    public class PacientesService : IPacientesService
    {
        private readonly IPacientesRepository _pacientesRepository;
        private readonly IConfiguration _config;

        public PacientesService(IPacientesRepository pacientesRepository, IConfiguration configuration)
        {
            _pacientesRepository = pacientesRepository;
            _config = configuration;
        }

        public async Task<Pacientes> GetPacienteByUserNameAndPassword(string userName, string password)
        {
            return await _pacientesRepository.GetPacienteByUserNameAndPassword(userName, password);
        }

        public async Task<IEnumerable<Pacientes>> GetPacientes()
        {
            return await _pacientesRepository.GetPacientes();
        }

        public async Task<Pacientes> GetPacienteByUserName(string userName)
        {
            return await _pacientesRepository.GetPacienteByUserName(userName);
        }

        public async Task<Pacientes> InsertPaciente(Pacientes paciente)
        {
            return await _pacientesRepository.InsertPaciente(paciente);
        }

        public async Task<Pacientes> UpdatePaciente(string userName, PacientesDTO pacientesDTO)

        {
            var paciente = new Pacientes
            {
                Usuario = pacientesDTO.Usuario,
                Clave = pacientesDTO.Clave,
                Nombre = pacientesDTO.Nombre,
                Apellidos = pacientesDTO.Apellidos,
                NumSeguridadSocial = pacientesDTO.NumSeguridadSocial,
                NumTarjeta = pacientesDTO.NumTarjeta,
                Telefono = pacientesDTO.Telefono,
                Direccion = pacientesDTO.Direccion
            };
            return await _pacientesRepository.UpdatePaciente(userName, paciente);
        }

        public async Task<Pacientes> DeletePaciente(string userName)
        {
            return await _pacientesRepository.DeletePaciente(userName);
        }

        public async Task<Pacientes> RegisterPacienteAsync(PacientesDTO paciente)
        {


            var pacientes = new Pacientes
            {
                Usuario = paciente.Usuario,
                Nombre = paciente.Nombre,
                Apellidos = paciente.Apellidos,
                Clave = paciente.Clave,
                NumSeguridadSocial = paciente.NumSeguridadSocial,
                NumTarjeta = paciente.NumTarjeta,
                Telefono = paciente.Telefono,
                Direccion = paciente.Direccion
            };




            return await _pacientesRepository.InsertPaciente(pacientes);
        }

        public async Task<Pacientes> GetPacienteByToken(string usuario)
        {

            // Busca al paciente en la base de datos con el usuario recibido
            var paciente = await _pacientesRepository.GetPacienteByUserName(usuario);

            // Si no se encuentra al paciente, retorna una respuesta 404 Not Found
            if (paciente == null)
            {
                return null;
            }

            // Retorna una respuesta 200 OK con los detalles del paciente
            return paciente;


        }

    }
}
