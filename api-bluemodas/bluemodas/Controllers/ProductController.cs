using Microsoft.AspNetCore.Mvc;
using System;
using bluemodas.DomainInterface;

namespace bluemodas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
       [HttpGet]
       [Route("list")]
       public IActionResult GetAllProducts([FromServices] IProductRepository repository)
        {
            try
            {
                var products = repository.GetAllProducts();
                return Ok(products);
            }
            catch(Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
