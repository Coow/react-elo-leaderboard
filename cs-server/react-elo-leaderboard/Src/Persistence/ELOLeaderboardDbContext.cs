using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ELO.Leaderboard.Models;

namespace ELO.Leaderboard.Persistence
{
    public class ELOLeaderboardDbContext : DbContext
    {
        public DbSet<Match> Match { get; set; }
        public DbSet<Player> Player { get; set; }
        public DbSet<Team> Team { get; set; }

        public ELOLeaderboardDbContext(DbContextOptions<ELOLeaderboardDbContext> options) : base(options) { }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //   optionsBuilder.UseSqlServer(@"Data Source=10.0.0.91;Initial Catalog=ELO-CodeFirst;");
        //}

        protected override void OnModelCreating(ModelBuilder builder)
        {
            // Player
            builder.Entity<Player>().ToTable("Player");
            builder.Entity<Player>().HasKey(p => p.PlayerId);
            builder.Entity<Player>().Property(p => p.PlayerId).IsRequired().ValueGeneratedOnAdd();
            builder.Entity<Player>().Property(p => p.Nick).IsRequired();
            builder.Entity<Player>().Property(p => p.ELO).IsRequired().ValueGeneratedOnAdd().HasDefaultValue(1000);
            builder.Entity<Player>().Property(p => p.Wins).IsRequired().ValueGeneratedOnAdd().HasDefaultValue(0);
            builder.Entity<Player>().Property(p => p.Losses).IsRequired().ValueGeneratedOnAdd().HasDefaultValue(0);
            builder.Entity<Player>().Property(p => p.KFactor).IsRequired().ValueGeneratedOnAdd().HasDefaultValue(30);
            builder.Entity<Player>().Property(p => p.Enabled).IsRequired().ValueGeneratedOnAdd().HasDefaultValue(true);
            builder.Entity<Player>().Property(p => p.PIN).IsRequired();

            // Team
            builder.Entity<Team>().ToTable("Team");
            builder.Entity<Team>().HasKey(t => t.TeamId);
            builder.Entity<Team>().Property(t => t.TeamId).IsRequired().ValueGeneratedOnAdd();
            builder.Entity<Team>().HasMany(t => t.Players).WithMany(p => p.Teams);

            // Match
            builder.Entity<Match>().ToTable("Match");
            builder.Entity<Match>().HasKey(m => m.MatchId);
            builder.Entity<Match>().Property(m => m.MatchId).IsRequired().ValueGeneratedOnAdd();
            builder.Entity<Match>().Property(m => m.Team1Score).IsRequired();
            builder.Entity<Match>().Property(m => m.Team2Score).IsRequired();
            builder.Entity<Match>().Property(m => m.Team1Win).IsRequired();
            builder.Entity<Match>().Property(m => m.Team1Forfeit).IsRequired();
            builder.Entity<Match>().Property(m => m.Team2Forfeit).IsRequired();
            builder.Entity<Match>().Property(m => m.MatchEnded).IsRequired().HasDefaultValueSql("getdate()");
            builder.Entity<Match>().HasMany(m => m.Teams).WithOne(t => t.Match);

        }
    }
}
