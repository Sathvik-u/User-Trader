import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {TbPlugConnected} from 'react-icons/tb'
 
function NaviBar() {
  return (
    <div className='pb-1'>
      <Navbar bg="dark" variant="dark" sticky="top" >
    <Container>
      <Navbar.Brand href="/">Connect<span><TbPlugConnected/></span></Navbar.Brand>
      <Nav className="ms-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <NavDropdown title="Manufacturer" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Manufacturer/SignUp">Sign Up</NavDropdown.Item>
              <NavDropdown.Item href="/Manufacturer/Login">
                Login
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Transporter" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Transporter/SignUp">Sign Up</NavDropdown.Item>
              <NavDropdown.Item href="/Transporter/Login">
                Login
              </NavDropdown.Item>
            </NavDropdown>
      </Nav>
    </Container>
  </Navbar></div>
  )
}

export default NaviBar