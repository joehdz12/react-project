import React from 'react';
import { FaTimes, FaMinus, FaPlus } from 'react-icons/fa';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../components/CartContext';

const Cart = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const { cartItems, removeItem, updateItemQuantity, getTotalPrice, clear } = useContext(CartContext);
    
    const handleQuantityChange = (item, newQuantity) => {
      if (newQuantity >= 0 && newQuantity <= item.available_quantity) {
        if (newQuantity === 0) {
          removeItem(item.id);
        } else {
          updateItemQuantity(item.id, newQuantity);
        }
      }
    };

    const hasValidItems = () => {
      return cartItems.some(item => item.quantity > 0);
    };
    const handleCheckout = () => {
        onClose();
        navigate('/checkout');
      };
    
  
    return (
      <>
        <div className={`cart-overlay ${isOpen ? 'show' : ''}`} onClick={onClose} />
        <div className={`cart-sidebar ${isOpen ? 'show' : ''}`}>
          <div className="cart-header">
            <h3>Mi Carrito</h3>
            <button onClick={onClose} className="close-btn">
              <FaTimes />
            </button>
          </div>
  
          <div className="cart-items-container">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img 
                  src={item.pictures[0].url} 
                  alt={item.title}
                  className="cart-item-image"
                />
                <div className="cart-item-info">
                  <div className="cart-item-details">
                    <h6 className="item-title">{item.title}</h6>
                    <small className="text-muted">Stock: {item.available_quantity}</small>
                  </div>
                  <div className="cart-item-actions">
                    <div className="quantity-controls">
                      <button 
                        onClick={() => handleQuantityChange(item, item.quantity - 1)}
                        className="btn-quantity"
                      >
                        <FaMinus size={10} />
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        onClick={() => handleQuantityChange(item, item.quantity + 1)}
                        className="btn-quantity"
                      >
                        <FaPlus size={10} />
                      </button>
                    </div>
                    <span className="item-price">${item.price * item.quantity}</span>
                  </div>
                </div>
                <button 
                  onClick={() => removeItem(item.id)}
                  className="remove-btn"
                >
                  <FaTimes size={14} />
                </button>
              </div>
            ))}
          </div>
  
          <div className="cart-footer">
  <div className="cart-total">
    <h4>Total: ${getTotalPrice()}</h4>
  </div>
  <div className="cart-buttons" style={{ display: 'flex', gap: '10px' }}>

          <button 
            className="btn-clear"
            onClick={clear}
            disabled={cartItems.length === 0}
            style={{ 
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              width: '50%',
              padding: '10px'
            }}
          >
            Vaciar carrito
          </button>
          <button 
            className="btn-checkout"
            disabled={!hasValidItems()}
            onClick={handleCheckout}
            style={{ 
              backgroundColor: '#3a506d',
              color: 'white',
              border: 'none',
              width: '50%',
              padding: '10px',
              opacity: !hasValidItems() ? '0.5' : '1'
            }}
          >
            Proceder al checkout
          </button>
        </div>
</div>
        </div>
      </>
    );
  };

export default Cart;