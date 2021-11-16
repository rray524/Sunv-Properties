import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Navigation.css';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" style={{ background: 'white', borderBottom: '3px solid #000' }}>
            <Container>
                <NavLink to="/"><img src={logo} alt="" /></NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/explore">Explore</NavLink>
                        <NavLink to="/dashboard">Dashboard</NavLink>


                    </Nav>
                    <Nav>
                        <NavLink to="#deets">Rahul Ray</NavLink>
                        <Button variant="light">Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;