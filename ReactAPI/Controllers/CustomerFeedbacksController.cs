using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactAPI.Modals;

namespace ReactAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerFeedbacksController : ControllerBase
    {
        private readonly T2004E_React_ArtGalleryContext _context;

        public CustomerFeedbacksController(T2004E_React_ArtGalleryContext context)
        {
            _context = context;
        }

        // GET: api/CustomerFeedbacks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CustomerFeedback>>> GetCustomerFeedbacks()
        {
            return await _context.CustomerFeedbacks.ToListAsync();
        }

        // GET: api/CustomerFeedbacks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CustomerFeedback>> GetCustomerFeedback(int id)
        {
            var customerFeedback = await _context.CustomerFeedbacks.FindAsync(id);

            if (customerFeedback == null)
            {
                return NotFound();
            }

            return customerFeedback;
        }

        // PUT: api/CustomerFeedbacks/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCustomerFeedback(int id, CustomerFeedback customerFeedback)
        {
            if (id != customerFeedback.Id)
            {
                return BadRequest();
            }

            _context.Entry(customerFeedback).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerFeedbackExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CustomerFeedbacks
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CustomerFeedback>> PostCustomerFeedback(CustomerFeedback customerFeedback)
        {
            _context.CustomerFeedbacks.Add(customerFeedback);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCustomerFeedback", new { id = customerFeedback.Id }, customerFeedback);
        }

        // DELETE: api/CustomerFeedbacks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustomerFeedback(int id)
        {
            var customerFeedback = await _context.CustomerFeedbacks.FindAsync(id);
            if (customerFeedback == null)
            {
                return NotFound();
            }

            _context.CustomerFeedbacks.Remove(customerFeedback);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CustomerFeedbackExists(int id)
        {
            return _context.CustomerFeedbacks.Any(e => e.Id == id);
        }
    }
}
