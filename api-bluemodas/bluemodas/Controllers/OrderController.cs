using bluemodas.DomainInterface;
using bluemodas.Models;
using Microsoft.AspNetCore.Mvc;
using System;

namespace bluemodas.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrderController : ControllerBase
    {
        [HttpPost]
        [Route("add")]
        public IActionResult EmitOrder([FromServices] IOrderRepository repository, [FromBody] Order order)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest("Required Fields");
                }
                Order response = repository.AddOrder(order);
                return Ok(response);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}
