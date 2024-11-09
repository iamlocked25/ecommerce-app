import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import navigation CSS
import { Pagination, Navigation } from "swiper/modules"; // Correct import for Swiper modules
import { Box } from "@mui/material";
import CategoryCard from "./CategoryCard";

interface Category {
  slug: string;
  name: string;
  image: string;
}

const CategoriesList: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const getCategory = () => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        // Map data to match category type structure
        const fetchedCategory = data.map((category: any) => ({
          slug: category.slug,
          name: category.title,
          image: category.image,
        }));
        setCategories(fetchedCategory);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  };

  useEffect(() => {
    getCategory();
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
        modules={[Pagination, Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {categories.map((category, categoryIndex) => (
          <SwiperSlide key={`categories-${categoryIndex}`}>
            <Box sx={{ mb: 4 }}>
              <CategoryCard
                image={category.image}
                name={category.name}
                slug={category.slug}
                viewCategory={() =>
                  console.log(`Added ${category.name} to cart`)
                }
              />
            </Box>
          </SwiperSlide>
        ))}
        <div
          className="swiper-button-next text-gray-500"
          style={{ right: "10px" }}
        ></div>
        <div
          className="swiper-button-prev text-gray-500"
          style={{ left: "10px" }}
        ></div>
      </Swiper>
    </Box>
  );
};

export default CategoriesList;
