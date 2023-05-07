using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Hospital.Migrations
{
    /// <inheritdoc />
    public partial class Cascada2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Citas_Medicos_usuariomedico",
                table: "Citas");

            migrationBuilder.DropForeignKey(
                name: "FK_Citas_Pacientes_usuariopaciente",
                table: "Citas");

            migrationBuilder.AddForeignKey(
                name: "FK_Citas_Medicos_usuariomedico",
                table: "Citas",
                column: "usuariomedico",
                principalTable: "Medicos",
                principalColumn: "Usuario",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Citas_Pacientes_usuariopaciente",
                table: "Citas",
                column: "usuariopaciente",
                principalTable: "Pacientes",
                principalColumn: "Usuario",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Citas_Medicos_usuariomedico",
                table: "Citas");

            migrationBuilder.DropForeignKey(
                name: "FK_Citas_Pacientes_usuariopaciente",
                table: "Citas");

            migrationBuilder.AddForeignKey(
                name: "FK_Citas_Medicos_usuariomedico",
                table: "Citas",
                column: "usuariomedico",
                principalTable: "Medicos",
                principalColumn: "Usuario",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Citas_Pacientes_usuariopaciente",
                table: "Citas",
                column: "usuariopaciente",
                principalTable: "Pacientes",
                principalColumn: "Usuario",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
