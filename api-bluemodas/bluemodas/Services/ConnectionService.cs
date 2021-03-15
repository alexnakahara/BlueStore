using Microsoft.Extensions.Configuration;

namespace bluemodas.Services
{
    public class ConnectionService
    {
        private readonly IConfiguration _configuration;
        public ConnectionService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string GetConnectionString()
        {
            return _configuration.GetConnectionString("BlueModasDB");
        }
        
    }
}
