using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ELO.Leaderboard.Models;
using ELO.Leaderboard.Interfaces.Repositories;
using ELO.Leaderboard.Interfaces.Services;
using Microsoft.EntityFrameworkCore;

namespace ELO.Leaderboard.Services
{
    public class PlayerService : IPlayerService
    {
        private readonly IPlayerRepository _playerRepo;

        public PlayerService(IPlayerRepository playerRepo)
        {
            _playerRepo = playerRepo;
        }

        public bool GetPlayer(string nick, out Player player)
        {
                        
            player = _playerRepo.GetPlayer(nick);
            
            return player != null;
        }

        public async Task<Player> CreateNewPlayer(string nick, string pin, string firstName, string lastName)
        {
            Player player;
            try
            {
                player = await _playerRepo.CreateNewPlayer(nick, pin, firstName, lastName);
            }
            catch (DbUpdateException)
            {
                return null;
            }
            return player;
        }
    }
}
