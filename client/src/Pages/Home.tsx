import React from "react"

import { Button } from 'react-bootstrap';

import { Leaderboard } from "../Components/Leaderboard"

export const Home = () => {

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
    return <div className="mt-40 flex flex-col items-center justify-content-center">

        <Button href="game" size="lg" variant="success" className="mb-16">New Game</Button>

        <Leaderboard columns={columns} rows={rows}
        />
    </div>
}