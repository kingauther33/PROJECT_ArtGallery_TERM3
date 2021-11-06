using System;
using System.Collections.Generic;

#nullable disable

namespace ReactAPI.Modals
{
    public partial class DepositLog
    {
        public int Id { get; set; }
        public double? Amount { get; set; }
        public DateTime CreatedAt { get; set; }
        public int? IsDeleted { get; set; }
        public int? UserId { get; set; }

        public virtual User User { get; set; }
    }
}
