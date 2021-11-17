using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json.Serialization;

namespace ELO.Leaderboard.Models
{
    public class Team
    {
        public Team()
        {
            Players = new HashSet<Player>();
        }

        [JsonIgnore]
        public int TeamId { get; set; }

        // Foreign keys
        public virtual ICollection<Player> Players { get; set; }
        public Match Match { get; set; }
    }
}
