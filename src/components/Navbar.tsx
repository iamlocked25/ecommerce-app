// Navbar.tsx
import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const Navbar: React.FC = () => {
  const { cartCount } = useCart(); // Use cartCount here

  return (
    <AppBar position="static" className="bg-gray-800 text-white">
      <Toolbar className="container mx-auto flex justify-between">
        <Typography variant="h6" component="div" className="font-bold text-lg">
          <Link to="/">eCommerce Store</Link>
        </Typography>
        <IconButton color="inherit" component={Link} to="/cart">
          <Badge badgeContent={cartCount} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
