export default function MedalGiver(leaderboardPosition, length) {
	var posFromBottom = length - leaderboardPosition
    console.log(length)
    if (leaderboardPosition === 1) {
		return "🥇";
	}
	if (leaderboardPosition === 2) {
		return "🥈";
	}
	if (leaderboardPosition === 3) {
		return "🥉";
	}
    if(posFromBottom === 2){
        return "😟"
    }
    if(posFromBottom === 1){
        return "😢"
    }
    if(posFromBottom === 0){
        return "😭"
    }
}
