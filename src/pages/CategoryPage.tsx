import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  CircularProgress,
} from "@mui/material";
import Navbar from "../components/Navbar";

const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>(); // Access the category slug from the URL

  const [categoryData, setCategoryData] = useState<any>(null);
  const [products, setProducts] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState(false); // Modal state
  const [selectedProduct, setSelectedProduct] = useState<any>(null); // Product data for modal
  const [isLoading, setIsLoading] = useState(true); // Loading state for category data
  const [modalLoading, setModalLoading] = useState(false); // Loading state for modal content

  const getCategoryData = () => {
    setIsLoading(true); // Set loading to true when starting the fetch
    fetch(`https://dummyjson.com/products/category/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryData(data);
        setProducts(data.products); // Assuming the products are in a 'products' array
        setIsLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching category data:", error);
        setIsLoading(false); // Set loading to false in case of error
      });
  };

  const handleOpenModal = (product: any) => {
    setModalLoading(true); // Set modal loading state to true when opening modal
    setSelectedProduct(product);
    setOpenModal(true); // Open modal when product is clicked

    // Simulating data loading delay for modal content (e.g., fetching more details)
    setTimeout(() => {
      setModalLoading(false); // Set modal loading state to false after a delay (simulating async data load)
    }, 1000);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProduct(null); // Clear selected product when modal is closed
  };

  useEffect(() => {
    getCategoryData();
  }, [slug]);

  return (
    <Box>
      <Navbar />
      <Box className="container mx-auto p-6">
        {isLoading ? (
          <Box className="flex justify-center items-center h-64">
            <CircularProgress />
          </Box>
        ) : categoryData ? (
          <>
            <Typography variant="h4" gutterBottom>
              {categoryData.name}
            </Typography>

            <Typography variant="body1" paragraph>
              {categoryData.description}
            </Typography>

            <Grid container spacing={4}>
              {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <Card className="shadow-lg">
                    <CardMedia
                      component="img"
                      height="200"
                      image={product.thumbnail}
                      alt={product.title}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {product.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {product.description || "No description available"}
                      </Typography>
                      <Typography variant="h6" color="primary" className="mt-2">
                        ${product.price}
                      </Typography>
                      <Button
                        variant="contained"
                        color="primary"
                        className="mt-2"
                        onClick={() => handleOpenModal(product)} // Open modal on button click
                      >
                        View Product
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Product Modal */}
            <Dialog open={openModal} onClose={handleCloseModal}>
              <DialogTitle>{selectedProduct?.title}</DialogTitle>
              <DialogContent>
                <Box className="flex flex-col items-center">
                  {modalLoading ? (
                    // Loader inside modal
                    <Box className="flex justify-center items-center h-48">
                      <CircularProgress />
                    </Box>
                  ) : (
                    <>
                      <CardMedia
                        component="img"
                        height="300"
                        image={selectedProduct?.images[0]} // Display the first product image
                        alt={selectedProduct?.title}
                        className="mb-4"
                      />
                      <Typography variant="h6">
                        Price: ${selectedProduct?.price}
                      </Typography>
                      <Typography variant="body1" paragraph className="mt-2">
                        {selectedProduct?.description}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        <strong>Brand:</strong> {selectedProduct?.brand}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        className="mt-2"
                      >
                        <strong>Rating:</strong> {selectedProduct?.rating} ⭐
                      </Typography>
                    </>
                  )}
                </Box>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={handleCloseModal}
                  variant="contained"
                  color="primary"
                >
                  Close
                </Button>
                {/* <Button
                component={Link}
                to={`/product/${selectedProduct?.id}`}
                color="primary"
              >
                View Details
              </Button> */}
              </DialogActions>
            </Dialog>
          </>
        ) : (
          <Typography variant="h6" className="text-center mt-6">
            No data available.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default CategoryPage;
