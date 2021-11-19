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
    public class ItemsController : ControllerBase
    {
        private readonly SportsContext _context;
        private readonly ILoggerService _logger;

        public ItemsController(SportsContext context, ILoggerService logger)
        {
            _context = context;
            _logger = logger;
        }

        // GET: api/Items
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Item>>> GetItem()
        {
            _logger.LogInfo("Item list accessed");
            return await _context.Item.ToListAsync();
        }

        // GET: api/Items/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Item>> GetItem(long id)
        {
            var item = await _context.Item.FindAsync(id);

            if (item == null)
            {
                return NotFound();
            }
            _logger.LogInfo("Item list accessed by id");
            return item;
        }

        // PUT: api/Items/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutItem(long id, Item item)
        {
            if (id != item.ItemNumber)
            {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Items
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Item>> PostItem(Item item)
        {
            _context.Item.Add(item);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetItem", new { id = item.ItemNumber }, item);
        }

        // DELETE: api/Items/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Item>> DeleteItem(long id)
        {
            var item = await _context.Item.FindAsync(id);
            if (item == null)
            {
                return NotFound();
            }

            _context.Item.Remove(item);
            await _context.SaveChangesAsync();
            _logger.LogWarn("Item  Deleted");
            return item;
        }

        private bool ItemExists(long id)
        {
            return _context.Item.Any(e => e.ItemNumber == id);
        }
        [HttpGet("{itemlist}/{id}")]
        public List<Item> GetCustomerById(int id)
        {
            try
            {


                using (SqlConnection con = new SqlConnection("Data Source=MADAN\\SQLEXPRESS;Initial Catalog=Sports; Integrated Security=True"))
                {
                    using (SqlCommand cmd = new SqlCommand("select c.Item_Number,c.Item_Name,c.Item_Value,c.Color,c.Size from Item c inner join Orders o on c.Item_Number='" + id + "'", con))
                    {
                        List<Item> items = new List<Item>();
                        cmd.CommandType = CommandType.Text;
                        con.Open();
                        using (SqlDataReader dr = cmd.ExecuteReader())
                        {
                            while (dr.Read())
                            {
                                items.Add(new Item
                                {
                                    ItemNumber = Convert.ToInt32(dr["Item_Number"]),
                                    ItemName = dr["Item_Name"].ToString(),
                                    ItemValue = Convert.ToInt32(dr["Item_Value"]),
                                    Color = dr["Color"].ToString(),
                                    Size = Convert.ToInt32(dr["Size"])


                                });
                            }
                            con.Close();
                            return items;
                        }

                    }
                }

            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
