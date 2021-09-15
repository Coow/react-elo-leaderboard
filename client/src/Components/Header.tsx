import React from 'react'
import { Nav, Navbar} from 'react-bootstrap'

import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <Navbar expand="sm" variant="dark" bg="dark" className=" h-16">
            <Nav>
                <Nav.Link><NavLink className="text-white no-underline" to="/">Home</NavLink></Nav.Link>
                <Nav.Link><NavLink className="text-white no-underline" to="matchHistory">Match History</NavLink></Nav.Link>
                <Nav.Link><NavLink className="text-white no-underline" to="rules">Rules</NavLink></Nav.Link>
            </Nav>
        </Navbar>
    )
}