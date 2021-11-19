using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using sportstore.Contracts;
using sportstore.Models;

namespace sportstore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
       
        private readonly ILoggerService _logger;
        private readonly SportsContext _context;
        public CustomersController(SportsContext context, ILoggerService  logger)
        {
           
            _context = context;
            _logger = logger;

        }
       

        // GET: api/Customers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Customer>>> GetCustomer()
        {
            _logger.LogInfo("Customer List accessed");
            return await _context.Customer.ToListAsync();
        }

        // GET: api/Customers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Customer>> GetCustomer(long id)
        {
            var customer = await _context.Customer.FindAsync(id);

            if (customer == null)
            {
                return NotFound();
            }
            _logger.LogInfo("Customer List accessed by Id");
            return customer;
        }

        // PUT: api/Customers/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCustomer(long id, Customer customer)
        {
            if (id != customer.CustomerNumber)
            {
                return BadRequest();
            }

            _context.Entry(customer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            _logger.LogWarn("Customer List Added");
            return NoContent();
        }

        // POST: api/Customers
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Customer>> PostCustomer(Customer customer)
        {


            _context.Customer.Add(customer);
            await _context.SaveChangesAsync();

            _logger.LogInfo("Customer List Updated");
            return CreatedAtAction("GetCustomer", new { id = customer.CustomerNumber }, customer);
        }

        // DELETE: api/Customers/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Customer>> DeleteCustomer(long id)
        {
            var customer = await _context.Customer.FindAsync(id);
            if (customer == null)
            {
                return NotFound();
            }

            _context.Customer.Remove(customer);
            await _context.SaveChangesAsync();
            _logger.LogWarn("Customer List Deleted");
            return customer;
        }

        private bool CustomerExists(long id)
        {
            return _context.Customer.Any(e => e.CustomerNumber == id);
        }
        [HttpGet("{orderlist}/{id}")]
        public List<Customer> GetCustomerById(int id)
       {
            try {


                using (SqlConnection con = new SqlConnection("Data Source=MADAN\\SQLEXPRESS;Initial Catalog=Sports; Integrated Security=True"))
                {
                    using (SqlCommand cmd = new SqlCommand("select c.customer_Number,c.customer_Name,c.contact,c.address,c.email_Id from Customer c inner join Orders o on c.customer_Number='" + id + "'", con))
                    {
                        List<Customer> customer = new List<Customer>();
                        cmd.CommandType = CommandType.Text;
                        con.Open();
                        using (SqlDataReader dr = cmd.ExecuteReader())
                        {
                            while (dr.Read())
                            {
                                customer.Add(new Customer
                                {
                                    CustomerNumber = Convert.ToInt32(dr["Customer_Number"]),

                                    CustomerName = dr["Customer_Name"].ToString(),
                                    Contact = dr["Contact"].ToString(),
                                    Address = dr["Address"].ToString(),
                                    EmailId = dr["Email_Id"].ToString(),


                                });
                            }
                            con.Close();
                            return customer;
                        }

                    }
                }

            }
            catch(Exception ex)
            {
                return null;
            }
               

            //    using (SportsContext db = new SportsContext())
            //    {
            //        List<Customer> cust = db.Customer.ToList();
            //        List<Orders> ord = db.Orders.ToList();
            //        var record = from c in cust
            //                     join o in ord on
            //                     id equals o.CustomerNumber
            //                     select new
            //                     {
            //                         customerid = c.CustomerNumber,
            //                         CustomerName = c.CustomerName,
            //                         contact = c.Contact,
            //                         address = c.Address,
            //                         email = c.EmailId
            //                     };



            //        return (List<Customer>)record;


        }
    }
    }


