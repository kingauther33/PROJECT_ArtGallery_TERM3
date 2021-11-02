using System;
using System.Collections.Generic;

#nullable disable

namespace ReactAPI.Modals
{
    public partial class ArtworkComment
    {
        public int Id { get; set; }
        public string Comment { get; set; }
        public DateTime CreatedAt { get; set; }
        public int? IsDeleted { get; set; }
        public int? ArtworkId { get; set; }
        public int? UserId { get; set; }

        public virtual Artwork Artwork { get; set; }
        public virtual User User { get; set; }
    }
}
