using FluentValidation;
using Hospital.DTO;
using System.ComponentModel.DataAnnotations;

namespace Hospital.Services.Implementacion
{
    public class PacientesValidator : AbstractValidator<PacientesDTO>
    {
        public PacientesValidator()
        {
            RuleFor(p => p.Usuario)
                .NotEmpty().WithMessage("El campo Usuario es obligatorio")
                .MaximumLength(50).WithMessage("El campo Usuario no puede tener más de 50 caracteres");

            RuleFor(p => p.Nombre)
                .NotEmpty().WithMessage("El campo Nombre es obligatorio")
                .MaximumLength(50).WithMessage("El campo Nombre no puede tener más de 50 caracteres");

            RuleFor(p => p.Apellidos)
                .NotEmpty().WithMessage("El campo Apellidos es obligatorio")
                .MaximumLength(50).WithMessage("El campo Apellidos no puede tener más de 50 caracteres");

            RuleFor(p => p.Clave)
                .NotEmpty().WithMessage("El campo Clave es obligatorio")
                .MinimumLength(6).WithMessage("El campo Clave debe tener al menos 6 caracteres");

            RuleFor(p => p.NumSeguridadSocial)
                .NotEmpty().WithMessage("El campo Número de Seguridad Social es obligatorio")
                .Length(11).WithMessage("El campo Número de Seguridad Social debe tener 11 caracteres");

            RuleFor(p => p.NumTarjeta)
                .NotEmpty().WithMessage("El campo Número de Tarjeta es obligatorio")
                .Length(16).WithMessage("El campo Número de Tarjeta debe tener 16 caracteres");

            RuleFor(p => p.Telefono)
                .NotEmpty().WithMessage("El campo Teléfono es obligatorio")
                .Length(9).WithMessage("El campo Teléfono debe tener 9 caracteres");

            RuleFor(p => p.Direccion)
                .NotEmpty().WithMessage("El campo Dirección es obligatorio")
                .MaximumLength(100).WithMessage("El campo Dirección no puede tener más de 100 caracteres");
        }
    }
}
