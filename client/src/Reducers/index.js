import { combineReducers } from 'redux';

const allReducers = combineReducers({
    player1,
    player2
})

function player1(state = null, action) {
    switch (action.type) {
        case 'PLAYER1':
            return state = action.payload;
        default:
            return state;
    }
};

function player2(state = null, action) {
    switch (action.type) {
        case 'PLAYER2':
            return state = action.payload;
        default:
            return state;
    }
};

export default allReducers