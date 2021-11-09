import React from "react"
import axios from "axios";

import { Form, Button, Dropdown } from 'react-bootstrap';
import { AppContext } from "../AppContext";
import { lang, player1_state } from "../Store";
import { useState } from "@hookstate/core";

import { Persistence } from '@hookstate/persistence';

import NameBuilder from '../Functions/NameBuilder'


type PlayerProps = {
    className?: string
    uuid?: string,
    playerID: string,
    playerState: any,
    playerScore?: any
}

export const Player = ({ uuid, playerID, className, playerState, playerScore }: PlayerProps) => {

    console.log("persisted" + JSON.stringify(playerState.get()))

    const hasInfo = useState(false)
    //hasInfo.attach(Persistence('plugin-persisted-data-key'))

    const handleFormSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            localuuid: { value: string }
        }
        const localUUID = target.localuuid.value

        axios.post(`http://localhost:3001/users/user`, {
            'localUUID': localUUID
        }).then(response => {
            playerState.set(response.data)
            hasInfo.set(true)
        }).catch(error => {
            console.log(error)
        })
    }

    const subtractScore = () => {
        console.log("subscore")
        if((playerScore.get() === 0)) {
            return;
        } else {
            playerScore.set((p: number) => p - 1)
        }
    }

    const addScore = () => {
        console.log("addscore")
        playerScore.set((p: number) => p + 1)
    }

    return <div className={className}>
        {!hasInfo.get() ?
            <Form className="border-blue-600 border-2 rounded-xl text-center p-8" onSubmit={handleFormSubmit}>
                <h1>Player {playerID}</h1>
                <h3>Please enter ID</h3>
                <Form.Control name="localuuid"></Form.Control>
                <Button className="mt-4" variant="primary" type="submit">Submit</Button>
            </Form>
            :
            <Form className="border-blue-600 border-2 rounded-xl text-center p-8">
                <h1>
                    {NameBuilder((playerState.get()).nick, (playerState.get()).firstName, (playerState.get()).lastName)}
                </h1>
                <div className="flex borderer">
                    <Button onClick={subtractScore} className="mx-2">-</Button>
                    <b className="text-4xl">{playerScore.get()}</b>
                    <Button onClick={() => playerScore.set((p: number) => p + 1)} className="mx-2">+</Button>
                </div>
            </Form>}
    </div>
}