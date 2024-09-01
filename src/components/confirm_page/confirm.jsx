import React, { useState } from 'react';
import { useCart } from '../cart/cartContext.jsx'

import AddressInput from '../adress/adress.jsx';

import './confirm.css'

   
export default function Confirm () {

    const { cart, addToCart, removeFromCart } = useCart()
    const [userInfo, setUserInfo] = useState({ name: '', phone: '', address: '' })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUserInfo({ ...userInfo, [name]: value })
      }

      const handleQuantityChange = (id, action) => {
        if (action === 'increase') {
          addToCart(cart.find(item => item.id === id));
        } else if (action === 'decrease') {
          removeFromCart(id);
        }
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User Info:', userInfo);
        console.log('Cart Items:', cart);
      };

    return(
        <div className='body'>
            <form action="#" method="post">
                <ul>
                    <li>
                        <label for="name">Имя:</label>
                        <input type="text" name="name" placeholder="Иван Иванов" id="name" value={userInfo.name} onChange={handleInputChange} required/>
                    </li>
                    <li>
                        <label for="number">Телефон:</label>
                        <input type="tel" name="phone" placeholder="+7 000 000-00-00" id="number" maxlength="21" value={userInfo.phone} onChange={handleInputChange} required/>
                    </li>
                    <li>
                        <label for="number">Адрес:</label>
                        <AddressInput />
                    </li>
                </ul>
                <div className='container-blocks-cart'>
                    {cart.map(item => (
                        <div key={item.id} className="block_cart">
                            <img src={item.imgSrc} alt={item.name} className='food_icon_cart' />
                            <p className="cart-item-info">{item.name}</p>
                            <div className="quantity-controls button">
                                <button type="button" onClick={() => handleQuantityChange(item.id, 'decrease')}>-</button>
                                <span>{item.quantity}</span>
                                <button type="button" onClick={() => handleQuantityChange(item.id, 'increase')}>+</button>
                            </div>
                        </div>
                    ))}
                </div>
                    <button className='button_cart'>Отправить</button>
            </form>

        </div>
    )
}