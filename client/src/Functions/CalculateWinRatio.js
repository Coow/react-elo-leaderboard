export default function CalculateWinRatio( wins, losses) {
    //Convert the input to strings:
    let intWins = parseInt(wins);
    let intLosses = parseInt(losses);

    let totalGames = intWins + intLosses;

    let winRatio = intWins / totalGames;

    let winPercentage = (winRatio * 100);
    let winPercentageInt = Math.round(winPercentage);

    if (!winPercentageInt) {
        return "";
    }

    return winPercentageInt + "%";
}