// CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // Check if the item is already in the cart
    const existingItem = cart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      // If the item is already in the cart, update its quantity
      setCart(prevCart => prevCart.map(cartItem => {
        if (cartItem.id === item.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1
          };
        }
        return cartItem;
      }));
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };
  const removeAllFromCart =() => {
    setCart([]);
  };

  const increaseQuantity = (itemId) => {
    setCart(prevCart => prevCart.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1
        };
      }
      return item;
    }));
  };

  const decreaseQuantity = (itemId) => {
    setCart(prevCart => prevCart.map(item => {
      if (item.id === itemId && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1
        };
      }
      return item;
    }));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity,removeAllFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
