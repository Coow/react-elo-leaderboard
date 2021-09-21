import React, { useState } from "react"

import CalculateWinRatio from '../Functions/CalculateWinRatio'

import './Leaderboard.css'

type LeaderboardType = {
    rows: Array<{
        playerName: string,
        elo: number,
        wins: number,
        losses: number
    }>,
    columns: Array<{ field: String, label: String }>,
}

export const Leaderboard = ({ rows, columns }: LeaderboardType) => {
    var headers: JSX.Element[] = []
    let dataRows: JSX.Element[] = []

    columns.forEach(column => {
        headers.push(
            <th className={`${column.field}`}>{column.label}</th>
        )
    })

    rows.forEach((row, i) => {
        dataRows.push(
            <tr className={`_${i + 1} tableRow`}>
                <td>{i + 1}</td>
                <td>{row.playerName}</td>
                <td>{row.elo}</td>
                <td>{row.wins}</td>
                <td>{row.losses}</td>
                <td>{CalculateWinRatio(row.wins, row.losses)}</td>
            </tr>
        )
    })

    return (
        <table className="m-auto text-center w-full lg:w-3/6 place-self-center">
            <thead>
                <tr>{headers}</tr>
            </thead>
            <tbody>
                {dataRows}
            </tbody>
        </table>
    )
}



