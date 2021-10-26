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
    public class ArtworkCommentsController : ControllerBase
    {
        private readonly T2004E_React_ArtGalleryContext _context;

        public ArtworkCommentsController(T2004E_React_ArtGalleryContext context)
        {
            _context = context;
        }

        // GET: api/ArtworkComments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ArtworkComment>>> GetArtworkComments()
        {
            return await _context.ArtworkComments.ToListAsync();
        }

        // GET: api/ArtworkComments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ArtworkComment>> GetArtworkComment(int id)
        {
            var artworkComment = await _context.ArtworkComments.FindAsync(id);

            if (artworkComment == null)
            {
                return NotFound();
            }

            return artworkComment;
        }

        // PUT: api/ArtworkComments/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutArtworkComment(int id, ArtworkComment artworkComment)
        {
            if (id != artworkComment.Id)
            {
                return BadRequest();
            }

            _context.Entry(artworkComment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ArtworkCommentExists(id))
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

        // POST: api/ArtworkComments
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ArtworkComment>> PostArtworkComment(ArtworkComment artworkComment)
        {
            _context.ArtworkComments.Add(artworkComment);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetArtworkComment", new { id = artworkComment.Id }, artworkComment);
        }

        // DELETE: api/ArtworkComments/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteArtworkComment(int id)
        {
            var artworkComment = await _context.ArtworkComments.FindAsync(id);
            if (artworkComment == null)
            {
                return NotFound();
            }

            _context.ArtworkComments.Remove(artworkComment);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ArtworkCommentExists(int id)
        {
            return _context.ArtworkComments.Any(e => e.Id == id);
        }
    }
}
