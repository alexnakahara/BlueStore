using bluemodas.Models;

namespace bluemodas.DomainInterface
{
    public interface IOrderRepository
    {
        Order AddOrder();
        int AddClient();
        int AddProduct();
    }
}
