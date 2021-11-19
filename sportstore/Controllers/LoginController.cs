using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using sportstore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace sportstore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {




        private readonly SportsContext _context;

        public LoginController(SportsContext context)
        {
            _context = context;
        }


        [HttpPost("login")]
        public async Task<ActionResult<login>> Login(login log)
        {

            var res = _context.Registration.Where(e => e.Email == log.email && e.Password == e.Password).FirstOrDefault();
            if (res != null)
                return CreatedAtAction("Login", new { status = "success" });
            else
                return CreatedAtAction("Login", new { status = "fail" });

        }
        [HttpGet]
        public  string Get()
        {
            return "string";
        }
    }
}
