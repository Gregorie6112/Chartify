import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const NavBar = () => (
  <Navbar className="navColor" bg="dark" variant="dark">
    <Nav className="mr-auto">
      <Nav.Link className="changeNavColor" href="https://gregorie-calderon-portfolio.herokuapp.com/" target="_blank">PORTFOLIO</Nav.Link>
      <Nav.Link className="changeNavColor" href="https://www.linkedin.com/in/gregorie-calderon" target="_blank">LINKEDIN</Nav.Link>
      <Nav.Link className="changeNavColor" href="https://docs.google.com/document/d/11bhCYVx_JpK6c71dc8WD7PjoN1nJqg1FxH6fDz_A1Vw/edit?usp=sharing" target="_blank" >JOURNAL</Nav.Link>
    </Nav>
  </Navbar>
);
export default NavBar;