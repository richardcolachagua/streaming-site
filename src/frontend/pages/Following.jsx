import React, { useState } from "react";
import { Box, Grid, Typography, Avatar, Button } from "@mui/material";
import SearchBar from "../components/icons/searchbar";

const Following = () => {
  const [followers, setFollowers] = useState([
    { id: 1, name: "John Doe", avatar: "https://picsum.photos/200" },
    { id: 2, name: "Jane Doe", avatar: "https://picsum.photos/200" },
    { id: 3, name: "Bob Smith", avatar: "https://picsum.photos/200" },
    { id: 4, name: "Alice Johnson", avatar: "https://picsum.photos/200" },
    { id: 5, name: "Tom Jones", avatar: "https://picsum.photos/200" },
    { id: 6, name: "Samantha Lee", avatar: "https://picsum.photos/200" },
    { id: 7, name: "Mike Brown", avatar: "https://picsum.photos/200" },
    { id: 8, name: "Emily Davis", avatar: "https://picsum.photos/200" },
    { id: 9, name: "David Kim", avatar: "https://picsum.photos/200" },
    { id: 10, name: "Karen Lee", avatar: "https://picsum.photos/200" },
  ]);

  const handleUnfollow = (id) => {};
  return (
    <Grid container>
      <SearchBar />
      <Box textAlign="left">
        <Typography variant="h2">Following</Typography>
      </Box>
      <Box></Box>
    </Grid>
  );
};

export default Following;
