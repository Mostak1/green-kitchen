import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import FoodItem from './FoodItem';
import Skeleton from './Skeleton';

const Foods = () => {
    const [menuTab, setMenuTab] = useState('Bowl')
    const [loading, setLoading] = useState(false)
    const [foods] = useFetch();
console.log(foods)
    //loading 
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    //food menu tab 
    const handleMenuTabs = (type) => {
        setMenuTab(type)
    }

    return (
        <section className="my-12 max-w-screen-xl mx-auto px-6">
            {/* food Menu tab  */}
            <div className="flex items-center justify-center space-x-6">
                <p className={menuTab === 'Bowl' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Bowl')}>Bowl</p>
                <p className={menuTab === 'Juice' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Juice')}>Juice</p>
                <p className={menuTab === 'Snack' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Snack')}>Snack</p>
                <p className={menuTab === 'Drinks' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Drinks')}>Drinks</p>
            </div>

            {/* all foods  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                {foods.filter((item) => menuTab === item.category.name).map(item => (
                    loading ? <Skeleton key={item.id} /> : <FoodItem key={item.id} {...item} />
                ))}
            </div>
        </section>
    )
}

export default Foods