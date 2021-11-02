using System;
using System.Collections.Generic;

#nullable disable

namespace ReactAPI.Modals
{
    public partial class AunctionLog
    {
        public int Id { get; set; }
        public double MoneyBid { get; set; }
        public DateTime CreatedAt { get; set; }
        public int? AunctionId { get; set; }
        public int? BuyerId { get; set; }

        public virtual Aunction Aunction { get; set; }
        public virtual User Buyer { get; set; }
    }
}
