import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay CSS
import { Autoplay, Pagination } from "swiper/modules"; // Import Pagination module
import ProductCard from "./ProductCard";
import { Box } from "@mui/material";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = () => {
    fetch("https://dummyjson.com/products?limit=10&skip=10")
      .then((res) => res.json())
      .then((data) => {
        // Map data to match Product type structure
        const fetchedProducts = data.products.map((product: any) => ({
          id: product.id,
          name: product.title,
          price: product.price,
          image: product.thumbnail,
        }));
        setProducts(fetchedProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box className="p-4">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Autoplay, Pagination]} // Add Pagination module
        autoplay={{
          delay: 3000, // Set the delay time (3 seconds in this example)
          disableOnInteraction: false, // Ensures autoplay continues even after user interaction
        }}
        pagination={{
          dynamicBullets: true,
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Box sx={{ mb: 4 }}>
              <ProductCard
                image={product.image}
                name={product.name}
                price={product.price}
                onAddToCart={() => console.log(`Added ${product.name} to cart`)}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ProductList;
