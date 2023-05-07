using Hospital.Data;
using Hospital.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.Extensions.Configuration;
using System.Text;
using Microsoft.OpenApi.Models;
using Hospital.Repository;
using Microsoft.AspNetCore.Hosting;
using Hospital.Services.Intefaces;
using Hospital.Services.Implementacion;
using Hospital.Repository.Interfaces;
using Hospital.Repository.Implementacion;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<HospitalContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("HospitalContext")));

string CorsConfiguration = "_corsConfiguration";


builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle


builder.Services.AddScoped<IClaveEncrypt, ClaveEncrypt>();
builder.Services.AddScoped<ICitasService, CitasService>();
builder.Services.AddScoped<IDiagnosticosService, DiagnosticosService>();
builder.Services.AddScoped<IPacientesService, PacientesService>();
builder.Services.AddScoped<IMedicosService, MedicosService>();

builder.Services.AddAutoMapper(typeof(Program));

builder.Services.AddScoped<ICitasRepository, CitasRepository>();
builder.Services.AddScoped<IDiagnosticosRepository, DiagnosticosRepository>();
builder.Services.AddScoped<IPacientesRepository, PacientesRepository>();
builder.Services.AddScoped<IMedicosRepository, MedicosRepository>();

builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("RequirePacienteRole", policy => policy.RequireRole("Paciente"));
    options.AddPolicy("RequireMedicoRole", policy => policy.RequireRole("Medico"));
    options.AddPolicy("RequireAdministradorRole", policy => policy.RequireRole("Administrador"));
});
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });

    var securityScheme = new OpenApiSecurityScheme
    {
        Name = "Authorization",
        Description = "JWT Authorization header using the Bearer scheme.",
        Type = SecuritySchemeType.Http,
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Reference = new OpenApiReference
        {
            Type = ReferenceType.SecurityScheme,
            Id = "Bearer"
        }
    };

    c.AddSecurityDefinition("Bearer", securityScheme);
    var administradores = builder.Configuration.GetSection("Administradores").Get<string[]>();

    var securityRequirement = new OpenApiSecurityRequirement
    {
        { securityScheme, new[] { "Bearer" } }
    };

    c.AddSecurityRequirement(securityRequirement);
});
var key = Encoding.ASCII.GetBytes(builder.Configuration["Jwt:key"]);

builder.Services.AddScoped<CitasRepository>();

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = false,
            ValidateAudience = false,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(key)
        };
    });

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: CorsConfiguration,
                      builder =>
                      {
                          builder.WithOrigins("http://localhost:4200")
                          .AllowAnyHeader()
                          .AllowAnyMethod(); 
                      });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseCors(CorsConfiguration);

app.UseAuthentication();

app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.Run();
