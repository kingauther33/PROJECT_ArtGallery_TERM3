﻿using System;
using System.Collections.Generic;

#nullable disable

namespace ReactAPI.Modals
{
    public partial class Artwork
    {
        public Artwork()
        {
            ArtworkComments = new HashSet<ArtworkComment>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double? CurrentPrice { get; set; }
        public string Images { get; set; }
        public long? Year { get; set; }
        public string Author { get; set; }
        public int? Status { get; set; }
        public string UnapproveReason { get; set; }
        public string Location { get; set; }
        public DateTime CreatedAt { get; set; }
        public int? IsDeleted { get; set; }
        public int? CategoryId { get; set; }
        public int? UserId { get; set; }

        public virtual Category Category { get; set; }
        public virtual User User { get; set; }
        public virtual Aunction Aunction { get; set; }
        public virtual ICollection<ArtworkComment> ArtworkComments { get; set; }
    }
}
