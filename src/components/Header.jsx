import { Stack, Typography, Button } from "@mui/material";
import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
    // Perform API request or other actions based on searchTerm
  };

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
      <Typography>Hello World</Typography>
      <Button variant="contained">Login</Button>
      <Button variant="contained">Sign Up</Button>
      <SearchBar onSearch={handleSearch} />
    </Stack>
  );
};

export default Header;
