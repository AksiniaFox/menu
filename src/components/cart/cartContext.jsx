import React, { createContext, useState, useEffect, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(null)

    useEffect(() => {
        const storedCart = localStorage.getItem('cart')
        if (storedCart) {
            setCart(JSON.parse(storedCart))
        } else {
            setCart([])
        }
    }, [])

    useEffect(() => {
        if (cart !== null) {
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }, [cart])
    
    const addToCart = (dish) => {
        setCart((prevCart) => {
          const existingDish = prevCart.find(item => item.id === dish.id)
    
          if (existingDish) {
            return prevCart.map(item =>
              item.id === dish.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          } else {
            return [...prevCart, { ...dish, quantity: 1 }];
          }
        });
      };
    
      const removeFromCart = (dishId) => {
        setCart((prevCart) => {
          const existingDish = prevCart.find(item => item.id === dishId);
    
          if (existingDish.quantity === 1) {
            return prevCart.filter(item => item.id !== dishId);
          } else {
            return prevCart.map(item =>
              item.id === dishId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            );
          }
        });
      };
    
      const removeAllFromCart = (dishId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== dishId));
      };

      if (cart === null) {
        return <div>Loading...</div>
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, removeAllFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext);
  }