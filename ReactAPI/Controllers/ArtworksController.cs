using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactAPI.Modals;

namespace ReactAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArtworksController : ControllerBase
    {
        private readonly T2004E_React_ArtGalleryContext _context;

        public ArtworksController(T2004E_React_ArtGalleryContext context)
        {
            _context = context;
        }

        // GET: api/Artworks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Artwork>>> GetArtworks()
        {
            return await _context.Artworks
                .Include(a => a.Aunction)
                .Where(a => a.IsDeleted == 0)
                .ToListAsync();
        }

        [HttpGet("GetArtworksBidding")]
        public async Task<ActionResult<IEnumerable<Artwork>>> GetArtworksBidding()
        {
            return await _context.Artworks
                .Include(a => a.Aunction)
                .Where(a => a.IsDeleted == 0 && a.Status == 2)
                .ToListAsync();
        }

        [Route("GetArtworkSaleRequests")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Artwork>>> GetArtworkSaleRequests()
        {
            return await _context.Artworks
                .Include(a => a.Aunction)
                .Where(a => a.IsDeleted == 0 && a.Status > 0)
                .OrderBy(a => a.Status)
                .ToListAsync();
        }

        // GET: api/Artworks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Artwork>> GetArtwork(int id)
        {
            var artwork = await _context.Artworks
                .Include(a => a.Category)
                .Include(a => a.Aunction)
                .Where(a => a.IsDeleted == 0 && a.Id == id)
                .FirstOrDefaultAsync();

            if (artwork == null)
            {
                return NotFound();
            }

            return artwork;
        }

        // GET: api/Artworks/5
        [HttpGet("GetHighestBidLog/{artworkId}")]
        public async Task<ActionResult<AunctionLog>> GetHighestBidArtwork(int artworkId)
        {
            var aunctionLogHighestBid = await _context.AunctionLogs
                .Include(a => a.Aunction)
                .Include(a => a.Buyer)
                .Where(a => a.IsDeleted == 0 && a.Aunction.ArtworkId == artworkId)
                .OrderByDescending(a => a.MoneyBid)
                .FirstOrDefaultAsync();

            //AunctionLog log = new() { };
            //log.MoneyBid = aunctionLogHighestBid[0].MoneyBid;

            //foreach (var aunctionLog in aunctionLogHighestBid)
            //{

            //    if (aunctionLog.MoneyBid > log.MoneyBid)
            //    {
            //        log = aunctionLog;
            //    }
            //}

            if (aunctionLogHighestBid == null)
            {
                return NotFound();
            }

            return aunctionLogHighestBid;
        }

        [Authorize]
        [HttpGet("GetArtworkByPerson/{personId}")]
        public async Task<ActionResult<List<Artwork>>> GetArtworkByPerson(int personId)
        {
            var artworkByPerson = await _context.Artworks
                .Include(a => a.User)
                .Where(a => a.IsDeleted == 0 && a.User.Id == personId).ToListAsync();

            return artworkByPerson;
        }

        // PUT: api/Artworks/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize]
        [HttpPut("{id}")]
        public async Task<IActionResult> PutArtwork(int id, Artwork artwork)
        {
            if (artwork.IsDeleted == 1)
            {
                return NotFound();
            }

            if (id != artwork.Id)
            {
                return BadRequest();
            }

            _context.Entry(artwork).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ArtworkExists(id))
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

        [Authorize]
        [HttpPut("EditArtwork/{id}")]
        public async Task<IActionResult> EditArtwork(int id, Artwork artwork)
        {
            try
            {
                var artworkToEdit = await _context.Artworks.FirstOrDefaultAsync(a => a.Id == id && a.IsDeleted == 0);

                artworkToEdit.Description = artwork.Description;
                artworkToEdit.UnapproveReason = artwork.UnapproveReason;
                artworkToEdit.Status = artwork.Status;
                artworkToEdit.CurrentPrice = artwork.CurrentPrice;

                _context.Entry(artworkToEdit).State = EntityState.Modified;


                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ArtworkExists(id))
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

        // POST: api/Artworks
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [Authorize]
        [HttpPost]
        public async Task<ActionResult<Artwork>> PostArtwork(Artwork artwork)
        {
            if (User.FindFirst("Role")?.Value != "Artist")
            {
                return Unauthorized("You are not ARTIST!!");
            }

            string userId = User.FindFirst("Id")?.Value;

            artwork.UserId = Int32.Parse(userId);
            artwork.CreatedAt = DateTime.Now;

            _context.Artworks.Add(artwork);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetArtwork", new { id = artwork.Id }, artwork);
        }

        // DELETE: api/Artworks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteArtwork(int id)
        {
            var artwork = await _context.Artworks.FindAsync(id);
            if (artwork == null)
            {
                return NotFound();
            }

            _context.Artworks.Remove(artwork);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ArtworkExists(int id)
        {
            return _context.Artworks.Any(e => e.Id == id);
        }
    }
}
