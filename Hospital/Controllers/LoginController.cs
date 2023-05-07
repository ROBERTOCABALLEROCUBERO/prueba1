using Hospital.Data;
using Hospital.DTO;
using Hospital.Models;
using Hospital.Services;
using Hospital.Services.Implementacion;
using Hospital.Services.Intefaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Hospital.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IPacientesService _pacientesService;
        private readonly IMedicosService _medicosService;
        private readonly IConfiguration _config;

        public LoginController(IMedicosService medicosService, IConfiguration config, IPacientesService pacientesService)
        {
            _medicosService = medicosService;
            _config = config;
            _pacientesService = pacientesService;
        }


        [AllowAnonymous]
        [HttpPost("")]
        public async Task<IActionResult> Login([FromForm] LoginDTO loginDTO)
        {
            try
            {
                Usuarios usuario;
                string userRole;
                var administradores = _config.GetSection("Administradores").Get<string[]>();
                var esAdmin = administradores.Contains(loginDTO.Usuario);

                // Busca al usuario en ambas tablas con el usuario recibido
                var paciente = await _pacientesService.GetPacienteByUserNameAndPassword(loginDTO.Usuario, loginDTO.Clave);
                var medico = await _medicosService.GetMedicoByUserNameAndPassword(loginDTO.Usuario, loginDTO.Clave);

                // Si no existe el usuario, retorna una respuesta 401 Unauthorized
                if (paciente == null && medico == null)
                {
                    return Unauthorized();
                }

                // Verifica si el usuario es un paciente o un medico
                if (paciente != null)
                {
                    userRole = "paciente";
                    usuario = paciente;
                }
                else
                {
                    userRole = "medico";
                    usuario = medico;
                }

                if (esAdmin)
                {
                    userRole = "administrador";
                }

                // Crea un token JWT con la información del paciente o del medico
                var security = new Security(_config);
                var token = security.GenerarToken(loginDTO.Usuario, userRole);

                // Retorna una respuesta 200 OK con el token JWT
                return Ok(new { token });
            }
            catch (Exception ex)
            {
                // Si ocurre algún error, retorna una respuesta 500 Internal Server Error con un mensaje de error
                return StatusCode(500, $"Error al hacer el login: {ex.Message}");
            }
        }

        /*

        [Authorize]
        [HttpGet("paciente")]
        public async Task<IActionResult> ObtenerPaciente()
        {
            try
            {
                // Obtiene el usuario autenticado a partir del Claim de identidad
                string usuario = User.FindFirst(ClaimTypes.Name).Value;

                // Busca al paciente en la base de datos con el usuario recibido
                var paciente = await _context.Pacientes.FirstOrDefaultAsync(p => p.Usuario == usuario);

                // Si no se encuentra al paciente, retorna una respuesta 404 Not Found
                if (paciente == null)
                {
                    return NotFound();
                }

                // Retorna una respuesta 200 OK con los detalles del paciente
                return Ok(paciente);
            }
            catch (Exception ex)
            {
                // Si ocurre algún error, retorna una respuesta 500 Internal Server Error con un mensaje de error
                return StatusCode(500, $"Error al obtener el paciente: {ex.Message}");
            }
        }

        [Authorize]
        [HttpGet("medico")]
        public async Task<IActionResult> ObtenerMedico()
        {
            try
            {
                // Obtiene el usuario autenticado a partir del Claim de identidad
                string usuario = User.FindFirst(ClaimTypes.Name).Value;

                // Busca al medico en la base de datos con el usuario recibido
                var medico = await _context.Medicos.FirstOrDefaultAsync(p => p.Usuario == usuario);

                // Si no se encuentra al paciente, retorna una respuesta 404 Not Found
                if (medico == null)
                {
                    return NotFound();
                }

                // Retorna una respuesta 200 OK con los detalles del paciente
                return Ok(medico);
            }
            catch (Exception ex)
            {
                // Si ocurre algún error, retorna una respuesta 500 Internal Server Error con un mensaje de error
                return StatusCode(500, $"Error al obtener el paciente: {ex.Message}");
            }
        }
        */
    }

}
