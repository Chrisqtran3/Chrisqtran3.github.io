import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import './styles.css'

const NavComponent = () => {
  return (
    <Navbar className='navBar navbar-fixed-top' collapseOnSelect>
      <Navbar.Header>
        <Navbar.Toggle />
        <Navbar.Brand>
          <a href='#home'>Chris Tran</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem href='#about'>
            About
          </NavItem>
          <NavItem href='#projects'>
            Projects
          </NavItem>
          <NavItem href='#contact'>
            Contact
          </NavItem>
          <NavItem href='#'>
            Resume
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavComponent;
