import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import theme from "./theme";
import ProductDetails from "./pages/ProductDetails";
import { ThemeProvider } from "@emotion/react";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;
