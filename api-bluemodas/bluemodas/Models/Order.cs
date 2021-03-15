using System.Collections.Generic;

namespace bluemodas.Models
{
    public class Order
    {
        public int id { get; set; }
        public List<Product> products { get; set; }
        public Client client { get; set; }
    }
}
