using System;
using System.Collections.Generic;

#nullable disable

namespace ReactAPI.Modals
{
    public partial class Category
    {
        public Category()
        {
            Artworks = new HashSet<Artwork>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Images { get; set; }
        public int? IsDeleted { get; set; }

        public virtual ICollection<Artwork> Artworks { get; set; }
    }
}
