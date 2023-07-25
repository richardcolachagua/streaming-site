import React from "react";
import { Box, Button, Typography, Divider, Grid } from "@mui/material";
import CreatorHeader from "../components/Headers/CreatorHeader";

const CreatorDashboard = () => {
  const uploadButton = () => {};
  return (
    <>
      <CreatorHeader />
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
          marginLeft: "50px",
          marginBottom: "50px",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Channel Dashboard
        </Typography>
      </Box>

      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "primary.dark",
          marginLeft: "500px",
          marginBottom: "50px",
        }}
      >
        <Button variant="contained" sx={{ fontWeight: "bold" }}>
          Upload Videos
        </Button>
      </Box>
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "primary.dark",
          marginLeft: "400px",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Channel Analytics
        </Typography>
        <Divider variant="middle" />

        <Typography variant="h4">Current Subscribers</Typography>
      </Box>
    </>
  );
};

export default CreatorDashboard;
