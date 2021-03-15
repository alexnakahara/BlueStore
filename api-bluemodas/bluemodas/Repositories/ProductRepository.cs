using bluemodas.DomainInterface;
using bluemodas.Models;
using bluemodas.Services;
using Dapper;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace bluemodas.Repositories
{
    public class ProductRepository: IProductRepository
    {
        private readonly ConnectionService _connection;
        public ProductRepository(ConnectionService connectionService)
        {
            _connection = connectionService;
        }

        public List<Product> GetAllProducts()
        {
            string query = @"SELECT * FROM product";
            using var db = new SqlConnection(_connection.GetConnectionString());
            return db.Query<Product>(query).AsList();
        }

    }
}
