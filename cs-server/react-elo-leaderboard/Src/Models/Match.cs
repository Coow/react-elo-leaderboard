using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace ELO.Leaderboard.Models
{
    public class Match
    {
        public Match()
        {
            Teams = new HashSet<Team>();
        }
        

        [JsonIgnore]
        public int MatchId { get; set; }
        public int Team1Score { get; set; }
        public int Team2Score { get; set; }
        public bool Team1Win { get; set; }
        public bool Team1Forfeit { get; set; }
        public bool Team2Forfeit { get; set; }
        public DateTime MatchEnded { get; set; }

        // Foreign key
        public virtual ICollection<Team> Teams { get; set; }
    }
}
