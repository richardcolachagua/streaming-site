import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Stack } from "@mui/material";

const Header = () => {
  return (
    <Box>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        sx={{
          bgcolor: "beige",
          width: 700,
          marginBottom: "25px",
        }}
      >
        <Button variant="contained">Movies</Button>
        <Button>Shows</Button>
        <Button>New & Popular</Button>
        <Button>Log Out</Button>
      </Stack>
    </Box>
  );
};

export default Header;
