import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Divider, Grid } from "@mui/material";
import Header from "../components/Headers/Header";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import CreatorSideBar from "./CreatorSideBar";

const fetchChannelAnalytics = () => {
  const analyticsData = {
    followers: 1000,
    following: 500,
    analytics: [
      { month: "Jan", views: 5000 },
      { month: "Feb", views: 6000 },
      { month: "Mar", views: 8000 },
      // Add more data for each month
    ],
  };
  return analyticsData;
};

const CreatorDashboard = () => {
  const [followersCount, setFollowersCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const [analyticsData, setAnalyticsData] = useState([]);

  useEffect(() => {
    const data = fetchChannelAnalytics();
    setFollowersCount(analyticsData.followers);
    setFollowingCount(analyticsData.following);
    setAnalyticsData(data.analytics);
  }, []);

  return (
    <>
      <Header />
      <CreatorSideBar />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box
            sx={{
              width: 300,
              height: 100,
              backgroundColor: "primary.dark",
              "&:hover": {},
              marginLeft: "50px",
              marginBottom: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Creator Dashboard
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              height: 300,
              backgroundColor: "primary.dark",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: "16px" }}
            >
              Upload Your Project Here
            </Typography>
            <Button variant="contained" sx={{ fontWeight: "bold" }}>
              Upload Videos
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={8}>
          <Box
            sx={{
              height: 300,
              backgroundColor: "primary.dark",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Channel Analytics
            </Typography>
            <Divider variant="middle" sx={{ marginBottom: "16px" }} />

            <Typography variant="h6" sx={{ marginBottom: "8px" }}>
              Current Subscribers
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", marginBottom: "16px" }}
            >
              Followers: {followersCount}
            </Typography>

            <Typography variant="h6" sx={{ marginBottom: "8px" }}>
              Summary
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", marginBottom: "16px" }}
            >
              Following: {followingCount}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              height: 400,
              backgroundColor: "primary.dark",
              padding: "24px",
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", marginBottom: "14px" }}
            >
              Monthly Analytics
            </Typography>
            <LineChart width={800} height={300} data={analyticsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="views" stroke="#8884d8" />
            </LineChart>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default CreatorDashboard;
