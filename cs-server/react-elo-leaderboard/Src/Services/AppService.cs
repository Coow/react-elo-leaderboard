using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ELO.Leaderboard.Interfaces.Repositories;
using ELO.Leaderboard.Interfaces.Services;

namespace ELO.Leaderboard.Services
{
    public class AppService : IAppService
    {
        private readonly IAppRepository _appRepository;

        public AppService(IAppRepository appRepository)
        {
            _appRepository = appRepository;
        }

        public string GetHello()
        {
            return _appRepository.GetHello();
        }
    }
}
