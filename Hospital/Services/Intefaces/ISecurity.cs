namespace Hospital.Services
{
    public interface ISecurity
    {

        public interface ISecurityService
        {
            string GenerarToken(string userName, string userType);
        }
    }

}

