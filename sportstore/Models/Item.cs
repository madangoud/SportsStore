using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace sportstore.Models
{
    public partial class Item
    {
        public Item()
        {
            Orders = new HashSet<Orders>();
        }

        public long ItemNumber { get; set; }
        public string ItemName { get; set; }
        public decimal? ItemValue { get; set; }
        public string Color { get; set; }
        public int? Size { get; set; }

        public virtual ICollection<Orders> Orders { get; set; }
    }
}
