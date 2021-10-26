using System;
using System.Collections.Generic;

#nullable disable

namespace ReactAPI.Modals
{
    public partial class User
    {
        public User()
        {
            ArtworkComments = new HashSet<ArtworkComment>();
            Artworks = new HashSet<Artwork>();
            AunctionAdmins = new HashSet<Aunction>();
            AunctionBuyers = new HashSet<Aunction>();
            AunctionLogs = new HashSet<AunctionLog>();
            DepositLogs = new HashSet<DepositLog>();
            UserLogs = new HashSet<UserLog>();
        }

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public string Role { get; set; }
        public double? Deposit { get; set; }
        public DateTime CreatedAt { get; set; }

        public virtual ICollection<ArtworkComment> ArtworkComments { get; set; }
        public virtual ICollection<Artwork> Artworks { get; set; }
        public virtual ICollection<Aunction> AunctionAdmins { get; set; }
        public virtual ICollection<Aunction> AunctionBuyers { get; set; }
        public virtual ICollection<AunctionLog> AunctionLogs { get; set; }
        public virtual ICollection<DepositLog> DepositLogs { get; set; }
        public virtual ICollection<UserLog> UserLogs { get; set; }
    }
}
