import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Stack, AppBar, Container } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static">
      <Box>
        <Container maxWidth="xl">
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            sx={{
              bgcolor: "black",
              width: "xl",
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
                sx={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  Link: "/landingpage",
                }}
              >
                Log Out
              </Button>
            </Link>
          </Stack>
        </Container>
      </Box>
    </AppBar>
  );
};

export default Header;
