import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Navbar, Nav } from 'react-bootstrap'


class Navigation extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Link to='/'>
                    <Navbar.Brand href='/'>
                        Story Skill Admin
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                    <Nav>
                        <Link to='/stories'>
                            <Nav.Link href="/stories">Stories</Nav.Link>
                        </Link>
                        <Link to='/users'>
                            <Nav.Link href="/users">Users</Nav.Link>
                        </Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}

export default Navigation
