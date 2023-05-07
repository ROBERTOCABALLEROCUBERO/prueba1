using Hospital.DTO;
using Hospital.Models;
using Hospital.Repository;
using Hospital.Repository.Interfaces;
using Hospital.Services.Intefaces;

namespace Hospital.Services.Implementacion
{
    public class MedicosService : IMedicosService
    {
        private readonly IMedicosRepository _medicosRepository;

        public MedicosService(IMedicosRepository medicosRepository)
        {
            _medicosRepository = medicosRepository;
        }

        public async Task<Medicos> GetMedicoByUserNameAndPassword(string userName, string password)
        {
            return await _medicosRepository.GetMedicoByUserNameAndPassword(userName, password);
        }

        public async Task<IEnumerable<Medicos>> GetMedicos()
        {
            return await _medicosRepository.GetMedicos();
        }

        public async Task<Medicos> GetMedicoByUserName(string userName)
        {
            return await _medicosRepository.GetMedicoByUserName(userName);
        }
        public async Task<Medicos> GetMedicoByToken(string usuario)
        {
            var medico = await _medicosRepository.GetMedicoByUserName(usuario);

            if (medico == null)
            {
                return null;
            }

            return medico;
        }
        public async Task<Medicos> InsertMedico(MedicosDTO medicosDTO)
        {
            var medico = new Medicos
            {
                Usuario = medicosDTO.Usuario,
                Clave = medicosDTO.Clave,
                Nombre = medicosDTO.Nombre,
                Apellidos = medicosDTO.Apellidos,
                NumColegiado = medicosDTO.NumColegiado
            };

            return await _medicosRepository.InsertMedico(medico);
        }

        public async Task<bool> UpdateMedico(string user, MedicosDTO medicosDTO)
        {
            var medico = new Medicos
            {
                Usuario = medicosDTO.Usuario,
                Clave = medicosDTO.Clave,
                Nombre = medicosDTO.Nombre,
                Apellidos = medicosDTO.Apellidos,
                NumColegiado = medicosDTO.NumColegiado
            };
            return await _medicosRepository.UpdateMedico(user,medico);
        }

        public async Task<bool> DeleteMedico(string userName)
        {
            return await _medicosRepository.DeleteMedico(userName);
        }
    }
}
