import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import Logo from './Educational-Logo.png'
const selected = {
    fontWeight: "bold",
    textDecoration: "none"
}
const Header = () => {

    return (
        <div>
            <Navbar className="bg-secondary" expand="lg">
                <Container>
                    <img className='logo' src={Logo} alt="Logo" />
                    <Navbar.Brand href="#home"><h2 className="text-white"><span className='header-title'>Online Tutor Services</span> </h2></Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto text-white">

                            <NavLink
                                activeStyle={selected}
                                to="/Home">
                                <li><i className="fas fa-home"> </i>Home</li>
                            </NavLink>

                            <NavLink
                                activeStyle={selected}
                                to="/allCourses">
                                <li><i className="fab fa-discourse"></i> Courses</li>
                            </NavLink>

                            <NavLink
                                activeStyle={selected}
                                to="/about">
                                <li><i className="fas fa-eject"></i> About</li>
                            </NavLink>

                            <NavLink
                                activeStyle={selected}
                                to="/faq"><li><i className="fas fa-question-circle"></i> FAQ</li>
                            </NavLink>

                            <NavLink
                                activeStyle={selected}
                                to="/login">
                                <li><i className="fas fa-sign-in-alt"></i> Login</li>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;