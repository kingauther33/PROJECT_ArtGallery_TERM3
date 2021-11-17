using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace ReactAPI.Modals
{
    public partial class T2004E_React_ArtGalleryContext : DbContext
    {
        //public T2004E_React_ArtGalleryContext()
        //{
        //}

        public T2004E_React_ArtGalleryContext(DbContextOptions<T2004E_React_ArtGalleryContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Artwork> Artworks { get; set; }
        public virtual DbSet<ArtworkComment> ArtworkComments { get; set; }
        public virtual DbSet<Aunction> Aunctions { get; set; }
        public virtual DbSet<AunctionLog> AunctionLogs { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<CustomerFeedback> CustomerFeedbacks { get; set; }
        public virtual DbSet<CustomerRequest> CustomerRequests { get; set; }
        public virtual DbSet<DepositLog> DepositLogs { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<UserLog> UserLogs { get; set; }

//        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        {
//            if (!optionsBuilder.IsConfigured)
//            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
//                optionsBuilder.UseSqlServer("Data Source=DESKTOP-IS0140H\\SQLEXPRESS;Initial Catalog=T2004E_React_ArtGallery;Integrated Security=True");
//            }
//        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Artwork>(entity =>
            {
                entity.ToTable("artwork");

                entity.HasIndex(e => e.CategoryId, "fkIdx_41");

                entity.HasIndex(e => e.UserId, "fkIdx_44");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Author)
                    .IsRequired()
                    .HasColumnName("author");

                entity.Property(e => e.CategoryId).HasColumnName("category_id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("created_at");

                entity.Property(e => e.CurrentPrice).HasColumnName("current_price");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.Images).HasColumnName("images");

                entity.Property(e => e.IsDeleted)
                    .HasColumnName("is_deleted")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Location).HasColumnName("location");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");

                entity.Property(e => e.Status)
                    .HasColumnName("status")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.UnapproveReason).HasColumnName("unapprove_reason");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.Property(e => e.Year).HasColumnName("year");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Artworks)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK_39");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Artworks)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_42");
            });

            modelBuilder.Entity<ArtworkComment>(entity =>
            {
                entity.ToTable("artwork_comment");

                entity.HasIndex(e => e.ArtworkId, "fkIdx_198");

                entity.HasIndex(e => e.UserId, "fkIdx_201");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ArtworkId).HasColumnName("artwork_id");

                entity.Property(e => e.Comment)
                    .IsRequired()
                    .HasColumnName("comment");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("created_at");

                entity.Property(e => e.IsDeleted)
                    .HasColumnName("is_deleted")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.Artwork)
                    .WithMany(p => p.ArtworkComments)
                    .HasForeignKey(d => d.ArtworkId)
                    .HasConstraintName("FK_196");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.ArtworkComments)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_199");
            });

            modelBuilder.Entity<Aunction>(entity =>
            {
                entity.ToTable("aunction");

                entity.HasIndex(e => e.ArtworkId, "fkIdx_102");

                entity.HasIndex(e => e.BuyerId, "fkIdx_161");

                entity.HasIndex(e => e.AdminId, "fkIdx_167");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.AdminId).HasColumnName("admin_id");

                entity.Property(e => e.ArtworkId).HasColumnName("artwork_id");

                entity.Property(e => e.BuyerId).HasColumnName("buyer_id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("created_at");

                entity.Property(e => e.FinishedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("finished_at");

                entity.Property(e => e.FixedPrice)
                    .HasColumnName("fixed_price")
                    .HasDefaultValueSql("((9999999))");

                entity.Property(e => e.HighestMoneyBid).HasColumnName("highest_money_bid");

                entity.Property(e => e.IsDeleted)
                    .HasColumnName("is_deleted")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.StartingPrice).HasColumnName("starting_price");

                entity.HasOne(d => d.Admin)
                    .WithMany(p => p.AunctionAdmins)
                    .HasForeignKey(d => d.AdminId)
                    .HasConstraintName("FK_165");

                entity.HasOne(d => d.Artwork)
                    .WithMany(p => p.Aunctions)
                    .HasForeignKey(d => d.ArtworkId)
                    .HasConstraintName("FK_98");

                entity.HasOne(d => d.Buyer)
                    .WithMany(p => p.AunctionBuyers)
                    .HasForeignKey(d => d.BuyerId)
                    .HasConstraintName("FK_159");
            });

            modelBuilder.Entity<AunctionLog>(entity =>
            {
                entity.ToTable("aunction_log");

                entity.HasIndex(e => e.AunctionId, "fkIdx_175");

                entity.HasIndex(e => e.BuyerId, "fkIdx_178");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.AunctionId).HasColumnName("aunction_id");

                entity.Property(e => e.BuyerId).HasColumnName("buyer_id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("created_at");

                entity.Property(e => e.IsDeleted)
                    .HasColumnName("is_deleted")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.MoneyBid).HasColumnName("money_bid");

                entity.HasOne(d => d.Aunction)
                    .WithMany(p => p.AunctionLogs)
                    .HasForeignKey(d => d.AunctionId)
                    .HasConstraintName("FK_173");

                entity.HasOne(d => d.Buyer)
                    .WithMany(p => p.AunctionLogs)
                    .HasForeignKey(d => d.BuyerId)
                    .HasConstraintName("FK_176");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.ToTable("category");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Images).HasColumnName("images");

                entity.Property(e => e.IsDeleted)
                    .HasColumnName("is_deleted")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name");
            });

            modelBuilder.Entity<CustomerFeedback>(entity =>
            {
                entity.ToTable("customer_feedback");

                entity.HasIndex(e => e.CustomerId, "FKIdx_1000");

                entity.HasIndex(e => e.AdminId, "FKIdx_1010");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.AdminId).HasColumnName("admin_id");

                entity.Property(e => e.Answer).HasColumnName("answer");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("created_at");

                entity.Property(e => e.CustomerId).HasColumnName("customer_id");

                entity.Property(e => e.Description).HasColumnName("description");

                entity.Property(e => e.IsDeleted)
                    .HasColumnName("is_deleted")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Status)
                    .HasColumnName("status")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasColumnName("title");

                entity.HasOne(d => d.Admin)
                    .WithMany(p => p.CustomerFeedbackAdmins)
                    .HasForeignKey(d => d.AdminId)
                    .HasConstraintName("FK_1010");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.CustomerFeedbackCustomers)
                    .HasForeignKey(d => d.CustomerId)
                    .HasConstraintName("FK_1000");
            });

            modelBuilder.Entity<CustomerRequest>(entity =>
            {
                entity.ToTable("customer_request");

                entity.HasIndex(e => e.CustomerId, "FKIdx_1100");

                entity.HasIndex(e => e.AdminId, "FKIdx_1110");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.AdminId).HasColumnName("admin_id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("created_at");

                entity.Property(e => e.CustomerId).HasColumnName("customer_id");

                entity.Property(e => e.IsDeleted)
                    .HasColumnName("is_deleted")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Response).HasColumnName("response");

                entity.Property(e => e.Status)
                    .HasColumnName("status")
                    .HasDefaultValueSql("((0))");

                entity.HasOne(d => d.Admin)
                    .WithMany(p => p.CustomerRequestAdmins)
                    .HasForeignKey(d => d.AdminId)
                    .HasConstraintName("FK_1110");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.CustomerRequestCustomers)
                    .HasForeignKey(d => d.CustomerId)
                    .HasConstraintName("FK_1100");
            });

            modelBuilder.Entity<DepositLog>(entity =>
            {
                entity.ToTable("deposit_log");

                entity.HasIndex(e => e.UserId, "fkIdx_192");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Amount).HasColumnName("amount");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("created_at");

                entity.Property(e => e.IsDeleted)
                    .HasColumnName("is_deleted")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.DepositLogs)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_190");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("user");

                entity.HasIndex(e => e.Email, "UQ__user__AB6E61644320B532")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Avatar)
                    .HasColumnName("avatar")
                    .HasDefaultValueSql("('https://firebasestorage.googleapis.com/v0/b/fir-artgallery-storage.appspot.com/o/files%2FdefaultAva.png?alt=media&token=80389b41-4d3f-45ec-b259-2cc6276ca53b')");

                entity.Property(e => e.ConfirmPassword)
                    .IsRequired()
                    .HasColumnName("confirm_password");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("created_at");

                entity.Property(e => e.Deposit).HasColumnName("deposit");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("email");

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasColumnName("first_name");

                entity.Property(e => e.IsDeleted)
                    .HasColumnName("is_deleted")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasColumnName("last_name");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password");

                entity.Property(e => e.Role)
                    .IsRequired()
                    .HasColumnName("role");
            });

            modelBuilder.Entity<UserLog>(entity =>
            {
                entity.ToTable("user_log");

                entity.HasIndex(e => e.UserId, "fkIdx_27");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Ip).HasColumnName("ip");

                entity.Property(e => e.IsDeleted)
                    .HasColumnName("is_deleted")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.LastOnline)
                    .HasColumnType("datetime")
                    .HasColumnName("last_online");

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserLogs)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_25");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
