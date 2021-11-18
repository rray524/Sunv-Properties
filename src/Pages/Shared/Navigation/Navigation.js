import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import './Navigation.css';

const Navigation = () => {
    const { user, logout } = useAuth();
    console.log(user);
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" style={{ background: 'white', borderBottom: '3px solid #000' }}>
            <Container>
                <NavLink to="/" className="logo-container"><img src={logo} alt="" /></NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/explore">Explore</NavLink>
                        {user?.email && <NavLink to="/dashboard">Dashboard</NavLink>}
                    </Nav>
                    <Nav>
                        {user?.email && <NavLink to="/" className="user-block"><h5 className="user_name">{user.displayName}</h5></NavLink>}
                        {user?.email ? <Button onClick={logout} variant="light">Logout</Button> : <Link to='/login'>
                            <Button variant="light">Login</Button>
                        </Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;