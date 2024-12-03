import React, { useState, useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../components/CartContext';
import Cart from './Cart';

const CartWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getTotalItems } = useContext(CartContext);
  const totalItems = getTotalItems();

  return (
    <>
      <Nav.Link onClick={() => setIsOpen(true)} className="me-3 cart-icon">
        <FaShoppingCart />
        {totalItems > 0 && <span className="cart-items">{totalItems}</span>}
      </Nav.Link>
      <Cart isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default CartWidget;