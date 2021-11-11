using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ELO.Leaderboard.Interfaces.Services;

namespace ELO.Leaderboard.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AppController : ControllerBase
    {
        private readonly IAppService _appService;

        public AppController(IAppService appService)
        {
            _appService = appService;
        }

        [HttpGet()]
        public ActionResult GetHello()
        {
            return Ok(_appService.GetHello());
        }
    }
}
