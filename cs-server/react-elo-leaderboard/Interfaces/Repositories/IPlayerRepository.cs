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
    }
}
