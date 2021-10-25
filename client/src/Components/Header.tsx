import { useState } from '@hookstate/core'
import { lang, player1_state } from '../Store'
import React from 'react'
import { Nav, Navbar} from 'react-bootstrap'

import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <Navbar expand="sm" variant="dark" bg="dark" className="pl-16 h-16">
            <Nav className="">
                <Nav.Link><NavLink className="text-white no-underline" to="/">Home</NavLink></Nav.Link>
                <Nav.Link><NavLink className="text-white no-underline" to="newUser">New User</NavLink></Nav.Link>
                <Nav.Link><NavLink className="text-white no-underline" to="matchHistory">Match History</NavLink></Nav.Link>
                <Nav.Link><NavLink className="text-white no-underline" to="rules">Rules</NavLink></Nav.Link>
            </Nav>
        </Navbar>
    )
}