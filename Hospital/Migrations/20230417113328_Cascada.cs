using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Hospital.Migrations
{
    /// <inheritdoc />
    public partial class Cascada : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Diagnosticos_Citas_CitaId",
                table: "Diagnosticos");

            migrationBuilder.AddForeignKey(
                name: "FK_Diagnosticos_Citas_CitaId",
                table: "Diagnosticos",
                column: "CitaId",
                principalTable: "Citas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Diagnosticos_Citas_CitaId",
                table: "Diagnosticos");

            migrationBuilder.AddForeignKey(
                name: "FK_Diagnosticos_Citas_CitaId",
                table: "Diagnosticos",
                column: "CitaId",
                principalTable: "Citas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
