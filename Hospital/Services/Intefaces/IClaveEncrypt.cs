namespace Hospital.Services
{
    public interface IClaveEncrypt
    {

      
            string Encriptar(string clave);
            bool Desencriptar(string claveEncriptada, string clave);
        }
    
}
