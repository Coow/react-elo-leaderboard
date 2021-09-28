
import * as actionTypes from "./actionTypes"

const ininitalPlayer1State: Player1State = {

}

const reducer = (
    state: Player1State = ininitalPlayer1State,
    action: Player1State
): Player1State => {
    switch (action.type) {
        case actionTypes.SET_PLAYER:
            const setPlayer: IPlayer = {

            }
    }
    return state
}

export default reducer;