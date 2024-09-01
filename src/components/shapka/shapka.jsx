import React, { useContext, useState, useEffect  } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../cart/cartContext.jsx'

import './shapka.css'
import logo from '../../assets/icons/logo.svg'
import { dishes } from '../food/allDishes.jsx'
import Cart from '../cart/cart.jsx'


export default function Shapka() {
    const { cart } = useContext(CartContext)

    const [isCartVisible, setCartVisible] = useState(false)

    const [dropdownClass, setDropdownClass] = useState('');

    const toggleCartVisibility = () => {
        setCartVisible(!isCartVisible)
    }

    useEffect(() => {
        if (isCartVisible) {
            setDropdownClass('cart-dropdown cart-dropdown-enter')
        } else {
            setDropdownClass('cart-dropdown')
        }
    }, [isCartVisible])

    return (
    <header>
        <div className="wrap-logo">
            <Link to="/" className="logo">
                <img src={logo} className='logo_img' alt="Логотип" />
            </Link>
        </div>
        <nav>
            {dishes.map((category, index) => (
                <NavLink key={index} 
                to={`/${category.category.toLowerCase()}`}
                className={({ isActive })  => isActive ? 'active' : '' }
                >
                    {category.category}
                </NavLink>
            ))}
            <button
            onClick={toggleCartVisibility}
            className='cart-button'
            >Корзина | <span>{cart.length} </span> </button>
        </nav>
        {isCartVisible && (
            <div className={dropdownClass}>
                <Cart />
            </div>
        )}
    </header>
    )
}