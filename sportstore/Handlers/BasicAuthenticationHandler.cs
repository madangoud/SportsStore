using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using sportstore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading.Tasks;

namespace sportstore.Handlers
{
    public class BasicAuthenticationHandler : AuthenticationHandler<AuthenticationSchemeOptions>
    {
        SportsContext _context;
        public BasicAuthenticationHandler(
            
            
            IOptionsMonitor<AuthenticationSchemeOptions> options,
            ILoggerFactory logger,
            UrlEncoder encoder,
            ISystemClock clock,SportsContext context):base(options,logger, encoder, clock)
        {
             _context = context;
        }
        protected override async Task<AuthenticateResult> HandleAuthenticateAsync()
        {
            if(!Request.Headers.ContainsKey("Authorization"))
                return AuthenticateResult.Fail("Authorization header was not found");
            try
            {
                var authvalue = AuthenticationHeaderValue.Parse(Request.Headers["Authorization"]);
                var bytes = Convert.FromBase64String(authvalue.Parameter);
                String[] credentials = Encoding.UTF8.GetString(bytes).Split(":");
                string email = credentials[0];
                string password = credentials[1];
                // User user = _context.Users.Where(user => user.EmailAddress == email && user.Password = password).FirstOrDefault();
                /* if(user==null)
                     return AuthenticateResult.Fail("Error has Occured");
                else{
                var claims=new[]{new Claim(ClaimType.Name,user.EmailAddress)};
                var identity=new ClaimsIdentity(claims,Schema.Name);
                var principal=nwe ClaimPrincipal(identity);
                var ticket=new AuthenticationTicket(principal,Schema.Name);
               return  AuthenticateResult.Success(ticket);
                 }
                
                 */

            }
            catch (Exception)
            {
                return AuthenticateResult.Fail("Error has Occured");
            }


            //return AuthenticateResult.Fail(ticket);
            return AuthenticateResult.Fail("Error has Occured");
        }
    }
}
