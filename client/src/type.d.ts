interface IPlayer {
    enabled: boolean
    kFactor: number
    losses: number
    wins: number
    elo: number
    firstName: string
    lastName: string
    nick: string
    localUUID: string
}

type Player1State = {
    player1: IPlayer1
    savePlayer: (player: IPlayer) => void
}

type Player2State = {
    player2: IPlayer1
    savePlayer: (player: IPlayer) => void
}

type MatchType = {
	team1: Array<String>;
	team2: Array<String>;
	team1score: number;
	team2score: number;
	team1win: boolean;
};