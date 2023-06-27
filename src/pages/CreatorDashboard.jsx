import React from "react";
import { Box, Button, Typography, Divider, Grid } from "@mui/material";

const CreatorDashboard = () => {
  const uploadButton = () => {};
  return (
    <Grid container spacing={3}>
      <Box>
        <Typography variant="h1">Channel Dashboard</Typography>
        <Box>
          <Button variant="contained">Upload Videos</Button>
        </Box>
        <Box>
          <Typography variant="h2">Channel Analytics</Typography>
          <Divider variant="middle" />

          <Typography variant="h3">Current Subscribers</Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default CreatorDashboard;
