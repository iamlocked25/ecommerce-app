import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import theme from "./theme";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart"; // Import Cart page
import { ThemeProvider } from "@emotion/react";
import { CartProvider } from "./components/CartContext"; // Import CartProvider
import CategoryPage from "./pages/CategoryPage";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
        </Routes>
      </Router>
    </CartProvider>
  </ThemeProvider>
);

export default App;
