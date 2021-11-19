using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace sportstore.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Orders = new HashSet<Orders>();
        }

        public long CustomerNumber { get; set; }
        public string CustomerName { get; set; }
        public string Contact { get; set; }
        public string Address { get; set; }
        public string EmailId { get; set; }

        public virtual ICollection<Orders> Orders { get; set; }
    }
}
