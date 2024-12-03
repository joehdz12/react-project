import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className="col-md-4 mb-4" style={{ minWidth: '300px', maxWidth: '400px' }}> 
      <div className="card h-100 shadow-sm">
        <div className="card-img-container p-3">
          <img 
            src={product.pictures[0].url}
            className="card-img-top" 
            alt={product.title}
            style={{ 
              height: '220px',
              objectFit: 'contain',
              width: '100%'
            }}
          />
        </div>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title" style={{ fontSize: '1rem', minHeight: '2.5rem' }}>
            {product.title.length > 50 
              ? `${product.title.substring(0, 50)}...` 
              : product.title}
          </h5>
          <p className="card-text fs-4 mb-2">
            <strong>${product.price}</strong>
          </p>
          <p className="card-text text-muted mb-3">
            <small>Stock disponible: {product.available_quantity}</small>
          </p>
          <Link 
  to={`/item/${product.id}`} // Using Firestore document ID
  className="btn mt-auto"
  style={{ 
    backgroundColor: '#3a506d',
    color: 'white',
    border: 'none'
  }}
>
  Ver detalle
</Link>
        </div>
      </div>
    </div>
  );
};

export default Item;