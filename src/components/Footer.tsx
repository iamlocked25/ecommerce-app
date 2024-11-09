// src/components/Footer.tsx
import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn"; // Add more social icons if needed

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#333",
        color: "white",
        py: 3,
        mt: 4,
        textAlign: "center",
      }}
    >
      {/* Copyright Section */}
      <Typography variant="body2">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </Typography>

      {/* Privacy Policy and Terms Links */}
      <Box sx={{ mt: 1 }}>
        <Link href="#" color="inherit" sx={{ mx: 2 }}>
          Privacy Policy
        </Link>
        <Link href="#" color="inherit" sx={{ mx: 2 }}>
          Terms of Service
        </Link>
      </Box>

      {/* Social Media Icons Section */}
      <Box sx={{ mt: 2 }}>
        <IconButton
          color="inherit"
          href="https://www.facebook.com"
          target="_blank"
          sx={{ mx: 1 }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.twitter.com"
          target="_blank"
          sx={{ mx: 1 }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.instagram.com"
          target="_blank"
          sx={{ mx: 1 }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.linkedin.com"
          target="_blank"
          sx={{ mx: 1 }}
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
