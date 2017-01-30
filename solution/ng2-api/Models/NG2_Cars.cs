namespace ng2_api.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class NG2_Cars
    {
        public int id { get; set; }

        [Required]
        [StringLength(50)]
        public string brand { get; set; }

        [Required]
        [StringLength(50)]
        public string model { get; set; }

        [StringLength(50)]
        public string fuelTypes { get; set; }

        [StringLength(50)]
        public string bodyStyle { get; set; }

        public int? topSpeed { get; set; }

        public int? power { get; set; }
    }
}
