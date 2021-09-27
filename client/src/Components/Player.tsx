import React, { useState } from "react"
import axios from "axios";

import { useSelector, useDispatch } from 'react-redux';
import { player1, player2 } from "../Actions";

import { Form, Button, Dropdown } from 'react-bootstrap';
import { Col, Grid, Row } from 'react-flexbox-grid';

type PlayerProps = {
    className?: string
    uuid?: string,
    playerID: string
}

export const Player = ({ uuid, playerID, className }: PlayerProps) => {

    const dispatch = useDispatch();

    const state = useSelector(state => state)

    const state_player1 = useSelector(state => state.player1)

    const handleFormSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            localuuid: { value: string }
        }
        const localUUID = target.localuuid.value
        console.log(target.localuuid.value + playerID)
        console.log()
        axios.post(`http://localhost:3001/users/user`, {
            'localUUID': localUUID
        }).then(response => {
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    const [hasInfo, set_hasInfo] = useState(false)
    return <div className={className}>
        {!hasInfo ?
            <Form className="border-blue-600 border-2 rounded-xl text-center p-8" onSubmit={handleFormSubmit}>
                <h1>Player {playerID}</h1>
                <h3>Please enter ID</h3>
                <Form.Control name="localuuid"></Form.Control>
                <Button className="mt-4" variant="primary" type="submit">Submit</Button>
            </Form>
            :
            <div>

            </div>}
    </div>
}