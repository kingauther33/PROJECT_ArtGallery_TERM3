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
    public class UserLogsController : ControllerBase
    {
        private readonly T2004E_React_ArtGalleryContext _context;

        public UserLogsController(T2004E_React_ArtGalleryContext context)
        {
            _context = context;
        }

        // GET: api/UserLogs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserLog>>> GetUserLogs()
        {
            return await _context.UserLogs.ToListAsync();
        }

        // GET: api/UserLogs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserLog>> GetUserLog(int id)
        {
            var userLog = await _context.UserLogs.FindAsync(id);

            if (userLog == null)
            {
                return NotFound();
            }

            return userLog;
        }

        // PUT: api/UserLogs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserLog(int id, UserLog userLog)
        {
            if (id != userLog.Id)
            {
                return BadRequest();
            }

            _context.Entry(userLog).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserLogExists(id))
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

        // POST: api/UserLogs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<UserLog>> PostUserLog(UserLog userLog)
        {
            _context.UserLogs.Add(userLog);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserLog", new { id = userLog.Id }, userLog);
        }

        // DELETE: api/UserLogs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserLog(int id)
        {
            var userLog = await _context.UserLogs.FindAsync(id);
            if (userLog == null)
            {
                return NotFound();
            }

            _context.UserLogs.Remove(userLog);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserLogExists(int id)
        {
            return _context.UserLogs.Any(e => e.Id == id);
        }
    }
}
