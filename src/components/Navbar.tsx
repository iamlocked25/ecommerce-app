import React from 'react';

const Navbar: React.FC = () => (
  <nav className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between">
      <h1 className="text-lg font-bold">eCommerce Store</h1>
      <div className="flex items-center">
        <span>Cart (0)</span>
      </div>
    </div>
  </nav>
);

export default Navbar;
