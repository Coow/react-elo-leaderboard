import React from "react"

import './Game.scss'

import { Player } from "../Components/Player"
import { useState } from "@hookstate/core"
import { player1_score, player1_state, player2_score, player2_state } from "../Store"

export const Game = () => {

    const p1s = useState(player1_state)
    const p2s = useState(player2_state)

    const p1score = useState(player1_score)
    const p2score = useState(player2_score)

    return <div>
        <Player className="player1" playerID="1" playerState={p1s} playerScore={player1_score}/>
        <a className="text-9xl text-white absolute no-underline top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">VS</a>
        <Player className="player2" playerID="2" playerState={p2s} playerScore={player2_score}/>
    </div>
}