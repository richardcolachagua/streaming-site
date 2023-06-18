import React, { useState } from "react";
import { Box, Typography, List, ListItemText, Link } from "@mui/material";

const Footer = () => {
  const [selected, setSelected] = useState("");

  return (
    <Box sx={{ p: 3, mt: 4, backgroundColor: "black" }}>
      <Box
        sx={{
          display: "flex",
          m: "16px",
          p: "16px",
          flexWrap: "wrap",
          gap: "50px",
        }}
      >
        <List align="left">
          <Typography variant="h6" color="white" align="left">
            Site Navigation
          </Typography>
          <ListItemText sx={{ color: "white" }} primary="Home" />
          <Link to="/shows">
            <ListItemText
              sx={{ color: "white" }}
              selected={selected}
              setSelected={setSelected}
              primary="Shows"
            />
          </Link>

          <ListItemText sx={{ color: "white" }} primary="Movies" />
          <ListItemText sx={{ color: "white" }} primary="Brands" />
          <ListItemText sx={{ color: "white" }} primary="News" />
        </List>
        <List align="left">
          <Typography variant="h6" color="white" align="left">
            Privacy & Terms
          </Typography>
          <ListItemText
            sx={{ color: "white" }}
            to="/Subscription Terms"
            primary="Subscription Terms"
          />
          <ListItemText sx={{ color: "white" }} primary="Terms of Use" />
          <ListItemText sx={{ color: "white" }} primary="Privacy Policy" />
          <ListItemText
            sx={{ color: "white" }}
            primary="Do Not Sell My Personal Information"
          />
        </List>
        <List align="left">
          <Typography variant="h6" color="white" align="left">
            Information
          </Typography>
          <ListItemText sx={{ color: "white" }} primary="Help/Contact Us" />
          <ListItemText sx={{ color: "white" }} primary="Closed Captioning" />
          <ListItemText sx={{ color: "white" }} primary="Careers" />
          <ListItemText sx={{ color: "white" }} primary="About Streaming" />
        </List>
      </Box>
    </Box>
  );
};

export default Footer;
