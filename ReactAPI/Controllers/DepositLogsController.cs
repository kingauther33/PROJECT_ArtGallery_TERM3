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
    public class DepositLogsController : ControllerBase
    {
        private readonly T2004E_React_ArtGalleryContext _context;

        public DepositLogsController(T2004E_React_ArtGalleryContext context)
        {
            _context = context;
        }

        // GET: api/DepositLogs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DepositLog>>> GetDepositLogs()
        {
            return await _context.DepositLogs.ToListAsync();
        }

        // GET: api/DepositLogs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DepositLog>> GetDepositLog(int id)
        {
            var depositLog = await _context.DepositLogs.FindAsync(id);

            if (depositLog == null)
            {
                return NotFound();
            }

            return depositLog;
        }

        // PUT: api/DepositLogs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDepositLog(int id, DepositLog depositLog)
        {
            if (id != depositLog.Id)
            {
                return BadRequest();
            }

            _context.Entry(depositLog).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DepositLogExists(id))
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

        // POST: api/DepositLogs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DepositLog>> PostDepositLog(DepositLog depositLog)
        {
            _context.DepositLogs.Add(depositLog);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDepositLog", new { id = depositLog.Id }, depositLog);
        }

        // DELETE: api/DepositLogs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDepositLog(int id)
        {
            var depositLog = await _context.DepositLogs.FindAsync(id);
            if (depositLog == null)
            {
                return NotFound();
            }

            _context.DepositLogs.Remove(depositLog);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DepositLogExists(int id)
        {
            return _context.DepositLogs.Any(e => e.Id == id);
        }
    }
}
