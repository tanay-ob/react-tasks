import React, { useState } from "react";
import CartItem from "./CartItem"; // Child component

const ShoppingCart = () => {
  // Initial state for cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Item 1", price: 10, quantity: 1 },
    { id: 2, name: "Item 2", price: 20, quantity: 1 },
    { id: 3, name: "Item 3", price: 30, quantity: 1 },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Shopping Cart</h1>

        {/* Cart Items */}
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}

        {/* Total Price */}
        <div className="text-right mt-4">
          <p className="text-xl font-bold">Total: $60</p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
