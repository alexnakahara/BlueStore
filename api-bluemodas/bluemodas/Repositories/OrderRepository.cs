using bluemodas.DomainInterface;
using bluemodas.Models;
using bluemodas.Services;
using Dapper;
using System.Data.SqlClient;
using System.Linq;

namespace bluemodas.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly ConnectionService _connection;
        public OrderRepository(ConnectionService connectionService)
        {
            _connection = connectionService;
        }
        public Order AddOrder(Order order)
        {

            Client newClient = AddClient(order.client);

            Order newOrder = new Order()
            {
                client = newClient
            };

            string query = @"DECLARE INT @id_order
                            INSERT INTO order(id_client, id_product) VALUES(@id_client, @id_product)  
                            SET @id_order = SCOPE_IDENTITY()
                            SELECT * FROM order WHERE id = @id_order";

            using var db = new SqlConnection(_connection.GetConnectionString());

            foreach(Product item in order.products)
            {
                var product = db.Query<Product>(query, new { id_client = newClient.id, id_product = item.id }).SingleOrDefault();
                newOrder.products.Add(product);
            }

            return newOrder;
        }
        public Client AddClient(Client client)
        {
            string query = @"DECLARE INT @id_client

                            INSERT INTO client(name, email, phone) VALUES(@name, @email, @phone )
                             
                            SET @id_client = SCOPE_IDENTITY()
                            
                            SELECT * FROM client WHERE id = @id_client ";

            using var db = new SqlConnection(_connection.GetConnectionString());
            return db.Query<Client>(query, new { client }).SingleOrDefault();
        }

    }
}
