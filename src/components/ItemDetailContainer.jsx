import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { getProductById } from '../asyncMock';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      const productData = await getProductById(id);
      setProduct(productData);
      setLoading(false);
    };
    loadProduct();
  }, [id]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setQuantity(value);
    }
  };

  const decreaseQuantity = () => {
    setQuantity(prev => Math.max(0, prev - 1));
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
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

  return (
    <div className="container mt-5 pt-5">
      {product && (
        <div className="row">
          <div className="col-md-6">
            <img 
              src={product.pictures[0].url} 
              alt={product.title} 
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h2>{product.title}</h2>
            <p className="lead">${product.price}</p>
            <p>{product.description}</p>
            <p>Stock disponible: {product.available_quantity}</p>
            
            {/* Quantity Counter */}
            <div className="d-flex align-items-center py-3 justify-content-center mb-3">
              <button 
                className="btn btn-outline-secondary" 
                onClick={decreaseQuantity}
                style={{ 
                  backgroundColor: '#3a506d',
                  color: 'white',
                  border: 'none'
                }}
              >
                <FaMinus />
              </button>
              <input
                type="number"
                className="form-control mx-2 text-center"
                style={{ width: '70px' }}
                value={quantity}
                onChange={handleQuantityChange}
                min="0"
              />
              <button 
                className="btn btn-outline-secondary"
                onClick={increaseQuantity}
                style={{ 
                  backgroundColor: '#3a506d',
                  color: 'white',
                  border: 'none'
                }}
              >
                <FaPlus />
              </button>
            </div>

            <button 
              className="btn"
              style={{ 
                backgroundColor: '#3a506d',
                color: 'white',
                border: 'none'
              }}
              disabled={quantity === 0}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;