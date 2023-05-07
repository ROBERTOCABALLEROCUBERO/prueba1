using Hospital.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Hospital.Mapping
{
    public class UsuarioMap : IEntityTypeConfiguration<Usuarios>
    {
        public void Configure(EntityTypeBuilder<Usuarios> builder)
        {
            // Tabla y clave primaria
            builder.ToTable("Usuarios");
            builder.HasKey(u => u.Usuario);
        }
    }

    public class PacienteMap : IEntityTypeConfiguration<Pacientes>
    {
        public void Configure(EntityTypeBuilder<Pacientes> builder)
        {
            // Tabla y clave primaria
            builder.ToTable("Pacientes");
            builder.HasKey(p => p.Usuario);

            // Relación con la tabla Cita
            builder.HasMany(p => p.Citas)
                .WithOne(c => c.Paciente)
                .HasForeignKey(c => c.usuariopaciente)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }

    public class MedicoMap : IEntityTypeConfiguration<Medicos>
    {
        public void Configure(EntityTypeBuilder<Medicos> builder)
        {
            // Tabla y clave primaria
            builder.ToTable("Medicos");
            builder.HasKey(m => m.Usuario);

            // Relación con la tabla Cita
            builder.HasMany(m => m.Citas)
                .WithOne(c => c.Medico)
                .HasForeignKey(c => c.usuariomedico)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }

    public class CitaMap : IEntityTypeConfiguration<Citas>
    {
        public void Configure(EntityTypeBuilder<Citas> builder)
        {
            // Tabla y clave primaria
            builder.ToTable("Citas");
            builder.HasKey(c => c.Id);

            // Relación con la tabla Paciente
    builder.HasOne(c => c.Paciente)
        .WithMany(p => p.Citas)
        .HasForeignKey(c => c.usuariopaciente)
        .OnDelete(DeleteBehavior.Cascade);

            // Relación con la tabla Medico
            builder.HasOne(c => c.Medico)
                .WithMany(m => m.Citas)
                .HasForeignKey(c => c.usuariomedico)
                .OnDelete(DeleteBehavior.Cascade);

            

        }
    }
    public class DiagnosticoMap : IEntityTypeConfiguration<Diagnosticos>
    {
        public void Configure(EntityTypeBuilder<Diagnosticos> builder)
        {
            // Tabla y clave primaria
            builder.ToTable("Diagnosticos");
            builder.HasKey(d => d.Id);

            // Relación con la tabla Cita
            builder.HasOne(d => d.Cita)
                .WithOne(c => c.Diagnostico)
                .HasForeignKey<Diagnosticos>(d => d.CitaId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}