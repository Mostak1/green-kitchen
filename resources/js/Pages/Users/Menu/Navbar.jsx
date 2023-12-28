import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { Link } from "@inertiajs/react";
import { useOrder } from "./OrderProvider";
import CartButton from "./CartButton";
import { useCart } from "./CartContext";
import ApplicationLogo from "@/Components/ApplicationLogo";

const Navbar = () => {
    const bgbanner = "/assets/img/bannerbackground.png";
    const [changeHeader, setChangeHeader] = useState(false);
    // const navigate = useNavigate();
    // const { user, signOutUser } = useAuth();
    // const { order } = useOrder();
    const { cart } = useCart();
    //header change function
    const onChangeHeader = () => {
        if (window.scrollY >= 50) {
            setChangeHeader(true);
        } else {
            setChangeHeader(false);
        }
    };

    //change header by scrolling
    window.addEventListener("scroll", onChangeHeader);

    return (
        <div>
            <header
                className={
                    changeHeader
                        ? "bg-white fixed z-50  top-0 left-0 w-full shadow-md transition duration-500"
                        : "bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500"
                }
            >
                <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3">
                    {/* left  */}
                    <div className="flex flex-grow">
                        <Link href="/">
                            <ApplicationLogo className="w-20 cursor-pointer" />
                        </Link>
                    </div>
                    {/* right  */}
                    <div className="relative flex cursor-pointer mr-3">
                        <span className="bg-primary w-6 h-6 rounded-full flex items-center justify-center text-blue-600 poppins absolute -right-2 -top-2">
                            {cart.length}
                        </span>
                        <BsCart2 className="cursor-pointer w-6 h-6 text-gray-700" />
                    </div>
                </nav>
            </header>
            <div className="items-center max-w-screen-xl mx-auto px-6">
                <img src={bgbanner} alt="Banner" />
            </div>
        </div>
    );
};

export default Navbar;
