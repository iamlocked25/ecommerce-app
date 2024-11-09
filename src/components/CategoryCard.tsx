import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { VisibilityOutlined } from "@mui/icons-material";
import CategorySharpIcon from "@mui/icons-material/CategorySharp";

interface CategoryCardProps {
  slug: string;
  image?: string; // Optional image
  name: string;
  viewCategory: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  image,
  name,
  slug,
  viewCategory,
}) => {
  return (
    <Box className="border p-4 rounded-lg shadow-lg hover:shadow-xl bg-grey-700">
      {/* Image or fallback icon */}
      <Box className="w-full h-64 mb-4 flex items-center justify-center bg-gray-300">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-md"
          />
        ) : (
          <CategorySharpIcon sx={{ fontSize: 50, color: "#ccc" }} />
        )}
      </Box>

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
        {name || slug}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className="w-full mt-4"
        endIcon={<VisibilityOutlined />}
        onClick={viewCategory}
      >
        View Category
      </Button>
    </Box>
  );
};

export default CategoryCard;
