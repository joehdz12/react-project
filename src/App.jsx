import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MyNavbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const [cartItems, setCartItems] = useState(2); // Inicializado en 2

  // Función para añadir ítems al carrito
  const addToCart = (quantity = 1) => {
    setCartItems(cartItems + quantity);
  };

  return (
    <>
      <MyNavbar cartItems={cartItems} addToCart={addToCart} />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
    </>
  );
}

export default App;

