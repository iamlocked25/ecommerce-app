import React from "react";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import CategoriesList from "../components/CategoriesList";
import { Box, Button, Typography } from "@mui/material";
import Footer from "../components/Footer"; // Import Footer

const Home: React.FC = () => {
  return (
    <Box>
      <Navbar />
      <section className="w-full h-[500px] bg-gray-800 flex items-center justify-center">
        <Box className="container mx-auto flex flex-col lg:flex-row items-center justify-between p-8 text-white">
          {/* Text Section */}
          <Box className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <Typography variant="h4" className="text-4xl font-bold mb-4">
              Shop the Best Deals Online
            </Typography>
            <p className="mb-6 text-lg">
              Discover a wide range of products at unbeatable prices. Shop now
              and experience top-quality items delivered straight to your door.
            </p>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className="bg-grey-500 text-white py-2 px-4 rounded-lg hover:bg-grey-600"
            >
              Start Shopping
            </Button>
          </Box>

          {/* Image/Illustration Section */}
          <Box className="lg:w-1/2 xl:w-1/3 2xl:w-1/4 flex justify-center lg:justify-end">
            <img
              src="https://imgs.search.brave.com/d1HdsMoP00fxm5KEusMl-noGZKf3eUVLsw3J3_KyT90/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGFp/ZC5haS9zdGF0aWMv/OGEwYjY2ZjlkNzVi/YTY3ZGY5ZWMwZjE0/NDFmNmQ2ZDIvZDQ5/MmUvYmlnLWltYWdl/LWJhY2tncm91bmQt/bW9iaWxlLnBuZw"
              alt="Shopping illustration"
              className="w-80 h-80 object-cover rounded-lg"
            />
          </Box>
        </Box>
      </section>
      {/* Products Section */}
      <main className="container mx-auto p-4">
        <Typography variant="h5" fontWeight="500" gutterBottom>
          Shop by Products
        </Typography>
        <ProductList />
      </main>
      {/* Categories Section */}
      <main className="container mx-auto p-4">
        <Typography variant="h5" fontWeight="500" gutterBottom>
          Shop by Categories
        </Typography>
        <CategoriesList />
      </main>
      {/* Footer Section */}
      <Footer /> {/* Add Footer component here */}
    </Box>
  );
};

export default Home;
