import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails: React.FC = () => {
  const { id } = useParams();

  // Fetch product data by id (mock data for now)
  const product = {
    id,
    name: "Sample Product",
    description: "Description here",
    price: 29.99,
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="mt-4">{product.description}</p>
      <p className="mt-4 text-xl font-semibold">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductDetails;
