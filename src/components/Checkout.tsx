import React, { useState } from 'react';

const Checkout: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  // Replace this with actual total cost from cart
  const totalCost = 79.97; 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your checkout submission logic here (e.g., process payment, save order)
    alert('Order placed successfully!');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Billing Information */}
        <div className="p-4 border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Billing Information</h3>

          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg mb-4"
            required
          />

          <label className="block mb-2">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg mb-4"
            required
          />

          <label className="block mb-2">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg mb-4"
            required
          />

          <label className="block mb-2">ZIP Code</label>
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg mb-4"
            required
          />
        </div>

        {/* Payment Information */}
        <div className="p-4 border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Payment Information</h3>

          <label className="block mb-2">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg mb-4"
            required
          />

          <label className="block mb-2">Expiration Date</label>
          <input
            type="text"
            name="expirationDate"
            placeholder="MM/YY"
            value={formData.expirationDate}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg mb-4"
            required
          />

          <label className="block mb-2">CVV</label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-lg mb-4"
            required
          />
        </div>
      </form>

      {/* Order Summary */}
      <div className="p-4 border rounded-lg mt-6">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        <p>Total Cost: ${totalCost.toFixed(2)}</p>
        <button
          type="submit"
          className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
          onClick={handleSubmit}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
