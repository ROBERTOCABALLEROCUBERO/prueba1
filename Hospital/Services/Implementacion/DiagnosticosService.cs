using AutoMapper;
using Hospital.DTO;
using Hospital.Models;
using Hospital.Repository;
using Hospital.Repository.Interfaces;
using Hospital.Services.Intefaces;

namespace Hospital.Services.Implementacion
{
    public class DiagnosticosService : IDiagnosticosService
    {
        private readonly IDiagnosticosRepository _diagnosticosRepository;
        private readonly IMapper _mapper;
        private readonly ICitasRepository _citasRepository;

        public DiagnosticosService(IDiagnosticosRepository diagnosticosRepository, IMapper mapper, ICitasRepository citasRepository)
        {
            _diagnosticosRepository = diagnosticosRepository;
            _mapper = mapper;
            _citasRepository = citasRepository;
        }
        public async Task<IEnumerable<DiagnosticosDTO>> GetDiagnosticos()
        {
            var diagnosticos = await _diagnosticosRepository.GetDiagnosticos();
            var diagnosticosDTO = new List<DiagnosticosDTO>();

            foreach (var diagnostico in diagnosticos)
            {

                var diagnosticoDTO = new DiagnosticosDTO
                {
                    Id = diagnostico.Id,
                    ValoracionEspecialista = diagnostico.ValoracionEspecialista,
                    Enfermedad = diagnostico.Enfermedad,
                    CitaId = diagnostico.CitaId,
                };

                diagnosticosDTO.Add(diagnosticoDTO);
            }

            return diagnosticosDTO;
        }

        public async Task<DiagnosticosDTO> GetDiagnosticoById(int id)
        {
            var diagnostico = await _diagnosticosRepository.GetDiagnosticoById(id);



            var diagnosticoDTO = new DiagnosticosDTO
            {
                Id = diagnostico.Id,
                ValoracionEspecialista = diagnostico.ValoracionEspecialista,
                Enfermedad = diagnostico.Enfermedad,
                CitaId = diagnostico.CitaId,

            };

            return diagnosticoDTO;
        }

        public async Task<DiagnosticosDTO> InsertDiagnostico(DiagnosticosDTO diagnostico)
        {
            var cita = await _citasRepository.GetCitasById(diagnostico.CitaId);
            if (cita == null)
            {
                throw new Exception("No se pudo encontrar la cita especificada.");
            }

            var nuevoDiagnostico = new Diagnosticos
            {
                ValoracionEspecialista = diagnostico.ValoracionEspecialista,
                Enfermedad = diagnostico.Enfermedad,
                Cita = cita
            };

            var resultado = await _diagnosticosRepository.InsertDiagnostico(nuevoDiagnostico);


            return new DiagnosticosDTO
            {
                Id = resultado.Id,
                ValoracionEspecialista = resultado.ValoracionEspecialista,
                Enfermedad = resultado.Enfermedad,
                CitaId = resultado.Cita.Id,

            };
        }

        public async Task<Diagnosticos> UpdateDiagnostico(int id, DiagnosticosDTO diagnostico)
        {
            var model = await _diagnosticosRepository.GetDiagnosticoById(id);
            if (model == null)
            {
                throw new Exception("No se pudo encontrar el diagnóstico especificado.");
            }

            model.ValoracionEspecialista = diagnostico.ValoracionEspecialista;
            model.Enfermedad = diagnostico.Enfermedad;

            var cita = await _citasRepository.GetCitasById(diagnostico.CitaId);
            if (cita == null)
            {
                throw new Exception("No se pudo encontrar la cita especificada.");
            }

            model.Cita = cita;

            var result = await _diagnosticosRepository.UpdateDiagnostico(id, model);

            return result;
        }

        public async Task<bool> DeleteDiagnostico(int id)
        {
            var result = await _diagnosticosRepository.DeleteDiagnostico(id);
            return result != null;
        }

        public async Task<Diagnosticos> GetDiagnosticoByCitaId(int citaId)
        {
            var diagnostico = await _diagnosticosRepository.GetDiagnosticoByCitaId(citaId);
            return diagnostico;
        }

    }

}
