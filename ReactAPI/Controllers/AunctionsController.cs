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
    public class AunctionsController : ControllerBase
    {
        private readonly T2004E_React_ArtGalleryContext _context;

        public AunctionsController(T2004E_React_ArtGalleryContext context)
        {
            _context = context;
        }

        // GET: api/Aunctions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Aunction>>> GetAunctions()
        {
            return await _context.Aunctions.ToListAsync();
        }

        // GET: api/Aunctions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Aunction>> GetAunction(int id)
        {
            var aunction = await _context.Aunctions.FindAsync(id);

            if (aunction == null)
            {
                return NotFound();
            }

            return aunction;
        }

        // PUT: api/Aunctions/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAunction(int id, Aunction aunction)
        {
            if (id != aunction.Id)
            {
                return BadRequest();
            }

            _context.Entry(aunction).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AunctionExists(id))
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

        // POST: api/Aunctions
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Aunction>> PostAunction(Aunction aunction)
        {
            _context.Aunctions.Add(aunction);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAunction", new { id = aunction.Id }, aunction);
        }

        // DELETE: api/Aunctions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAunction(int id)
        {
            var aunction = await _context.Aunctions.FindAsync(id);
            if (aunction == null)
            {
                return NotFound();
            }

            _context.Aunctions.Remove(aunction);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AunctionExists(int id)
        {
            return _context.Aunctions.Any(e => e.Id == id);
        }
    }
}
