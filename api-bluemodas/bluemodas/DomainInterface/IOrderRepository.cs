using bluemodas.Models;

namespace bluemodas.DomainInterface
{
    public interface IOrderRepository
    {
        Order AddOrder(Order order);
        Client AddClient(Client client);
    }
}
