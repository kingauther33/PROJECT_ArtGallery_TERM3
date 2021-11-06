using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactAPI.Modals;

namespace ReactAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly T2004E_React_ArtGalleryContext _context;

        public UsersController(T2004E_React_ArtGalleryContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users
                .Where(u => u.IsDeleted == 0 && u.Role != "Admin")
                .ToListAsync();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.Users
                .Where(u => u.IsDeleted == 0 && u.Id == id && u.Role != "Admin")
                .FirstOrDefaultAsync();

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (user.IsDeleted == 1)
            {
                return NotFound();
            }

            if (id != user.Id)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
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

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.Id }, user);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.Users
                .Include(u => u.ArtworkComments)
                .Include(u => u.Artworks)
                .Include(u => u.AunctionAdmins)
                .Include(u => u.AunctionBuyers)
                .Include(u => u.AunctionLogs)
                .Include(u => u.DepositLogs)
                .Include(u => u.UserLogs)
                .Include(u => u.CustomerFeedbackAdmins)
                .Include(u => u.CustomerFeedbackCustomers)
                .Include(u => u.CustomerRequestAdmins)
                .Include(u => u.CustomerRequestCustomers)
                .Where(u => u.IsDeleted == 0 && u.Id == id)
                .FirstOrDefaultAsync();

            if (user == null)
            {
                return NotFound();
            }

            user.IsDeleted = 1;
            foreach (var userComment in user.ArtworkComments)
            {
                userComment.IsDeleted = 1;
            }

            foreach (var userArtwork in user.Artworks)
            {
                userArtwork.IsDeleted = 1;
            }

            foreach (var userAunctionAdmin in user.AunctionAdmins)
            {
                userAunctionAdmin.IsDeleted = 1;
            }

            foreach (var userAunctionBuyer in user.AunctionBuyers)
            {
                userAunctionBuyer.IsDeleted = 1;
            }

            foreach (var userAunctionLog in user.AunctionLogs)
            {
                userAunctionLog.IsDeleted = 1;
            }

            foreach (var userDepositLog in user.DepositLogs)
            {
                userDepositLog.IsDeleted = 1;
            }

            foreach (var userUserLog in user.UserLogs)
            {
                userUserLog.IsDeleted = 1;
            }

            foreach (var userCustomerFeedbackAdmin in user.CustomerFeedbackAdmins)
            {
                userCustomerFeedbackAdmin.IsDeleted = 1;
            }

            foreach (var userCustomerFeedbackCustomer in user.CustomerFeedbackCustomers)
            {
                userCustomerFeedbackCustomer.IsDeleted = 1;
            }

            foreach (var userCustomerRequestAdmin in user.CustomerRequestAdmins)
            {
                userCustomerRequestAdmin.IsDeleted = 1;
            }

            foreach (var userCustomerRequestCustomer in user.CustomerRequestCustomers)
            {
                userCustomerRequestCustomer.IsDeleted = 1;
            }
            //_context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.Id == id);
        }
    }
}
