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
using Hospital.Services;
using System.Data.Entity;
using System.Security.Claims;
using Hospital.Services.Intefaces;
using Hospital.Services.Implementacion;

namespace Hospital.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicosController : ControllerBase
    {
        private readonly IMedicosService _medicosService;
        private readonly IClaveEncrypt _claveEncrypt;

        public MedicosController(IMedicosService medicosService, IClaveEncrypt claveEncrypt)
        {
            _medicosService = medicosService;
            _claveEncrypt = claveEncrypt;
        }

        [Authorize]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Medicos>>> GetMedicos()
        {
            var medicos = await _medicosService.GetMedicos();
            return Ok(medicos);
        }

        [Authorize]
        [HttpGet("{userName}")]
        public async Task<ActionResult<Medicos>> GetMedico(string userName)
        {
            var medico = await _medicosService.GetMedicoByUserName(userName);
            if (medico == null)
            {
                return NotFound();
            }
            return Ok(medico);
        }


        [Authorize]
        [HttpPut("")]
        public async Task<ActionResult> PutMedico(MedicosDTO medico)
        {
            try
            {
                // Validar los datos de entrada utilizando el validador
                var validator = new MedicosValidator();
                var resultval = validator.Validate(medico);

                // Si existen errores de validación, retornar una respuesta 400 Bad Request con los errores
                if (!resultval.IsValid)
                {
                    return BadRequest(resultval.Errors);
                }
                string usuario = User.FindFirst(ClaimTypes.Name).Value;

                medico.Clave = _claveEncrypt.Encriptar(medico.Clave);
                var result = await _medicosService.UpdateMedico(usuario, medico);
                if (!result)
                {
                    return NotFound();
                }

                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Authorize]
        [HttpDelete("{userName}")]
        public async Task<ActionResult> DeleteMedico(string userName)
        {
            try
            {
                var result = await _medicosService.DeleteMedico(userName);
                if (!result)
                {
                    return NotFound();
                }

                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [AllowAnonymous]
        [HttpPost("registro")]
        public async Task<IActionResult> Registro([FromBody] MedicosDTO medicosDTO)
        {
            try
            {



                // Validar los datos de entrada utilizando el validador
                var validator = new MedicosValidator();
                var result = validator.Validate(medicosDTO);

                // Si existen errores de validación, retornar una respuesta 400 Bad Request con los errores
                if (!result.IsValid)
                {
                    return BadRequest(result.Errors);
                }

                // Crear un nuevo objeto de tipo Medico a partir del DTO recibido
              
                medicosDTO.Clave = _claveEncrypt.Encriptar(medicosDTO.Clave);
                await _medicosService.InsertMedico(medicosDTO);

                // Retorna una respuesta 201 Created con los detalles del nuevo medico
                return CreatedAtAction("GetMedicos", new { usuario = medicosDTO.Usuario }, medicosDTO);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }



        }
        [Authorize]
        [HttpGet("medico")]
        public async Task<ActionResult> GetMedico()
        {
            string usuario = User.FindFirst(ClaimTypes.Name).Value;

            var medico = await _medicosService.GetMedicoByToken(usuario);
            if (medico == null)
            {
                return NotFound();
            }
            return Ok(medico);
        }
    }
}
            
        
