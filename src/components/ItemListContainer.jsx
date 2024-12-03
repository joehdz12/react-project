// ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProducts } from '../firebase/firebase';
import { toast } from 'react-toastify';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let timeoutId;
    const loadProducts = async () => {
      setLoading(true);
      setError(false);
      try {
        const products = await getProducts(id);
        if (products.length === 0 && id) {
          setError(true);
          timeoutId = setTimeout(() => {
            navigate('/');
          }, 3000);
        } else {
          setAllProducts(products);
        }
      } catch (error) {
        setError(true);
        console.error('Error loading products:', error);
      }
      setLoading(false);
    };
    
    loadProducts();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [id, navigate]);

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
          <h2 style={{ color: '#dc3545' }}>Categoría no encontrada</h2>
          <p>Redirigiendo al inicio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5 pt-4">
      <div className="text-center mb-4">{greeting}</div>
      <ItemList products={allProducts} />
    </div>
  );
};

export default ItemListContainer;