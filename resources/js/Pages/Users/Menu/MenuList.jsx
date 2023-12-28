import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import swal from "sweetalert";
function MenuList() {
    const [menus, setMenus] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null); // Add this line

    useEffect(() => {
        fetch("https://res.awcbd.org/api/menus")
            .then((response) => response.json())
            .then((data) => {
                setMenus(data.menus);
                console.log(data.menus);
                const uniqueCategories = [
                    ...new Set(data.menus.map((menu) => menu.category.name)),
                ];
                setCategories(uniqueCategories);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <>
            <section className="my-12 max-w-screen-xl mx-auto px-6">
                {/* food Menu tab  */}

                <TopMenu
                    categories={categories}
                    onCategoryClick={setSelectedCategory}
                />
                {/* all foods  */}
                <SubMenu menus={menus} selectedCategory={selectedCategory} />
            </section>
        </>
    );
}

const TopMenu = ({ categories, onCategoryClick }) => {
    const [changeHeader, setChangeHeader] = useState(false);

    const onChangeHeader = () => {
        if (window.scrollY >= 200) {
            setChangeHeader(true);
        } else {
            setChangeHeader(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", onChangeHeader);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", onChangeHeader);
        };
    }, []); // Empty dependency array to run the effect only once on mount and clean up on unmount

    return (
        <div>
            <div
                className={
                    changeHeader
                        ? "bg-white fixed z-50 top-20 left-0 w-full py-5 shadow-md transition duration-500"
                        : "bg-transparent  w-full transition duration-500"
                }
            >
                <div className="flex items-center justify-center">
                    <div className="carousel-container flex overflow-x-auto">
                        {categories.map((category) => (
                            <div
                                className="carousel-item bg-gray-300 p-4 me-2 rounded-lg"
                                key={category}
                                onClick={() => onCategoryClick(category)}
                            >
                                {category}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

function SubMenu({ menus, selectedCategory }) {
    // State to track selected category
    const { cart, addToCart } = useCart();

    const handleOrderNowClick = (menu) => {
        addToCart(menu);
        swal("Food Added To Cart");
    };

    // Filter menus based on selected category
    const filteredMenus = selectedCategory
        ? menus.filter((menu) => menu.category.name === selectedCategory)
        : menus.filter((menu) => menu.category.id === 1);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-10 mt-12">
                {filteredMenus.map((menu) => (
                    <div
                        key={menu.id}
                        className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative grid grid-cols-2 md:grid-cols-2"
                    >
                        {/* Left Section (Image) */}
                        <div className="text-center justify-center">
                            <img
                                className="md:w-full md:h-60 object-cover rounded-full h-26 w-26 bg-blue-500 md:rounded-l-lg"
                                src={`https://res.awcbd.org/storage/menu/${menu.image}`}
                                alt="food"
                            />
                        </div>

                        {/* Right Section (Text Information) */}
                        <div className=" flex flex-col items-center my-3 space-y-2">
                            <span className="bg-blue-100 border border-blue-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4">
                                {menu.category.name}
                            </span>
                            <h1 className="text-gray-900 poppins text-lg">
                                {menu.name}
                            </h1>
                            <p className="text-gray-500 poppins text-sm text-center">
                                {menu.details.slice(0, 50)}
                            </p>
                            <h2 className="text-gray-900 poppins text-2xl font-bold">
                                {menu.price} TK
                            </h2>

                            {cart.some((i) => i.id === menu.id) ? (
                                "Already In Cart"
                            ) : (
                                <button
                                    className="bg-blue-500 text-white px-8 py-2 focus:outline-none poppins rounded-full mt-4 transform transition duration-300 hover:scale-105"
                                    onClick={() => handleOrderNowClick(menu)}
                                >
                                    Add To Cart
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MenuList;
