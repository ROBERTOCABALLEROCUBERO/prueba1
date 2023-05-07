using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Hospital.Data;
using Hospital.Models;
using Microsoft.AspNetCore.Authorization;
using Hospital.DTO;
using Hospital.Services.Intefaces;

namespace Hospital.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DiagnosticosController : ControllerBase
    {
        private readonly IDiagnosticosService _diagnosticosService;

        public DiagnosticosController(IDiagnosticosService diagnosticosService)
        {
            _diagnosticosService = diagnosticosService;
        }

        [Authorize]
        // GET: api/Diagnosticos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DiagnosticosDTO>>> GetDiagnosticos()
        {
            var diagnosticos = await _diagnosticosService.GetDiagnosticos();
            return Ok(diagnosticos);
        }

        [Authorize]
        // GET: api/Diagnosticos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DiagnosticosDTO>> GetDiagnosticoById(int id)
        {
            var diagnostico = await _diagnosticosService.GetDiagnosticoById(id);

            if (diagnostico == null)
            {
                return NotFound();
            }

            return Ok(diagnostico);
        }

        [Authorize]
        // POST: api/Diagnosticos
        [HttpPost]
        public async Task<ActionResult<DiagnosticosDTO>> InsertDiagnostico(DiagnosticosDTO diagnostico)
        {
            var newDiagnostico = await _diagnosticosService.InsertDiagnostico(diagnostico);
            return CreatedAtAction(nameof(GetDiagnosticoById), new { id = newDiagnostico.Id }, newDiagnostico);
        }

        [Authorize]
        // PUT: api/Diagnosticos/5
        [HttpPut("{id}")]
        public async Task<ActionResult<DiagnosticosDTO>> UpdateDiagnostico(int id, DiagnosticosDTO diagnostico)
        {
            if (id != diagnostico.Id)
            {
                return BadRequest();
            }

            var updatedDiagnostico = await _diagnosticosService.UpdateDiagnostico(id, diagnostico);
            if (updatedDiagnostico == null)
            {
                return NotFound();
            }

            return Ok(updatedDiagnostico);
        }

        [Authorize]
        // DELETE: api/Diagnosticos/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<bool>> DeleteDiagnostico(int id)
        {
            var deleted = await _diagnosticosService.DeleteDiagnostico(id);
            if (!deleted)
            {
                return NotFound();
            }

            return Ok(deleted);
        }

        [Authorize]
        // GET: api/Diagnosticos/cita/5
        [HttpGet("cita/{citaId}")]
        public async Task<ActionResult<DiagnosticosDTO>> GetDiagnosticoByCitaId(int citaId)
        {
            var diagnostico = await _diagnosticosService.GetDiagnosticoByCitaId(citaId);

            if (diagnostico == null)
            {
                return NotFound();
            }

            return Ok(diagnostico);
        }
    }

}
