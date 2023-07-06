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

  const handleUnfollow = (id) => {
    setFollowers(followers.filter((follower) => follower.id !== id));
  };
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Following ({followers.length})
      </Typography>
      <Grid container spacing={2}>
        {followers.map((follower) => (
          <Grid item xs={6} sm={4} md={2} key={follower.id}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                src={follower.avatar}
                alt={follower.name}
                sx={{ width: 100, height: 100, marginBottom: 1 }}
              />
              <Typography variant="subtitle1">{follower.name}</Typography>
              <Button
                variant="outlined"
                onClick={() => handleUnfollow(follower.id)}
              >
                Unfollow
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Following;
