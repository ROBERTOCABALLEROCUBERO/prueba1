using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Hospital.Data;
using Hospital.Models;
using Hospital.DTO;
using Hospital.Services;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using System.ComponentModel.DataAnnotations;
using Hospital.Services.Intefaces;
using Hospital.Services.Implementacion;

namespace Hospital.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PacientesController : ControllerBase
    {
        private readonly IPacientesService _pacientesService;
        private readonly IClaveEncrypt _claveEncrypt;

        public PacientesController(IPacientesService pacientesService, IClaveEncrypt claveEncrypt)
        {
            _pacientesService = pacientesService;
            _claveEncrypt = claveEncrypt;
        }

        [Authorize]
        // GET: api/Pacientes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PacientesDTO>>> GetPacientes()
        {
            var pacientesDTOs = await _pacientesService.GetPacientes();
            if (pacientesDTOs == null)
            {
                return NotFound();
            }
            return Ok(pacientesDTOs);
        }

        [Authorize]
        // GET: api/Pacientes/5
        [HttpGet("{username}")]
        public async Task<ActionResult<PacientesDTO>> GetPacientes(string username)
        {
            var pacientesDTO = await _pacientesService.GetPacienteByUserName(username);
            if (pacientesDTO == null)
            {
                return NotFound();
            }
            return Ok(pacientesDTO);
        }



        
        [Authorize]
        // GET: api/Pacientes/5
        [HttpGet("paciente")]
        public async Task<ActionResult<PacientesDTO>> GetPaciente()
        {
            string usuario = User.FindFirst(ClaimTypes.Name).Value;


            var paciente = await _pacientesService.GetPacienteByToken(usuario);
            if (paciente == null)
            {
                return NotFound();
            }
            return Ok(paciente);
        }

        [Authorize]
        // PUT: api/Pacientes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("")]
        public async Task<IActionResult> PutPacientes(PacientesDTO pacientesDTO)
        {
            var validator = new PacientesValidator();
            var validacion = validator.Validate(pacientesDTO);
            if (!validacion.IsValid)
            {
                return BadRequest(validacion.Errors);
            }
            string usuario = User.FindFirst(ClaimTypes.Name).Value;

            var result = await _pacientesService.UpdatePaciente(usuario, pacientesDTO);
            if (result == null)
            {
                return NotFound();
            }
            return NoContent();
        }


        /*
        [Authorize]
        // POST: api/Pacientes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PacientesDTO>> PostPacientes(PacientesDTO pacientesDTO)
        {
            var result = await _pacientesService.CreatePacien(pacientesDTO);
            if (result == null)
            {
                return BadRequest();
            }
            return CreatedAtAction("GetPacientes", new { id = result.Usuario }, result);
        }
        */

        [Authorize]
        // DELETE: api/Pacientes/5
        [HttpDelete("{username}")]
        public async Task<IActionResult> DeletePacientes(string username)
        {
            var result = await _pacientesService.DeletePaciente(username);
            if (result == null)
            {
                return NotFound();
            }
            return NoContent();
        }

        [AllowAnonymous]
        [HttpPost("registro")]
        public async Task<IActionResult> Registro([FromBody] PacientesDTO pacientesDTO)
        {
            var validator = new PacientesValidator();
            var validacion = validator.Validate(pacientesDTO);

            if (!validacion.IsValid)
            {
                return BadRequest(validacion.Errors);
            }

            pacientesDTO.Clave = _claveEncrypt.Encriptar(pacientesDTO.Clave);
            var result = await _pacientesService.RegisterPacienteAsync(pacientesDTO);
            if (result == null)
            {
                return BadRequest();
            }
            return Ok(result);
        }
    }
}

