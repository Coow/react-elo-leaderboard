using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ELO.Leaderboard.Models;
using ELO.Leaderboard.Interfaces.Repositories;
using ELO.Leaderboard.Persistence;

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
    }
}
