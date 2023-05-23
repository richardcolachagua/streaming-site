import React, { useContext, useState } from "react";
import { Box, Typography, Stackbox, Button, Card } from "@mui/material";
import Header from "../components/Header";
import HomepageCard from "../components/HomepageCard";

const HomePage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
        },
      }}
    >
      <Header />
      <Box>
        <Button variant="contained" onClick={""}>
          <Typography>For Creators</Typography>
        </Button>
        <Button variant="contained" onClick={""}>
          <Typography>For Viewers</Typography>
        </Button>
        <Typography fontWeight={500} variant="span">
          TOP 10 IN MOVIES | TOP 10 IN SHOWS
        </Typography>
        <Box sx={{ display: "flex" }}>
          <HomepageCard />
          <HomepageCard />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
