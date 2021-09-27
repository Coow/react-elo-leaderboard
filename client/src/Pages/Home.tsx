import React, { useEffect, useState } from "react"
import axios from "axios";

import { Button } from 'react-bootstrap';

import { Leaderboard } from "../Components/Leaderboard"

export const Home = () => {

    const [leaderboardJSON, set_leaderboardJSON] = useState([])

    let columns = [
        {
            label: "#",
            field: "placement"
        },
        {
            label: "Name",
            field: "playerName"
        },
        {
            label: "ELO",
            field: "elo"
        },
        {
            label: "Wins",
            field: "wins"
        },
        {
            label: "Losses",
            field: "losses"
        },
        {
            label: "Win Ratio",
            field: "winRatio"
        }
    ]

    let rows = [
        {
            playerName: "Ash",
            elo: 1000,
            wins: 2,
            losses: 3,
            uuid: "alskjdlakjsdla"
        },
        {
            playerName: "Bob",
            elo: 1000,
            wins: 4,
            losses: 0
        },
        {
            playerName: "Cat",
            elo: 1000,
            wins: 2,
            losses: 3
        },
        {
            playerName: "Dog",
            elo: 1000,
            wins: 2,
            losses: 3
        },
    ]

    useEffect(() => {
        fetch(`http://localhost:3001/users`)
        .then(result => result.json())
        .then(response => {
            console.log(response)
            set_leaderboardJSON(response)
        })
    },[])

    return <div className="mt-20 flex flex-col items-center justify-content-center">

        <Button href="game" size="lg" variant="success" className="mb-16 w-1/6">New Game</Button>

        <Leaderboard columns={columns} rows={leaderboardJSON}
        />
    </div>
}