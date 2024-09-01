import React, { useContext } from 'react';
import { CartContext } from './cartContext.jsx'; 
import { useNavigate } from 'react-router-dom';
import './cart.css'

export default function Cart() {
    const { cart, addToCart, removeFromCart, removeAllFromCart  } = useContext(CartContext); 

    const navigate = useNavigate();

    const handleOrderClick = () => {
        navigate('/confirm');
    };

    return (
        <div>
            <h2 className="head_cart">Корзина</h2>
            <div  className='cart'>
                {cart.length === 0 ? (
                    <p className='block_cart'>Ваша корзина пуста</p>
                ) : (
                    <div>
                        <div className='container_blocks_cart'>
                        {cart.map((dish, index) => (
                            <div key={index} className="block_cart">
                                <img src={dish.imgSrc} alt={dish.name} className='food_icon_cart' />
                                <div className="cart-item-info">
                                    <p>{dish.name}</p>
                                    <p>{dish.time}</p>
                                    <div className="quantity-controls button">
                                        <button onClick={() => removeFromCart(dish.id)}>-</button>
                                        <span>{dish.quantity}</span>
                                        <button onClick={() => addToCart(dish)}>+</button>
                                        <button 
                                            className="remove-button" 
                                            onClick={() => removeAllFromCart(dish.id)}
                                        ></button>
                                    </div>
                                    
                                </div>
                            </div>
                        ))}
                        </div>
                        <button className='button_cart' onClick={handleOrderClick} >Заказать!</button>
                    </div>
                )}
                </div>
        </div>
    )
}


