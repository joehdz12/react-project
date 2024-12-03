import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../firebase/firebase';
import ItemDetail from './ItemDetail';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    let timeoutId;
    const loadProduct = async () => {
      setLoading(true);
      setError(false);
      try {
        const productData = await getProductById(id);
        if (productData) {
          setProduct(productData);
        } else {
          setError(true);
  
          timeoutId = setTimeout(() => {
            navigate('/');
          }, 3000);
        }
      } catch (error) {
        setError(true);
        console.error('Error loading product:', error);
      }
      setLoading(false);
    };
    
    loadProduct();

    // Cleanup function
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [id, navigate]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= product.available_quantity) {
      setQuantity(value);
    }
  };

  const decreaseQuantity = () => {
    setQuantity(prev => Math.max(0, prev - 1));
  };

  const increaseQuantity = () => {
    setQuantity(prev => Math.min(prev + 1, product.available_quantity));
  };

  const handleAddToCart = () => {
    if (quantity > 0 && product) {
      addItem(product, quantity);
      toast.success(`${quantity} ${quantity === 1 ? 'item' : 'items'} añadido al carrito`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          backgroundColor: '#fff',
          color: '#3a506d'
        },
        progressStyle: {
          background: '#3a506d'
        },
        icon: <div style={{ color: '#3a506d' }}>✓</div>
      });
      setQuantity(1);
    }
  };

  if (loading) {
    return (
      <div className="container mt-5 pt-5">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5 pt-5">
        <div className="text-center">
          <h2 style={{ color: '#dc3545' }}>Producto no encontrado</h2>
          <p>Redirigiendo al inicio...</p>
        </div>
      </div>
    );
  }


  return (
    <div className="container mt-5 pt-5">
      {product && (
        <ItemDetail 
          product={product}
          quantity={quantity}
          onQuantityChange={handleQuantityChange}
          onDecrease={decreaseQuantity}
          onIncrease={increaseQuantity}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
};

export default ItemDetailContainer;