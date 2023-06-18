import { Stack, Typography, Button } from "@mui/material";
import React from "react";
import SearchBar from "./icons/searchbar";
import { Link } from "react-router-dom";

const Header = () => {
  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
    // Perform API request or other actions based on searchTerm
  };

  const handleLoginClick = () => {};

  const handleSignupClick = () => {};

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: {
          sm: "122px",
          xs: "40px",
        },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Typography fontSize={18}>Streaming Site</Typography>
      <Link to="/login" onClick={handleLoginClick}>
        <Button variant="contained">Login</Button>
      </Link>
      <Link to="/signup" onClick={handleSignupClick}>
        <Button variant="contained">Sign Up</Button>
      </Link>
      <SearchBar onSearch={handleSearch} />
    </Stack>
  );
};

export default Header;
