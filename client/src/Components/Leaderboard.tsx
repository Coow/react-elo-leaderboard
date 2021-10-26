import React, { useState } from "react"

import CalculateWinRatio from '../Functions/CalculateWinRatio'
import NameBuilder from "../Functions/NameBuilder"

import './Leaderboard.css'

type LeaderboardType = {
    rows: Array<{
        nick: string,
        firstName: string,
        lastName: string,
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
            <th className={`${column.field} h-8`}>{column.label}</th>
        )
    })

    rows.forEach((row, i) => {
        console.log(i)
        console.log(row)
        dataRows.push(
            <tr className={`_${i + 1} tableRow h-8`}>
                <td>{i + 1}</td>
                <td>{NameBuilder(row.nick, row.firstName, row.lastName)}</td>
                <td>{row.elo}</td>
                <td>{row.wins}</td>
                <td>{row.losses}</td>
                <td>{CalculateWinRatio(row.wins, row.losses)}</td>
            </tr>
        )
    })

    return (
        <table className="m-auto text-center w-full lg:w-3/6 place-self-center rounded-full">
            <thead>
                <tr>{headers}</tr>
            </thead>
            <tbody>
                {dataRows}
            </tbody>
        </table>
    )
}



