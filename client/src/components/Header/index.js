import React from 'react';
import headerPic from '../../images/title-img.jpg';
import { Navbar, Nav, Container, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className='header'>
            <Container fluid>
                <Navbar.Brand as={Link} to='/'>
                    <img src={headerPic} class='header-img'/>
                </Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to='/news' style={{ color: 'white' }}>News</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;