import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuCard from "./MenuCard";

export const ShowMenu = () => {
    const [menus, setMenus] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://res.awcbd.org/api/menus"
                );
                setMenus(response.data.menus);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const filterMenusByCategory = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-center space-x-4">
                {menus.map((menu) => (
                    <button
                        key={menu.category.id}
                        onClick={() => filterMenusByCategory(menu.category.id)}
                        className={`px-4 py-2 ${
                            selectedCategory === menu.category.id
                                ? "bg-blue-500 text-white"
                                : "bg-gray-300"
                        } rounded`}
                    >
                        {menu.category.name}
                    </button>
                ))}
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {menus
                    .filter(
                        (menu) =>
                            selectedCategory === null ||
                            menu.category.id === selectedCategory
                    )
                    .map((menu) => (
                        <MenuCard key={menu.id} menu={menu} />
                    ))}
            </div>
        </div>
    );
};

export default ShowMenu;
