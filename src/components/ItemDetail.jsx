import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const ItemDetail = ({ 
  product, 
  quantity, 
  onQuantityChange, 
  onDecrease, 
  onIncrease,
  onAddToCart 
}) => {
  return (
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
        
        <div className="d-flex align-items-center justify-content-center py-3 mb-3">
          <button 
            className="btn"
            onClick={onDecrease}
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
            onChange={onQuantityChange}
            min="0"
            max={product.available_quantity}
          />
          <button 
            className="btn"
            onClick={onIncrease}
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
          onClick={onAddToCart}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;