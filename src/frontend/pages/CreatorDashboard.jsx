import React from "react";
import { Box, Button, Typography, Divider, Grid } from "@mui/material";
import CreatorHeader from "../components/Headers/CreatorHeader";

const CreatorDashboard = () => {
  const uploadButton = () => {};
  return (
    <>
      <CreatorHeader />
      <Grid container spacing={3}>
        <Box>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Channel Dashboard
          </Typography>
          <Box>
            <Button variant="contained" sx={{ fontWeight: "bold" }}>
              Upload Videos
            </Button>
          </Box>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Channel Analytics
            </Typography>
            <Divider variant="middle" />

            <Typography variant="h4">Current Subscribers</Typography>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default CreatorDashboard;
