using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace sportstore.Models
{
    public partial class Orders
    {
        public long OrderNumber { get; set; }
        public DateTime? OrderDate { get; set; }
        public DateTime? DeliveryDate { get; set; }
        public long ItemNumber { get; set; }
        public long CustomerNumber { get; set; }
        public string PaymentMode { get; set; }

        public virtual Customer CustomerNumberNavigation { get; set; }
        public virtual Item ItemNumberNavigation { get; set; }
    }
}
