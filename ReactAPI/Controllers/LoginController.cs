using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactAPI.Modals;
using Microsoft.Extensions.Configuration;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.Security.Claims;

namespace ReactAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        public IConfiguration _configuration;
        private readonly T2004E_React_ArtGalleryContext _context;
        public LoginController(IConfiguration configuration, T2004E_React_ArtGalleryContext context)
        {
            _configuration = configuration;
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult> Login(User _userData)
        {
            if (_userData != null
                && _userData.Email != null
                && _userData.Password != null)
            {
                // Kiem tra user va tra ve token neu login thanh cong
                var user = await _context.Users
                    .FirstOrDefaultAsync(u => u.Email == _userData.Email && u.Password == _userData.Password && u.IsDeleted == 0);
                if (user != null)
                {
                    // Neu tim thay user thi sinh ra token de tra ve
                    var claims = new[]
                    {
                        new Claim(JwtRegisteredClaimNames.Sub, _configuration["Jwt:Subject"]),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                        new Claim(JwtRegisteredClaimNames.Iat, DateTime.Now.ToString()),
                        new Claim("Id", user.Email),
                        new Claim("FirstName", user.FirstName),
                        new Claim("LastName", user.LastName),
                        new Claim("Role", user.Role),
                    };

                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
                    var sign = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature);
                    var token = new JwtSecurityToken(_configuration["Jwt:Issuer"], _configuration["Jwt:Audience"], claims, expires: DateTime.Now.AddDays(1), signingCredentials: sign);

                    return Ok(new { token = new JwtSecurityTokenHandler().WriteToken(token), role = user.Role, id = user.Id });
                }

                return BadRequest("Username or password incorrect!");
            }


            return BadRequest("User not valid!");
        }
    }
}
