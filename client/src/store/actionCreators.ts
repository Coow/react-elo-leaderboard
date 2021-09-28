import * as actionTypes from "./actionTypes"

export function setPlayer(player: IPlayer) {
    const action: PlayerAction = {
        type: actionTypes.SET_PLAYER,
        player
    }

    return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: PlayerAction) {
    return (dispatch: DispatchType) => {
        dispatch(action)
    }
}