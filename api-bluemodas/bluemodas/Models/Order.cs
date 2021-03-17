using System.Collections.Generic;

namespace bluemodas.Models
{
    public class Order
    {
        public int id { get; set; }
        public string code { get; set; }
        public Client client { get; set; }
        public List<ProductOrder> products { get; set; }
    }
    public class OrderRequest 
    {
        public List<SimpleProductOrder> products { get; set; }
        public Client client { get; set; }
    }
    public class ProductOrder: Product
    {
        public int quantity { get; set; }
    }

    public class SimpleProductOrder
    {
        public int id { get; set; }
        public int quantity { get; set; }

    }

}
