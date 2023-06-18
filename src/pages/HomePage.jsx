import React, { useContext, useState } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import Header from "../components/Header";
import HomepageCard from "../components/HomepageCard";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const HomePage = () => {
  const forCreatorsClick = () => {};
  const forViewersClick = () => {};
  return (
    <Box
      sx={{
        backgroundColor: "grey",
      }}
    >
      <Header />
      <Box>
        <Link>
          <Button variant="contained" onClick={forCreatorsClick}>
            <Typography>For Creators</Typography>
          </Button>
        </Link>
        <Link>
          <Button variant="contained" onClick={forViewersClick}>
            <Typography>For Viewers</Typography>
          </Button>
        </Link>
        <Box>
          <Typography fontSize={30} variant="span">
            TOP 10 IN MOVIES | TOP 10 IN SHOWS
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <HomepageCard />
          <HomepageCard />
        </Box>
        <Typography color={"white"} fontSize={30}>
          Coming Soon To A Screen Near You
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Box>
            <Container
              sx={{
                display: "flex",
                m: "16px",
                p: "16px",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <Box
                sx={{
                  m: "16px",
                  p: "16px",
                  width: 300,
                  height: 200,
                  backgroundColor: "primary.main",
                }}
              >
                <Typography>Movie</Typography>
              </Box>
              <Box
                sx={{
                  m: "16px",
                  p: "16px",
                  width: 300,
                  height: 200,
                  backgroundColor: "primary.dark",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                <Typography>Movie</Typography>
              </Box>
              <Box
                sx={{
                  m: "16px",
                  p: "16px",
                  width: 300,
                  height: 200,
                  backgroundColor: "primary.dark",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                <Typography>Movie</Typography>
              </Box>
              <Box
                sx={{
                  m: "16px",
                  p: "16px",
                  width: 300,
                  height: 200,
                  backgroundColor: "primary.dark",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                <Typography>Movie</Typography>
              </Box>
              <Box
                sx={{
                  m: "16px",
                  p: "16px",
                  width: 300,
                  height: 200,
                  backgroundColor: "primary.dark",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                <Typography>Movie</Typography>
              </Box>
              <Box
                sx={{
                  m: "16px",
                  p: "16px",
                  width: 300,
                  height: 200,
                  backgroundColor: "primary.dark",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                <Typography>Movie</Typography>
              </Box>
            </Container>
          </Box>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default HomePage;
