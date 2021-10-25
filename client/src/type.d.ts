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