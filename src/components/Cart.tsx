import React, { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => {
  // Sample cart items (you may replace this with dynamic cart data later)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: 'Product 1', price: 29.99, quantity: 1 },
    { id: 2, name: 'Product 2', price: 19.99, quantity: 2 },
  ]);

  // Calculate total price of items in the cart
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Remove an item from the cart
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4 p-4 border rounded-lg">
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right mt-4">
            <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
          </div>
          <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
