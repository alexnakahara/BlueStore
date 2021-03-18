using bluemodas.DomainInterface;
using bluemodas.Models;
using bluemodas.Services;
using Dapper;
using System;
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
            string code = GenerateCode();
            int idOrder = AddOrder(newClient.id, code);

            Order newOrder = new Order()
            {
                id = idOrder,
                code = code,
                client = newClient,
                products = order.products
            };

            using var db = new SqlConnection(_connection.GetConnectionString());
            foreach(ProductOrder item in order.products)
            {
                string query = @"INSERT INTO orderItems(id, code, id_product, quantity) VALUES(@id_order, @code, @id_product, @quantity)";
                newOrder.id = db.Execute(query, new { id_order = newClient.id, newOrder.code,  id_product = item.id, item.quantity });
            }

            return newOrder;
        }
        //public Order GetOrder(int id_order)
        //{
        //    string query = @"DECLARE @id_client INT
        //                    SELECT * FROM orders WHERE id = 1

        //                    SELECT 
        //                        p.*,
        //                        oi.quantity
        //                    FROM orders AS o
        //                    INNER JOIN orderItems AS oi ON o.id = oi.id AND o.code = oi.code 
        //                    INNER JOIN product AS p ON oi.id_product = p.id
        //                    WHERE o.id = @id_order

        //                    SELECT @id_client = id_client FROM orders WHERE id = @id_order

        //                    SELECT * FROM client WHERE id = @id_client";
        //    using var db = new SqlConnection(_connection.GetConnectionString());
        //    return null;
        //}
        private int AddOrder(int id_client, string code)
        {
            using var db = new SqlConnection(_connection.GetConnectionString());
            string query = @"DECLARE @id_order INT
                            INSERT INTO orders(id_client, code, date) VALUES(@id_client, @code, GETUTCDATE())  
                            SET @id_order = SCOPE_IDENTITY()
                            SELECT @id_order";

            return db.Query<int>(query, new { id_client, code }).SingleOrDefault();
        }

        public Client AddClient(Client client)
        {
            using var db = new SqlConnection(_connection.GetConnectionString());
            string query = @"DECLARE @id_client INT

                            INSERT INTO client(name, email, phone) VALUES(@name, @email, @phone )
                             
                            SET @id_client = SCOPE_IDENTITY()
                            
                            SELECT * FROM client WHERE id = @id_client ";

            return db.Query<Client>(query, new { client.name, client.email, client.phone }).SingleOrDefault();
        }

       
        private static string GenerateCode()
        {
            Random random = new Random();
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$";
            return new string(Enumerable.Repeat(chars, 8)
              .Select(s => s[random.Next(s.Length)]).ToArray());
        }
    }
}
