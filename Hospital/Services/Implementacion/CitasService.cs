using Hospital.DTO;
using Hospital.Models;
using Hospital.Repository;
using Hospital.Repository.Interfaces;
using System.Security.Claims;

namespace Hospital.Services.Implementacion
{
    public class CitasService : ICitasService
    {
        private readonly ICitasRepository _citasRepository;
        private readonly IMedicosRepository _medicosRepository;
        private readonly IPacientesRepository _pacientesRepository;

        public CitasService(ICitasRepository citasRepository, IMedicosRepository mediicosRepository, IPacientesRepository pacientesRepository)
        {
            _citasRepository = citasRepository;
            _medicosRepository = mediicosRepository;
            _pacientesRepository = pacientesRepository;
        }

        public async Task<IEnumerable<Citas>> GetCitas()
        {
            var citas = await _citasRepository.GetCitas();
            return citas;
        }

        public async Task<CitasDTO> GetCitasById(int id)
        {
            var cita = await _citasRepository.GetCitasById(id);
            return new CitasDTO
            {
                Id = cita.Id,
                PacienteNombreCompleto = cita.Paciente.Nombre,
                MedicoNombreCompleto = cita.Medico.Nombre,
                Fecha = cita.Fecha
            };
        }

        public async Task<CitasDTO> InsertCitas(CitasDTO citas, ClaimsPrincipal user)
        {
            var pacienteNombreCompleto = user.FindFirstValue(ClaimTypes.Name);
            var paciente = await _pacientesRepository.GetPacienteByUserName(pacienteNombreCompleto);

            var fechaCita = citas.Fecha.Date;

            // Obtener todos los médicos disponibles para la fecha de la cita
            var medicosDisponibles = await _medicosRepository.GetMedicosDisponiblesParaFecha(fechaCita);


            // Buscar un médico que tenga menos de 10 citas agendadas para la fecha de la cita
            Medicos medicoSeleccionado = null;
            var random = new Random();
            var medicosDisponiblesAleatorios = medicosDisponibles.OrderBy(m => random.Next());

            foreach (var medico in medicosDisponiblesAleatorios)
            {


                medicoSeleccionado = medico;
                break;

            }

            if (medicoSeleccionado == null)
            {
                throw new Exception("No hay médicos disponibles para la fecha seleccionada.");
            }

            var cita = new Citas
            {
                Observaciones = citas.Observaciones,
                Paciente = paciente,
                Medico = medicoSeleccionado,
                Fecha = citas.Fecha
            };


            var result = await _citasRepository.InsertCitas(cita);
            return new CitasDTO
            {
                Id = result.Id,
                Observaciones = result.Observaciones,
                PacienteNombreCompleto = result.Paciente.Usuario,
                MedicoNombreCompleto = result.Medico.Usuario,
                Fecha = result.Fecha
            };
        }

        public async Task<CitasDTO> UpdateCitas(int id, CitasDTO citas)
        {
            var paciente = new Pacientes { Nombre = citas.PacienteNombreCompleto };
            var medico = new Medicos { Nombre = citas.MedicoNombreCompleto };
            var cita = new Citas
            {
                Id = id,
                Paciente = paciente,
                Medico = medico,
                Fecha = citas.Fecha
            };
            var result = await _citasRepository.UpdateCitas(id, cita);
            return new CitasDTO
            {
                Id = result.Id,
                PacienteNombreCompleto = result.Paciente.Nombre,
                MedicoNombreCompleto = result.Medico.Nombre,
                Fecha = result.Fecha
            };
        }

        public async Task<bool> DeleteCitas(int id)
        {
            return await _citasRepository.DeleteCitas(id);
        }

        public async Task<IEnumerable<CitasDTO>> GetCitasByPaciente(string pacientenombre)
        {
            var citas = await _citasRepository.GetCitasByPaciente(pacientenombre);
            return citas.Select(cita => new CitasDTO
            {
                Id = cita.Id,
                Observaciones = cita.Observaciones,
                PacienteNombreCompleto = cita.usuariopaciente,
                MedicoNombreCompleto = cita.usuariomedico,
                Fecha = cita.Fecha
            });
        }

        public async Task<IEnumerable<CitasDTO>> GetCitasByMedico(string mediconombre)
        {
            var citas = await _citasRepository.GetCitasByMedico(mediconombre);
            return citas.Select(cita => new CitasDTO
            {
                Id = cita.Id,
                Observaciones = cita.Observaciones,
                PacienteNombreCompleto = cita.usuariopaciente,
                MedicoNombreCompleto = cita.usuariomedico,
                Fecha = cita.Fecha
            });
        }

    }


}
