import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
const selected = {
    fontWeight: "bold",
    textDecoration: "none"
}
const Header = () => {

    return (
        <Navbar className="bg-secondary mb-5" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><h3 className="text-white"><span className='header-title'>Home Tutor Services</span> </h3> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-white">

                        <NavLink
                            activeStyle={selected}
                            to="/Home">
                            <li>Home</li>
                        </NavLink>

                        <NavLink
                            activeStyle={selected}
                            to="/allCourses">
                            <li>Courses</li>
                        </NavLink>

                        <NavLink
                            activeStyle={selected}
                            to="/about">
                            <li>About</li>
                        </NavLink>

                        <NavLink
                            activeStyle={selected}
                            to="/faq"><li>FAQ</li>
                        </NavLink>

                        <NavLink
                            activeStyle={selected}
                            to="/login">
                            <li>Login</li>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;