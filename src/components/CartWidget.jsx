import React from 'react';
import { Nav } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa'; 

const CartWidget = ({ itemsNumber }) => {
  return (
    <Nav.Link href="#cart" className="me-3 cart-icon">
      <FaShoppingCart />
      {itemsNumber > 0 && <span className="cart-items">{itemsNumber}</span>}
    </Nav.Link>
  );
};

export default CartWidget;
