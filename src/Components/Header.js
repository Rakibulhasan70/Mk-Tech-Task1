import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import book from '../../src/image/book.png'

const Header = () => {
    return (
        <div className='header'>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Container >
                    <Navbar.Brand style={{ color: '#644F9C' }}><img width='180px' src={book} alt="" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto navbar">
                            <Nav.Link style={{ color: '#644F9C' }}>HOME</Nav.Link>
                            <Nav.Link className='ps-3 ' style={{ color: '#644F9C' }}>ADVERTISERS</Nav.Link>
                            <Nav.Link className='ps-3' style={{ color: '#644F9C' }}>PUBLISHERS </Nav.Link>
                            <Nav.Link className='ps-3' style={{ color: '#644F9C' }}> INFLUENCERS</Nav.Link>
                            <Nav.Link className='ps-3' style={{ color: '#644F9C' }}>AD FORMATS </Nav.Link>
                            <Nav.Link className='ps-3' style={{ color: '#644F9C' }}>BLOG</Nav.Link>
                            <Nav.Link className='ps-3' style={{ color: '#644F9C' }}>CONTACT US</Nav.Link>

                        </Nav>
                        <Nav className='header'>
                            <Nav.Link style={{ color: '#644F9C' }}>LOGIN</Nav.Link>
                            <Nav.Link style={{ color: '#644F9C' }}>SIGNUP</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;