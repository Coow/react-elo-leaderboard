import React, { useState } from "react"

import { Form, Button, Dropdown } from 'react-bootstrap';
import { Col, Grid, Row } from 'react-flexbox-grid';

type PlayerProps = {
    uuid: string,
    playerID: string
}

export const Player = ({ uuid, playerID }: PlayerProps) => {
    const [hasInfo, set_hasInfo] = useState(false)
    return <div className="w-1/3 m-8 border-blue-600 border-2 rounded-xl">
        {!hasInfo ?
            <Col>
                <Form className="text-center p-8">
                    <h1>Player {playerID}</h1>
                        <Form.Control></Form.Control>
                </Form>
            </Col> :
            <div>

            </div>}
    </div>
}