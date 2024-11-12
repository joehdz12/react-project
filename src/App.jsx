import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MyNavbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ProductDetail from './components/ItemDetailContainer';

function App() {
  const [cartItems, setCartItems] = useState(2);

  const addToCart = (quantity = 1) => {
    setCartItems(cartItems + quantity);
  };

  return (
    <BrowserRouter>
      <MyNavbar cartItems={cartItems} addToCart={addToCart} />
      <div className="main-container">
        <Routes>
        <Route 
  path="/" 
  element={
    <ItemListContainer 
      greeting={
        <>
          <h1 className="display-3 mb-2">
            Bienvenido a <span style={{ color: '#3a506d' }}>Bee</span>
          </h1>
          <p className="lead text-muted mb-4" style={{ fontSize: '1.4rem' }}>
            Descubre tu estilo, define tu elegancia
          </p>
        </>
      }
    />
  } 
/>
          <Route path="/category/:id" element={<ItemListContainer greeting="" />} />
          <Route path="/item/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

