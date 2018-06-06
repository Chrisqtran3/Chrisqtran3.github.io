import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import './styles.css'

import resume from './resume.pdf'

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
          <Navbar.Text>
            <Navbar.Link href={resume} target='_blank'>Resume</Navbar.Link>
          </Navbar.Text>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavComponent;
