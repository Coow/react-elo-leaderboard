using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace ELO.Leaderboard.Models
{
    public class Player
    {
        public Player()
        {
            Matches = new HashSet<Match>();
            Teams = new HashSet<Team>();
        }

        [JsonIgnore]
        public int PlayerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Nick { get; set; }
        public int ELO { get; set; }
        public int Wins { get; set; }
        public int Losses { get; set; }
        [JsonIgnore]
        public int KFactor { get; set; }
        public bool Enabled { get; set; }
        [JsonIgnore]
        public string PIN { get; set; }

        // Foreign Key for Team
        public virtual ICollection<Match> Matches { get; set; }
        public virtual ICollection<Team> Teams { get; set; }
    }
}
