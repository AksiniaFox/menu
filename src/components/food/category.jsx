
import React, { useContext } from 'react';

import { CartContext } from '../cart/cartContext.jsx'

export default function Category ({ category }) {

    const { cart, addToCart } = useContext(CartContext);
    return (
        <div>
            {category ? (
                <div className='menu-container'>
                    <h1 className='head'>{category.category}</h1>
                    <div className='container_blocks'>
                        {category.dishes.map((dish) => (
                           <div key={dish.id} className='block'>
                           <img src={dish.imgSrc} alt={dish.name} className='food_icon' />
                           <p>{dish.name}</p>
                           <p>{dish.time}</p>
                           <button className='button_want' onClick={() => addToCart(dish)}> Хочу! </button>
                           </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p>Категория не найдена</p>
            )}
        </div>
    );
}       