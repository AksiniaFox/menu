import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import Shapka from './components/shapka/shapka.jsx'
import AllDishes from './components/food/allDishes.jsx'
import Cart from './components/cart/cart.jsx';
import { CartProvider } from '../src/components/cart/cartContext.jsx';
import Category from './components/food/category.jsx';
import { dishes } from './components/food/allDishes.jsx';
import Confirm from './components/confirm_page/confirm.jsx';

function App() {

  

  return (
    <CartProvider>
      <Router>
        <div> 
          <link href="https://fonts.googleapis.com/css2?family=Commissioner:wght@100..900&display=swap" rel="stylesheet"/>
          <Shapka/>
          <Routes>
            <Route path = "/" element = { <AllDishes/> } />
            {dishes.map((category, index) => (
                <Route 
                  key={index} 
                  path={`/${category.category.toLowerCase()}`} 
                  element={<Category category={category} />} 
                />
            ))}
            <Route path = "/cart" element = { <Cart/> } />
            <Route path = "/confirm" element = { <Confirm/> } />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
