using System;
using System.Collections.Generic;

#nullable disable

namespace ReactAPI.Modals
{
    public partial class Aunction
    {
        public Aunction()
        {
            AunctionLogs = new HashSet<AunctionLog>();
        }

        public int Id { get; set; }
        public double HighestMoneyBid { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? FinishedAt { get; set; }
        public int ArtworkId { get; set; }
        public int AdminId { get; set; }
        public int BuyerId { get; set; }

        public virtual User Admin { get; set; }
        public virtual Artwork Artwork { get; set; }
        public virtual User Buyer { get; set; }
        public virtual ICollection<AunctionLog> AunctionLogs { get; set; }
    }
}
