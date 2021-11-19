using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace sportstore.Models
{
    public partial class SportsContext : DbContext
    {
        public SportsContext()
        {
        }

        public SportsContext(DbContextOptions<SportsContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Customer> Customer { get; set; }
        public virtual DbSet<Item> Item { get; set; }
        public virtual DbSet<Orders> Orders { get; set; }
        public virtual DbSet<Registration> Registration { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Name=SportsDbContext");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>(entity =>
            {
                entity.HasKey(e => e.CustomerNumber);

                entity.Property(e => e.CustomerNumber).HasColumnName("Customer_Number");

                entity.Property(e => e.Address)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Contact)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CustomerName)
                    .HasColumnName("Customer_Name")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.EmailId)
                    .IsRequired()
                    .HasColumnName("Email_Id")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Item>(entity =>
            {
                entity.HasKey(e => e.ItemNumber);

                entity.Property(e => e.ItemNumber).HasColumnName("Item_Number");

                entity.Property(e => e.Color)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ItemName)
                    .HasColumnName("Item_Name")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.ItemValue)
                    .HasColumnName("Item_Value")
                    .HasColumnType("money");
            });

            modelBuilder.Entity<Orders>(entity =>
            {
                entity.HasKey(e => e.OrderNumber)
                    .HasName("PK_Order");

                entity.Property(e => e.OrderNumber).HasColumnName("order_Number");

                entity.Property(e => e.CustomerNumber).HasColumnName("customer_Number");

                entity.Property(e => e.DeliveryDate)
                    .HasColumnName("deliveryDate")
                    .HasColumnType("datetime");

                entity.Property(e => e.ItemNumber).HasColumnName("item_Number");

                entity.Property(e => e.OrderDate)
                    .HasColumnName("order_date")
                    .HasColumnType("datetime");

                entity.Property(e => e.PaymentMode)
                    .HasColumnName("payment_mode")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.CustomerNumberNavigation)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.CustomerNumber)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Orders__customer__47DBAE45");

                entity.HasOne(d => d.ItemNumberNavigation)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.ItemNumber)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Orders__item_Num__48CFD27E");
            });

            modelBuilder.Entity<Registration>(entity =>
            {
                entity.HasKey(e => e.Regid)
                    .HasName("PK__Registra__184A6B047694F365");

                entity.Property(e => e.Regid).HasColumnName("regid");

                entity.Property(e => e.ConfirmPassword)
                    .IsRequired()
                    .HasColumnName("confirmPassword")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("email")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
