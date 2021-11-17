using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ELO.Leaderboard.Interfaces.Repositories;

namespace ELO.Leaderboard.Repositories
{
    public class AppRepository : IAppRepository
    {
        public string GetHello()
        {
            return "Hello World!";
        }
    }
}
