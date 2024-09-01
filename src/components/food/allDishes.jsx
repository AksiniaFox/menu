import React, { useContext } from 'react';

import { CartContext } from '../cart/cartContext.jsx'
import Cart from '../cart/cart.jsx'

import './allDishes.css'
import lazania from '../../assets/icons/lazania.jpg'

export const dishes = [
    {
        category: "Завтрак",
        dishes: [
            { id: 1, name: "Яичница", time: "10 минут", imgSrc: lazania },
            { id: 2, name: "Сосиски", time: "15 минут", imgSrc: lazania },
            { id: 3, name: "Овсянка", time: "5 минут", imgSrc: lazania },
            { id: 4, name: "Сосиски", time: "15 минут", imgSrc: lazania },
            { id: 5, name: "Овсянка", time: "5 минут", imgSrc: lazania },
        ]
    },
    {
        category: "Обед",
        dishes: [
            { id: 4, name: "Борщ", time: "2 часа", imgSrc: lazania},
            { id: 5, name: "Щи", time: "2 часа", imgSrc: lazania},
            { id: 6, name: "Плов", time: "1 час", imgSrc: lazania },
        ]
    },
    {
        category: "Ужин",
        dishes: [
            { id: 7, name: "Курица с картошкой", time: "1.5 часа", imgSrc: lazania },
            { id: 8, name: "Рыба с овощами", time: "1 час", imgSrc: lazania },
            { id: 9, name: "Паста", time: "30 минут", imgSrc: lazania },
        ]
    },
    {
        category: "Напитки",
        dishes: [
            { id: 10, name: "Кофе", time: "5 минут", imgSrc: lazania },
            { id: 11, name: "Чай (на выбор)", time: "10 минут", imgSrc: lazania },
            { id: 12, name: "Кола", time: "2 минуты", imgSrc: lazania },
        ] 
    }
]

export default function allDishes() {

    const { cart, addToCart } = useContext(CartContext);
    return (
            <div className='menu-container'>
                {dishes.map(dishesCategory => (
                    <>
                        <div className='head'>
                            {dishesCategory.category}
                        </div>
                        <div className='container_blocks'>
                            {dishesCategory.dishes.map(dish => (
                                <div key={dish.id} className='block'>
                                    <img src={dish.imgSrc} alt={dish.name} className='food_icon' />
                                    <p>{dish.name}</p>
                                    <p>{dish.time}</p>
                                    <button className='button_want' onClick={() => addToCart(dish)}> Хочу! </button>
                                </div>
                                ))}
                        </div>
                    </>
                ))}
            </div>           
    )
}