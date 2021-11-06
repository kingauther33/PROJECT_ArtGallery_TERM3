using System;
using System.Collections.Generic;

#nullable disable

namespace ReactAPI.Modals
{
    public partial class UserLog
    {
        public int Id { get; set; }
        public string Ip { get; set; }
        public DateTime? LastOnline { get; set; }
        public int? IsDeleted { get; set; }
        public int? UserId { get; set; }

        public virtual User User { get; set; }
    }
}
