import { Box, Typography, Stack } from "@mui/material";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Headers/Header";
import TvShowBanner from "../../components/Banners/TvShowBanner";
import Comments from "../../components/Reviews/Comments";
import RatingsComponent from "../../components/Reviews/RatingComponent";

const Shows = () => {
  return (
    <>
      <Header />
      <Box>
        <TvShowBanner />
        <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "left" }}>
          Continue Watching for ____
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          marginBottom="48px"
        >
          <Box
            sx={{
              width: 800,
              height: 150,
              backgroundColor: "#FF1F33",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            content here
          </Box>
          <Box
            sx={{
              width: 800,
              height: 150,
              backgroundColor: "#FF1F33",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            content here
          </Box>
          <Box
            sx={{
              width: 700,
              height: 150,
              backgroundColor: "#FF1F33",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            content here
          </Box>
          <Box
            sx={{
              width: 700,
              height: 150,
              backgroundColor: "#FF1F33",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            content here
          </Box>
        </Stack>
        <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "left" }}>
          Top 10 in Shows Today
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          marginBottom="40px"
        >
          <Box
            sx={{
              width: 700,
              height: 150,
              backgroundColor: "#FF1F33",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            content here
          </Box>
          <Box
            sx={{
              width: 700,
              height: 150,
              backgroundColor: "#FF1F33",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            content here
          </Box>
          <Box
            sx={{
              width: 700,
              height: 150,
              backgroundColor: "#FF1F33",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            content here
          </Box>{" "}
          <Box
            sx={{
              width: 700,
              height: 150,
              backgroundColor: "#FF1F33",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            content here
          </Box>
          <Box
            sx={{
              width: 700,
              height: 150,
              backgroundColor: "#FF1F33",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            content here
          </Box>
          <Box
            sx={{
              width: 700,
              height: 150,
              backgroundColor: "#FF1F33",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            content here
          </Box>
        </Stack>
        <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "left" }}>
          Coming Soon
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          marginBottom="40px"
        >
          <Box
            sx={{
              width: 700,
              height: 150,
              backgroundColor: "#FF1F33",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            content here
          </Box>
          <Box
            sx={{
              width: 700,
              height: 150,
              backgroundColor: "#FF1F33",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            content here
          </Box>
          <Box
            sx={{
              width: 700,
              height: 150,
              backgroundColor: "#FF1F33",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            content here
          </Box>
        </Stack>
        <Comments />
        <RatingsComponent />
        <Footer />
      </Box>
    </>
  );
};

export default Shows;
