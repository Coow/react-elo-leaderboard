import React from "react"

import './Game.scss'

import { Player } from "../Components/Player"

export const Game = () => {

    return <div>
        <Player className="player1" playerID="1"/>
        <a className="text-9xl text-white absolute no-underline top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">VS</a>
        <Player className="player2" playerID="2"/>
    </div>
}