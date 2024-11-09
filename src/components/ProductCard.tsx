import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  onAddToCart,
}) => (
  <Box className="border p-4 rounded-lg shadow-lg hover:shadow-xl bg-grey-700">
    <img
      src={image}
      alt={name}
      className="w-full h-64 object-cover rounded-md mb-4" // Fixed height and width for the image
    />
    <Typography
      className="text-lg font-semibold"
      sx={{
        display: "block",
        width: "200px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      {name}
    </Typography>
    <Typography className="text-gray-500">${price.toFixed(2)}</Typography>
    <Button
      variant="contained"
      color="primary"
      size="large"
      className="w-full"
      startIcon={<ShoppingCartIcon />}
      onClick={onAddToCart}
      //   className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
    >
      Add to Cart
    </Button>
  </Box>
);

export default ProductCard;
