using Hospital.Services.Intefaces;
using Microsoft.AspNetCore.Identity;

namespace Hospital.Services.Implementacion
{
    public class ClaveEncrypt : IClaveEncrypt
    {
        public string Encriptar(string clave)
        {
            var passwordHasher = new PasswordHasher<string>();
            return passwordHasher.HashPassword(null, clave);
        }

        public bool Desencriptar(string claveEncriptada, string clave)
        {
            var passwordHasher = new PasswordHasher<string>();
            var result = passwordHasher.VerifyHashedPassword(null, claveEncriptada, clave);
            return result == PasswordVerificationResult.Success;
        }
    }
}
