import React from "react";
import { Container, Grid, Typography, TextField, Button, Box } from "@mui/material";
import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material";
import { company_name } from "@zenra/configs";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "#1a1a1a", color: "#fff", py: 5 }}>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {/* Contact Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              CONTACT
            </Typography>
            <Typography variant="body2">Street: Kaduwela Road, SLIIT</Typography>
            <Typography variant="body2">City: Malambe</Typography>
            <Typography variant="body2">State Full: Western Province</Typography>
            <Typography variant="body2">Zip Code: 21201</Typography>
            <Typography variant="body2">Phone: 443-498-7166</Typography>
            <Typography variant="body2">Mobile: 443-934-9384</Typography>
          </Grid>

          {/* Menu Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              MENU
            </Typography>
            <Typography variant="body2">Home</Typography>
            <Typography variant="body2">About</Typography>
            <Typography variant="body2">Careers</Typography>
            <Typography variant="body2">Our Blog</Typography>
            <Typography variant="body2">Pricing</Typography>
          </Grid>

          {/* Recent Posts Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              RECENT POSTS
            </Typography>
            <Typography variant="body2">Breaking Down Barriers</Typography>
            <Typography variant="body2">A Celebration of Success</Typography>
            <Typography variant="body2">A World of Opportunities</Typography>
          </Grid>

          {/* Newsletter Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
            {company_name}
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Your email address"
                sx={{ bgcolor: "#fff", borderRadius: 1, flexGrow: 1 }}
              />
               <Link to="/login"> <Button
                        variant="contained"
                        className='dark-card-font'
                          color="error" >
                            Login
                            </Button>
                             </Link>
            </Box>

            {/* Social Media Icons */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Facebook sx={{ cursor: "pointer" }} />
              <Twitter sx={{ cursor: "pointer" }} />
              <Instagram sx={{ cursor: "pointer" }} />
              <YouTube sx={{ cursor: "pointer" }} />
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Footer Text */}
        <Box textAlign="center" mt={4}>
          <Typography variant="body2">
            © 2025 Copyright - All rights reserved by{" "}
            <span style={{ textDecoration: "underline", cursor: "pointer", color: "#ed6c02" }}>{company_name}</span>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
