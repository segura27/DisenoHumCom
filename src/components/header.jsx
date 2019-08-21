import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

class Header extends Component {
    render() {
        return <div><Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="./img/logomep.png"
                    width="80vw"
                    height="50vh"
                    className="d-inline-block align-top"
                />

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Página Principal</Nav.Link>
                    <Nav.Link href="#link">Tema 1</Nav.Link>
                    <NavDropdown title="Tema 2" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/2.1">SubTema 2.1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/2.2">SubTema 2.2</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Tema 3" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">SubTema 3.1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">SubTema 2.2</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Búsqueda rápida" className="mr-sm-2" />
                    <Button variant="outline-success">Buscar</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        </div>
    }
}
export default Header;