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
    public class AunctionLogsController : ControllerBase
    {
        private readonly T2004E_React_ArtGalleryContext _context;

        public AunctionLogsController(T2004E_React_ArtGalleryContext context)
        {
            _context = context;
        }

        // GET: api/AunctionLogs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AunctionLog>>> GetAunctionLogs()
        {
            return await _context.AunctionLogs.ToListAsync();
        }

        // GET: api/AunctionLogs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AunctionLog>> GetAunctionLog(int id)
        {
            var aunctionLog = await _context.AunctionLogs.FindAsync(id);

            if (aunctionLog == null)
            {
                return NotFound();
            }

            return aunctionLog;
        }

        // PUT: api/AunctionLogs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAunctionLog(int id, AunctionLog aunctionLog)
        {
            if (id != aunctionLog.Id)
            {
                return BadRequest();
            }

            _context.Entry(aunctionLog).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AunctionLogExists(id))
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

        // POST: api/AunctionLogs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<AunctionLog>> PostAunctionLog(AunctionLog aunctionLog)
        {
            _context.AunctionLogs.Add(aunctionLog);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAunctionLog", new { id = aunctionLog.Id }, aunctionLog);
        }

        // DELETE: api/AunctionLogs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAunctionLog(int id)
        {
            var aunctionLog = await _context.AunctionLogs.FindAsync(id);
            if (aunctionLog == null)
            {
                return NotFound();
            }

            _context.AunctionLogs.Remove(aunctionLog);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AunctionLogExists(int id)
        {
            return _context.AunctionLogs.Any(e => e.Id == id);
        }
    }
}
