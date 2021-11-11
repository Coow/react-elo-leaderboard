using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ELO.Leaderboard.Models;

namespace ELO.Leaderboard.Interfaces.Repositories
{
    public interface IPlayerRepository
    {
        public Player GetPlayer(string nick);

        public Task<Player> CreateNewPlayer(string nick, string pin, string firstName, string lastName);
    }
}
