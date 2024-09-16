import React from "react";

const CartItem = ({ item }) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded mb-3">
      <div>
        <p className="text-lg font-semibold">{item.name}</p>
        <p className="text-sm text-gray-600">Price: ${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-2">
        {/* Decrease button */}
        <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
          -
        </button>

        {/* Quantity */}
        <p className="text-lg">{item.quantity}</p>

        {/* Increase button */}
        <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
