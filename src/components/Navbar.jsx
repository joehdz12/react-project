import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/blogo.png';
import CartWidget from './CartWidget'; 

const MyNavbar = ({ cartItems, addToCart }) => {
  return (
    <Navbar expand="lg" fixed="top" className="w-100 custom-navbar">
      <Navbar.Brand href="#home" className="ms-3">
        <img
          src={logo}
          height="30"
          className="d-inline-block align-top"
          alt="E-Commerce Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto custom-nav-links">
          <Nav.Link href="#electronics">Electronics</Nav.Link>
          <Nav.Link href="#toys">Toys</Nav.Link>
          <Nav.Link href="#garden">Garden</Nav.Link>
          {/* Botón para añadir ítems al carrito */}
          <Nav.Link onClick={() => addToCart(1)}>Add to Cart</Nav.Link>
        </Nav>
        <CartWidget itemsNumber={cartItems} />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
