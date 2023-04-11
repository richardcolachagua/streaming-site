import React, { useContext, useState } from "react";
import { Box, Typography, Stackbox } from "@mui/material";
import Header from "../components/Header";

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
      <Box></Box>
    </Box>
  );
};

export default HomePage;
