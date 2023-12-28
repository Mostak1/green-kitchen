// MenuCard.js
import React from 'react';

const MenuCard = ({ menu }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={`https://res.awcbd.org/storage/menu/${menu.image}`} alt={menu.name} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{menu.category.name}</div>
          <p className="mt-2 text-gray-500">{menu.details}</p>
          <div className="mt-4">
            <span className="text-gray-500">Price: ${menu.price}</span>
            <span className="ml-4 text-gray-500">Quantity: {menu.quantity}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
