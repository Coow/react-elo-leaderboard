using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ELO.Leaderboard.Models;

namespace ELO.Leaderboard.Interfaces.Services
{
    public interface IPlayerService
    {
        public object GetPlayer(string nick);

        public Player CreateNewPlayer(string nick, string pin, string firstName, string lastName);
    }
}
