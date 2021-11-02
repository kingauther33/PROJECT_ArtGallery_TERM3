using System;
using System.Collections.Generic;

#nullable disable

namespace ReactAPI.Modals
{
    public partial class CustomerFeedback
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Answer { get; set; }
        public int? Status { get; set; }
        public int? IsDeleted { get; set; }
        public DateTime CreatedAt { get; set; }
        public int? CustomerId { get; set; }
        public int? AdminId { get; set; }

        public virtual User Admin { get; set; }
        public virtual User Customer { get; set; }
    }
}
