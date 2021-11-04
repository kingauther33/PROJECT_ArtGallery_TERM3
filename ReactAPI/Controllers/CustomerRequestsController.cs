using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using ReactAPI.Modals;

namespace ReactAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerRequestsController : ControllerBase
    {
        private readonly T2004E_React_ArtGalleryContext _context;

        public CustomerRequestsController(T2004E_React_ArtGalleryContext context)
        {
            _context = context;
        }

        // GET: api/CustomerRequests
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CustomerRequest>>> GetCustomerRequests()
        {
            return await _context.CustomerRequests
                .Include(c => c.Customer)
                .Where(u => u.IsDeleted == 0)
                .OrderBy(u => u.Status)
                .ToListAsync();
        }

        // GET: api/CustomerRequests/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CustomerRequest>> GetCustomerRequest(int id)
        {
            var customerRequest = await _context.CustomerRequests
                .Where(u => u.IsDeleted == 0 && u.Id == id)
                .FirstOrDefaultAsync();

            if (customerRequest == null)
            {
                return NotFound();
            }

            return customerRequest;
        }

        // PUT: api/CustomerRequests/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCustomerRequest(int id, CustomerRequest customerRequest)
        {
            if (id != customerRequest.Id)
            {
                return BadRequest();
            }

            _context.Entry(customerRequest).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerRequestExists(id))
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

        //UPDATE STATUS,
        [HttpPost("{id}")]
        public async Task<IActionResult> UpdateStatus(int id, int status, string response)
        {
            var customerToUpdate = await _context.CustomerRequests.FirstOrDefaultAsync(c => c.Id == id && c.IsDeleted == 0);

            var userToUpdate = await _context.Users.FirstOrDefaultAsync(u => u.Id == id && u.IsDeleted == 0);
            customerToUpdate.Status = status;
            customerToUpdate.Response = response;
            userToUpdate.Role = "Artist";

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerRequestExists(id))
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

        // POST: api/CustomerRequests
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CustomerRequest>> PostCustomerRequest(CustomerRequest customerRequest)
        {
            _context.CustomerRequests.Add(customerRequest);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCustomerRequest", new { id = customerRequest.Id }, customerRequest);
        }

        // DELETE: api/CustomerRequests/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustomerRequest(int id)
        {
            var customerRequest = await _context.CustomerRequests.FindAsync(id);
            if (customerRequest == null)
            {
                return NotFound();
            }

            _context.CustomerRequests.Remove(customerRequest);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CustomerRequestExists(int id)
        {
            return _context.CustomerRequests.Any(e => e.Id == id);
        }
    }
}
