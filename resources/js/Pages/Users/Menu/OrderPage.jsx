// OrderPage.js
import React, { useEffect } from "react";
import { useCart } from "./CartContext";
import OrderPrice from "../PlaceOrder/OrderPrice";
import PlaceOrderScreen from "../../screens/PlaceOrderScreen";

const OrderPage = () => {
  const {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  return (
    <>
      <div className="mt-40 md:container md:mx-auto">
        <h1 className="text-2xl font-bold mb-4">Your Order</h1>
        <div className="grid grid-cols-5 gap-4">
          {cart.map((item) => (
            <div key={item.id} className="border p-4">
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p>Price:{item.price} TK</p>
              <img
              className="w-20 h-10"
              src={`https://res.awcbd.org/storage/menu/${item.image}`}
              alt="food"
            />
              <div className="flex items-center mt-2">
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="bg-primary text-white px-2 py-1 mr-2"
                >
                  +
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="bg-red-500 text-white px-2 py-1 ml-2"
                >
                  -
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-2 py-1 ml-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <PlaceOrderScreen/>
      </div>
    </>
  );
};

export default OrderPage;




