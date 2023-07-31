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
        <Link to="/movies">
          <Button
            variant="text"
            sx={{ fontWeight: "bold", fontSize: "16px", Link: "/movies" }}
          >
            Movies
          </Button>
        </Link>

        <Link to="/shows">
          <Button
            variant="text"
            sx={{ fontWeight: "bold", fontSize: "16px", Link: "/shows" }}
          >
            Shows
          </Button>
        </Link>

        <Link to="/newandpopular">
          <Button
            variant="text"
            sx={{
              fontWeight: "bold",
              fontSize: "16px",
              Link: "/newandpopular",
            }}
          >
            New & Popular
          </Button>
        </Link>

        <Link to="/landingpage">
          <Button
            variant="contained"
            sx={{ fontWeight: "bold", fontSize: "16px", Link: "/landingpage" }}
          >
            Log Out
          </Button>
        </Link>
      </Stack>
    </Box>
  );
};

export default Header;
