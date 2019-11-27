import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

class Navigation extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Story Skill Admin</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                       
                    </Nav>
                    <Nav>
                        <Nav.Link href="#stories">Stories</Nav.Link>
                        <Nav.Link href="#users">Users</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}

export default Navigation
