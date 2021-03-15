using bluemodas.Models;
using System.Collections.Generic;

namespace bluemodas.DomainInterface
{
    public interface IProductRepository
    {
        List<Product> GetAllProducts();
    }
}
