import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Divider, Grid } from "@mui/material";
import Header from "../components/Headers/Header";

const fetchChannelAnalytics = () => {
  const analyticsData = {
    followers: 1000,
    following: 500,
  };
  return analyticsData;
};

const CreatorDashboard = () => {
  const [followersCount, setFollowersCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);

  useEffect(() => {
    const analyticsData = fetchChannelAnalytics();
    setFollowersCount(analyticsData.followers);
    setFollowingCount(analyticsData.following);
  }, []);

  return (
    <>
      <Header />
      <Grid>
        <Box
          sx={{
            width: 300,
            height: 100,
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
            Creator Dashboard
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
          <Typography>Upload Your Project Here</Typography>
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
          <Typography variant="h6">Followers: {followersCount}</Typography>

          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Summary
          </Typography>
          <Typography variant="h6">Following: {followingCount}</Typography>
        </Box>
      </Grid>
    </>
  );
};

export default CreatorDashboard;
