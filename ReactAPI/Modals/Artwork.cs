using System;
using System.Collections.Generic;

#nullable disable

namespace ReactAPI.Modals
{
    public partial class Artwork
    {
        public Artwork()
        {
            ArtworkComments = new HashSet<ArtworkComment>();
            Aunctions = new HashSet<Aunction>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Images { get; set; }
        public long? Year { get; set; }
        public string Author { get; set; }
        public string Status { get; set; }
        public string Location { get; set; }
        public DateTime CreatedAt { get; set; }
        public int? CategoryId { get; set; }
        public int? UserId { get; set; }

        public virtual Category Category { get; set; }
        public virtual User User { get; set; }
        public virtual ICollection<ArtworkComment> ArtworkComments { get; set; }
        public virtual ICollection<Aunction> Aunctions { get; set; }
    }
}
