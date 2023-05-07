using FluentValidation;
using Hospital.DTO;

namespace Hospital.Services.Implementacion
{
    public class MedicosValidator : AbstractValidator<MedicosDTO>
    {

        public MedicosValidator()
        {
            RuleFor(m => m.Usuario)
                .NotEmpty().WithMessage("El campo Usuario es obligatorio")
                .MaximumLength(50).WithMessage("El campo Usuario no puede tener más de 50 caracteres");

            RuleFor(m => m.Nombre)
                .NotEmpty().WithMessage("El campo Nombre es obligatorio")
                .MaximumLength(50).WithMessage("El campo Nombre no puede tener más de 50 caracteres");

            RuleFor(m => m.Apellidos)
                .NotEmpty().WithMessage("El campo Apellidos es obligatorio")
                .MaximumLength(50).WithMessage("El campo Apellidos no puede tener más de 50 caracteres");

            RuleFor(m => m.Clave)
                .NotEmpty().WithMessage("El campo Clave es obligatorio")
                .MinimumLength(6).WithMessage("El campo Clave debe tener al menos 6 caracteres");

            RuleFor(m => m.NumColegiado)
                .NotEmpty().WithMessage("El campo Número de Colegiado es obligatorio")
                .Length(10).WithMessage("El campo Número de Colegiado debe tener 10 caracteres");
        }
    }
}
