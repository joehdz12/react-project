import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import { toast } from 'react-toastify';
import { createOrder } from '../firebase/firebase';

const Checkout = () => {
    const navigate = useNavigate();
    const { cartItems, getTotalPrice, clear } = useContext(CartContext);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (cartItems.length === 0) {
            toast.error('No hay items en el carrito', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                style: {
                    backgroundColor: '#fff',
                    color: '#dc3545'
                }
            });
            navigate('/');
        }
    }, [cartItems, navigate]);

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'El nombre es requerido';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'El teléfono es requerido';
        } else if (!/^\d{10}$/.test(formData.phone.trim())) {
            newErrors.phone = 'Ingrese un número de teléfono válido (10 dígitos)';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'El email es requerido';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Ingrese un email válido';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
        
        if (errors[name]) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
          try {
            const orderData = {
              buyer: formData,
              items: cartItems.map(item => ({
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity
              })),
              total: getTotalPrice(),
              date: new Date().toISOString()
            };
            
            const orderId = await createOrder(orderData);
            if (!orderId) throw new Error('No se pudo crear la orden');
            
            clear();
            navigate('/order-success', { state: { orderId } });
            
          } catch (error) {
            console.error('Error in handleSubmit:', error);
            toast.error('Error al procesar la orden. Por favor intente nuevamente.', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              style: {
                backgroundColor: '#fff',
                color: '#dc3545'
              }
            });
          }
        }
      };

    return (
        <div className="container-fluid d-flex flex-column px-4 mt-5">
            <div className="d-flex justify-content-between align-items-center mb-5 mt-4">
              <h2>Checkout</h2>
                <div className="d-flex align-items-center gap-4">
                    <h4 className="mb-0">Total: <span style={{ color: '#3a506d' }}>${getTotalPrice()}</span></h4>
                    <button
                        onClick={handleSubmit}
                        className="btn py-2 px-4"
                        style={{ 
                            backgroundColor: '#3a506d',
                            color: 'white'
                        }}
                    >
                        Finalizar Compra
                    </button>
                </div>
            </div>
    
            <div className="d-flex flex-wrap mt-3 gap-4">
                <div className="flex-grow-1 border-end pe-5" style={{ minWidth: '400px' }}>
                    <h3 className="mb-4" style={{ color: '#3a506d' }}>Datos de Contacto</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input
                                type="text"
                                className={`form-control form-control-lg ${errors.name ? 'is-invalid' : ''}`}
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleFormChange}
                                style={{ height: '50px' }}
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="form-label">Teléfono</label>
                            <input
                                type="tel"
                                className={`form-control form-control-lg ${errors.phone ? 'is-invalid' : ''}`}
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleFormChange}
                                style={{ height: '50px' }}
                            />
                            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleFormChange}
                                style={{ height: '50px' }}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                    </form>
                </div>
    
                <div className="flex-grow-1" style={{ minWidth: '400px' }}>
                    <h3 className="mb-4" style={{ color: '#3a506d' }}>Resumen de Compra</h3>
                    <div className="cart-items-summary">
                        {cartItems.map(item => (
                            <div key={item.id} className="d-flex justify-content-between align-items-center py-3 border-bottom">
                                <div>
                                    <h6 className="mb-0">{item.title}</h6>
                                    <small className="text-muted">Cantidad: {item.quantity}</small>
                                </div>
                                <span className="fs-5">${item.price * item.quantity}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;