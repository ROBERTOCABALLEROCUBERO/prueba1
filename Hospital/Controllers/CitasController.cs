using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Hospital.Data;
using Hospital.Models;
using Hospital.Repository;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Hospital.DTO;
using Hospital.Services.Intefaces;
using Hospital.Services;

namespace Hospital.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CitasController : ControllerBase
    {
        private readonly ICitasService _citasService;

        public CitasController(ICitasService citasService)
        {
            _citasService = citasService;
        }

        [Authorize]
        [HttpGet]
        public async Task<IEnumerable<Citas>> GetCitas()
        {
            return await _citasService.GetCitas();
        }

        [Authorize]
        [HttpGet("{id}")]
        public async Task<CitasDTO> GetCitasById(int id)
        {
            return await _citasService.GetCitasById(id);
        }

        [Authorize]
        [HttpPost]
        public async Task<CitasDTO> InsertCitas([FromBody] CitasDTO citas)
        {
            var user = HttpContext.User;
            return await _citasService.InsertCitas(citas, user);
        }

        [Authorize]
        [HttpPut("{id}")]
        public async Task<CitasDTO> UpdateCitas(int id, [FromBody] CitasDTO citas)
        {
            return await _citasService.UpdateCitas(id, citas);
        }

        [Authorize]
        [HttpDelete("{id}")]
        public async Task<bool> DeleteCitas(int id)
        {
            return await _citasService.DeleteCitas(id);
        }

        [Authorize]
        [HttpGet("paciente/{pacientenombre}")]
        public async Task<IEnumerable<CitasDTO>> GetCitasByPaciente(string pacientenombre)
        {
            return await _citasService.GetCitasByPaciente(pacientenombre);
        }

        [Authorize]
        [HttpGet("medico/{mediconombre}")]
        public async Task<IEnumerable<CitasDTO>> GetCitasByMedico(string mediconombre)
        {
            return await _citasService.GetCitasByMedico(mediconombre);
        }
    }

}

