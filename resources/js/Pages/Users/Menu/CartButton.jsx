// CartButton.js
import React from 'react';
import { useCart } from './CartContext';

const CartButton = () => {
  const { cart } = useCart();

  return (
    <div className="relative">
      <button className="bg-primary px-6 py-3 text-white poppins rounded-full  focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105">
        Cart
      </button>
      {cart.length > 0 && (
        <span className="bg-red-500 text-white absolute top-0 right-0 rounded-full p-1 text-xs">
          {cart.length}
        </span>
      )}
    </div>
  );
};

export default CartButton;
