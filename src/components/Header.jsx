import { Stack, Typography, Button } from "@mui/material";
import React from "react";

const Header = () => {
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
    </Stack>
  );
};

export default Header;
