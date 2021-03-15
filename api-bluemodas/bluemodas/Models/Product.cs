using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace bluemodas.Models
{
    public class Product
    {
        public int id { get; set; }
        public string name { get; set; }
        public double price { get; set; } 
        public string image { get; set; }
        public Product(int id, string name, double price, string image)
        {
            this.id = id;
            this.name = name;
            this.price = price;
            this.image = image;
        }
        public Product() { }
    }

   
}
