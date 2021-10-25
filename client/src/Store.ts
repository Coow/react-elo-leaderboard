import { createState } from "@hookstate/core"
import { DevTools } from '@hookstate/core'
import { Persistence } from '@hookstate/persistence';

export const player1_state = createState({})
export const player2_state = createState({})

export const player1_score = createState(0)
export const player2_score = createState(0)

//player1_state.attach(Persistence('plugin-persisted-data-key'))
//player2_state.attach(Persistence('plugin-persisted-data-key'))

DevTools(player1_state).label("Player 1")
DevTools(player2_state).label("Player 2")

export const lang = createState('en')
export const gameStarted = createState(false)