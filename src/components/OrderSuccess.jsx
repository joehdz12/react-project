import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const OrderSuccess = () => {
  const { state } = useLocation();
  const { orderId } = state || {};

  return (
    <div className="container mt-5 pt-5">
      <div className="text-center p-5 bg-white rounded shadow-sm">
        <FaCheckCircle 
          size={80} 
          style={{ 
            color: '#3a506d',
            marginBottom: '1.5rem'
          }} 
        />
        <h1 className="display-4 mb-4 fw-bold">¡Gracias por tu compra!</h1>
        <div className="mb-5">
          <p className="lead text-muted mb-4">
            Tu orden ha sido procesada exitosamente.
          </p>
          <div className="bg-light p-3 rounded-3 d-inline-block">
            <p className="mb-1 text-muted">ID de orden:</p>
            <p className="h4 mb-0" style={{ color: '#3a506d' }}>
              {orderId}
            </p>
          </div>
        </div>
        <p className="h5 mb-5" style={{ color: '#3a506d' }}>
          Te esperamos pronto nuevamente.
        </p>
        <Link 
          to="/" 
          className="btn btn-lg px-5 py-3 rounded-pill shadow-sm"
          style={{ 
            backgroundColor: '#3a506d', 
            color: 'white',
            transition: 'transform 0.2s',
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;