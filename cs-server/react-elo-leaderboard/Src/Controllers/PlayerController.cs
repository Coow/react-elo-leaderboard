using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using ELO.Leaderboard.Interfaces.Services;
using ELO.Leaderboard.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ELO.Leaderboard.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayerController : ControllerBase
    {
        private readonly IPlayerService _playerService;

        public PlayerController(IPlayerService playerService)
        {
            _playerService = playerService;
        }
        /*
         * GET: api/Player
         * 
         * Returns a list of all Players
         */
        [HttpGet]
        public string Get()
        {
            throw new NotImplementedException();
        }

        /*
         * GET api/Player/{nick}
         * 
         * Returns Player with nickname 'nick'
         */
        [HttpGet("{nick}")]
        public ActionResult GetUser(string nick)
        {
            if (!_playerService.GetPlayer(nick, out var player))
            {
                return NotFound();
            }

            return Ok(player);
        }

        /*
         * POST api/Player
         * 
         * Create a new player with parameters in request body
         */
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] NewPlayerSchema body)
        {
            var player = await _playerService.CreateNewPlayer(body.Nick, body.PIN, body.FirstName, body.LastName);
            if (player == null)
            {
                // TODO: Standard Error Schema class
                return BadRequest(new { error = $"Nickname {body.Nick} is already taken!", ResponseCode = HttpStatusCode.BadRequest });
            }

            string uri = $"http://localhost:14132/api/Player/{player.Nick}";
            return Created(uri, player);
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
            throw new NotImplementedException();
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{nick}")]
        public void Delete(string nick)
        {
            throw new NotImplementedException();
        }
    }
}
