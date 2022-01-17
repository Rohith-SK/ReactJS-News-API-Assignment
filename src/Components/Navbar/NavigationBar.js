import React from 'react'
import { Nav, Navbar, NavLink } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import './NavigationBar.css'

function NavigationBar() {
    return (
        <div>
            <Navbar>
                <Container className='navbar-container'>
                    <Navbar.Brand href='/' className='navbar-brand' style={{'color':'white'}}>ReactJS</Navbar.Brand>
                    <Nav>
                        <NavLink  href='/newsinfo' className='nav-links' style={{'color':'white'}}>Home</NavLink>
                        <NavLink href='/about' className='nav-links' style={{'color':'white'}}>About</NavLink>
                        <NavLink href='/works' className='nav-links' style={{'color':'white'}}>Works</NavLink>
                        <NavLink href='/teammembers' className='nav-links' style={{'color':'white'}}>Team</NavLink>
                        <NavLink className='nav-links' style={{'color':'white'}}>{localStorage.getItem('username')}</NavLink>
                        <NavLink href='/' className='nav-links' style={{'color':'white'}}>Sign Out</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar
