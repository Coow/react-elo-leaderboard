using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ELO.Leaderboard.Interfaces.Services
{
    public interface IPlayerService
    {
        public object GetPlayer(string nick);
    }
}
