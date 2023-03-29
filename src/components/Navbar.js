import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/addrecipe" className="nav-link">
              Create Recipe
            </Link>
           
            <Link to="/recipes" className="nav-link">
              Recipe Lists
            </Link>
            <Link to="/update" className="nav-link">
              Update Recipe
            </Link>
            <Link to="/delete" className="nav-link">
              Delete Recipe
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/signup" className="nav-link">
              Register
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
