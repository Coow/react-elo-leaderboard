using System;
using Xunit;
using ELO.Leaderboard.Controllers;
using ELO.Leaderboard.Interfaces.Repositories;
using ELO.Leaderboard.Interfaces.Services;
using ELO.Leaderboard.Repositories;
using ELO.Leaderboard.Services;
using Microsoft.AspNetCore.Mvc;

namespace ELO.Leaderboard.Test
{
    public class AppControllerTest
    {
        private readonly IAppRepository _repository;
        private readonly IAppService _service;
        private readonly AppController _controller;

        public AppControllerTest()
        {
            _repository = new AppRepository();
            _service = new AppService(_repository);
            _controller = new AppController(_service);
        }

        [Fact]
        public void GetHelloTest()
        {
            var result = _controller.GetHello();

            Assert.IsType<OkObjectResult>(result);

            var okresult = result as OkObjectResult;

            Assert.Equal("Hello World!", okresult.Value as string);
        }
    }
}
