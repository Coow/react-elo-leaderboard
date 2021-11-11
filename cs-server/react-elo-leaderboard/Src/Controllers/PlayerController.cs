using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
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
        public object GetUser(string nick)
        {
            return _playerService.GetPlayer(nick);
        }

        /*
         * POST api/Player
         * 
         * Create a new player with parameters in request body
         */
        [HttpPost]
        public void Post([FromBody] NewPlayerSchema body)
        {
            _playerService.CreateNewPlayer(body.Nick, body.PIN, body.FirstName, body.LastName);
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
