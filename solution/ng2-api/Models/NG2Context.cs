namespace ng2_api.Models
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class NG2Context : DbContext
    {
        public NG2Context()
            : base("name=NG2Context")
        {
        }

        public virtual DbSet<NG2_Cars> NG2_Cars { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<NG2_Cars>()
                .Property(e => e.brand)
                .IsUnicode(false);

            modelBuilder.Entity<NG2_Cars>()
                .Property(e => e.model)
                .IsUnicode(false);

            modelBuilder.Entity<NG2_Cars>()
                .Property(e => e.fuelType)
                .IsUnicode(false);

            modelBuilder.Entity<NG2_Cars>()
                .Property(e => e.bodyStyle)
                .IsUnicode(false);
        }
    }
}
