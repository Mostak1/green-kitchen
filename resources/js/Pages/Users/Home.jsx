import React from "react";
import MenuList from "./Menu/MenuList";
import ShowMenu from "./Menu/ShowMenu";
import { CartProvider } from "./Menu/CartContext";
import Navbar from "./Menu/Navbar";

export const Home = () => {
    return (
        <>
            <div className=" justify-center">
                <CartProvider>
                    <Navbar />
                    <MenuList />
                </CartProvider>
                
            </div>
        </>
    );
};
export default Home;
