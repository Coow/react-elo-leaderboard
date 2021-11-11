using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ELO.Leaderboard.Models;
using ELO.Leaderboard.Interfaces.Repositories;
using ELO.Leaderboard.Interfaces.Services;

namespace ELO.Leaderboard.Services
{
    public class PlayerService : IPlayerService
    {
        private readonly IPlayerRepository _playerRepo;

        public PlayerService(IPlayerRepository playerRepo)
        {
            _playerRepo = playerRepo;
        }

        public object GetPlayer(string nick)
        {
            Player player = _playerRepo.GetPlayer(nick);
            return player;
        }
    }
}
