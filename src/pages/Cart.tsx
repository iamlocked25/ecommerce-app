// src/pages/Cart.tsx
import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import { useCart } from "../components/CartContext";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Empty cart icon
import Navbar from "../components/Navbar"; // Import Navbar

const Cart: React.FC = () => {
  const { cartItems, addToCart, removeFromCart } = useCart(); // Access addToCart and removeFromCart from context

  const handleIncreaseQuantity = (itemId: number) => {
    console.log("Increasing quantity for item with ID:", itemId); // Log itemId
    const item = cartItems.find((item) => item.id === itemId);
    if (item) {
      addToCart({ ...item, quantity: 1 }); // Increase by 1 using the existing item
    }
  };

  const handleDecreaseQuantity = (itemId: number) => {
    console.log("Decreasing quantity for item with ID:", itemId); // Log itemId
    const item = cartItems.find((item) => item.id === itemId);
    if (item && item.quantity > 1) {
      addToCart({ ...item, quantity: -1 }); // Decrease by 1 if quantity is greater than 1
    }
  };

  const handleRemoveItem = (itemId: number) => {
    console.log("Removing item with ID:", itemId); // Log itemId to be removed
    removeFromCart(itemId); // Remove item from cart
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const shippingCost = 10; // Example shipping cost
  const taxRate = 0.1; // 10% tax rate
  const totalAmount = calculateTotal();
  const taxAmount = totalAmount * taxRate;
  const finalAmount = totalAmount + shippingCost + taxAmount;

  return (
    <Box>
      <Navbar />
      <Box className="container mx-auto p-4">
        <Typography variant="h4" gutterBottom>
          Cart
        </Typography>
        {cartItems.length > 0 ? (
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            gap={4}
          >
            <Box flex={1}>
              <List>
                {cartItems.map((item) => (
                  <ListItem
                    key={item.id}
                    className="border-b py-4 border-b shadow-md rounded-lg"
                  >
                    <Box className="flex items-center gap-4 px-4 border-b shadow-md rounded-lg">
                      {/* Product Image */}
                      <Box className="flex-shrink-0 w-32 h-32">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </Box>

                      {/* Product Details */}
                      <Box className="flex-1">
                        <ListItemText
                          primary={item.name}
                          secondary={`$${item.price.toFixed(2)} x ${
                            item.quantity
                          }`}
                        />
                      </Box>

                      {/* Quantity Controls */}
                      <Box className="flex items-center gap-2">
                        <IconButton
                          onClick={() => handleDecreaseQuantity(item.id)}
                          color="primary"
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography>{item.quantity}</Typography>
                        <IconButton
                          onClick={() => handleIncreaseQuantity(item.id)}
                          color="primary"
                        >
                          <AddIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => handleRemoveItem(item.id)}
                          color="error"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* Billing Summary */}
            <Box className="w-full md:w-2/5 p-6 rounded-lg shadow-lg flex flex-col justify-between h-full">
              <Typography variant="h6" className="mb-4">
                Billing Details
              </Typography>
              <Divider className="my-2" />

              <Typography variant="body1" className="mb-4">
                <strong>Subtotal:</strong> ${totalAmount.toFixed(2)}
              </Typography>

              <Typography variant="body1" className="mb-4">
                <strong>Shipping:</strong> ${shippingCost.toFixed(2)}
              </Typography>

              <Typography variant="body1" className="mb-4">
                <strong>Tax (10%):</strong> ${taxAmount.toFixed(2)}
              </Typography>

              <Divider className="my-2" />

              <Typography variant="h6" className="mb-6">
                <strong>Total:</strong> ${finalAmount.toFixed(2)}
              </Typography>

              <Button
                variant="contained"
                color="primary"
                className="mt-auto w-full"
              >
                Proceed to Checkout
              </Button>
            </Box>
          </Box>
        ) : (
          <Box className="flex flex-col items-center justify-center min-h-[600px]">
            <ShoppingCartIcon sx={{ fontSize: 100, color: "#ccc" }} />
            <Typography variant="h6" className="mt-2">
              Your cart is empty.
            </Typography>
            <Typography variant="body1" className="text-gray-600">
              Add items to your cart to proceed.
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Cart;
