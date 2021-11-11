using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ELO.Leaderboard.Models;
using ELO.Leaderboard.Interfaces.Repositories;
using ELO.Leaderboard.Persistence;
using Microsoft.EntityFrameworkCore;

namespace ELO.Leaderboard.Repositories
{
    public class PlayerRepository : IPlayerRepository
    {
        private readonly ELOLeaderboardDbContext _dbctx;

        public PlayerRepository(ELOLeaderboardDbContext dbctx)
        {
            _dbctx = dbctx;
        }

        public Player GetPlayer(string nick)
        {
            var player = _dbctx.Player.Where(p => p.Nick == nick).FirstOrDefault();
            
            return player;
        }

        public async Task<Player> CreateNewPlayer(string nick, string pin, string firstName, string lastName)
        {
            Player player = new Player
            {
                Nick = nick,
                PIN = pin,
                FirstName = firstName,
                LastName = lastName
            };

            var playerEntity = await _dbctx.Player.AddAsync(player);

            await _dbctx.SaveChangesAsync();
            return playerEntity.Entity;
        }
    }
}
