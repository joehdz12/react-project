import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGlasses, FaClock, FaHatCowboy } from "react-icons/fa"; // Update icons
import logo from '../assets/blogo.png';
import CartWidget from './CartWidget';
import { getCategories } from '../asyncMock';

const MyNavbar = ({ cartItems }) => {
  const [categories, setCategories] = useState([]);

  
  const categoryIcons = {
    "MLA1000": <FaGlasses className="me-2" />, // Gafas
    "MLA1744": <FaClock className="me-2" />,   // Relojes
    "MLA1574": <FaHatCowboy className="me-2" /> // Gorras
  };

  useEffect(() => {
    const loadCategories = async () => {
      const data = await getCategories();
      
      const desiredCategories = [
        { id: "MLA1000", name: "Gafas" },
        { id: "MLA1744", name: "Relojes" },
        { id: "MLA1574", name: "Gorras" }
      ];
      setCategories(desiredCategories);
    };
    loadCategories();
  }, []);

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className="w-100 custom-navbar bg-white shadow-sm"
    >
      <div className="container">
        <Navbar.Brand as={Link} to="/" className="ms-3">
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
            {categories.map(category => (
              <Nav.Link
                className='mx-3 d-flex align-items-center text-dark'
                key={category.id}
                as={Link}
                to={`/category/${category.id}`}
              >
                <span className="icon-container">
                  {categoryIcons[category.id]}
                </span>
                {category.name}
              </Nav.Link>
            ))}
          </Nav>
          
          <div className="d-flex align-items-center">
            <CartWidget itemsNumber={cartItems} />
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default MyNavbar;