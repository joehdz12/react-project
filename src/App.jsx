// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MyNavbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Checkout from './components/Checkout';
import OrderSuccess from './components/OrderSuccess';
import { CartProvider } from './components/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    
    <CartProvider>
      <BrowserRouter>
        <MyNavbar />
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
            <Route 
              path="/category/:id" 
              element={<ItemListContainer greeting="" />} 
            />
            <Route 
              path="/item/:id" 
              element={<ItemDetailContainer />} 
            />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />
          </Routes>
        </div>
        <ToastContainer 
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          theme="light"
        />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;