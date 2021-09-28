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
    player1: IPlayer
}

type Player2State = {
    player2: IPlayer
}

type PlayerAction = {
    type: string
    player: IPlayer
}

type DispatchType = (args: PlayerAction) => PlayerAction