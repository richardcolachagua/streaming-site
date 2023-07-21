import React, { useState } from "react";
import { Box, Grid, Typography, Avatar, Button } from "@mui/material";

const Following = () => {
  const [selectedOption, setSelectedOption] = useState("Following");

  const [following, setFollowing] = useState([
    { id: 14, name: "John Doe", avatar: "https://picsum.photos/200" },
    { id: 32, name: "Jane Doe", avatar: "https://picsum.photos/200" },
    { id: 43, name: "Bob Smith", avatar: "https://picsum.photos/200" },
    { id: 46, name: "Alice Johnson", avatar: "https://picsum.photos/200" },
    { id: 55, name: "Tom Jones", avatar: "https://picsum.photos/200" },
    { id: 63, name: "Samantha Lee", avatar: "https://picsum.photos/200" },
    { id: 73, name: "Mike Brown", avatar: "https://picsum.photos/200" },
    { id: 85, name: "Emily Davis", avatar: "https://picsum.photos/200" },
    { id: 97, name: "David Kim", avatar: "https://picsum.photos/200" },
    { id: 103, name: "Karen Lee", avatar: "https://picsum.photos/200" },
    { id: 422, name: "Alice Johnson", avatar: "https://picsum.photos/200" },
    { id: 567, name: "Tom Jones", avatar: "https://picsum.photos/200" },
    { id: 6345, name: "Samantha Lee", avatar: "https://picsum.photos/200" },
    { id: 735, name: "Mike Brown", avatar: "https://picsum.photos/200" },
    { id: 864, name: "Emily Davis", avatar: "https://picsum.photos/200" },
    { id: 935, name: "David Kim", avatar: "https://picsum.photos/200" },
    { id: 1460, name: "Karen Lee", avatar: "https://picsum.photos/200" },
    { id: 435, name: "Alice Johnson", avatar: "https://picsum.photos/200" },
  ]);

  const [followers, setFollowers] = useState([
    { id: 42541, name: "John Doe", avatar: "https://picsum.photos/200" },
    { id: 80, name: "Jane Doe", avatar: "https://picsum.photos/200" },
    { id: 324, name: "Bob Smith", avatar: "https://picsum.photos/200" },
    { id: 894, name: "Alice Johnson", avatar: "https://picsum.photos/200" },
    { id: 54525, name: "Tom Jones", avatar: "https://picsum.photos/200" },
    { id: 6425, name: "Samantha Lee", avatar: "https://picsum.photos/200" },
    { id: 7244544, name: "Mike Brown", avatar: "https://picsum.photos/200" },
    { id: 2458, name: "Emily Davis", avatar: "https://picsum.photos/200" },
    { id: 95667, name: "David Kim", avatar: "https://picsum.photos/200" },
    { id: 102452, name: "Karen Lee", avatar: "https://picsum.photos/200" },
    { id: 4355637, name: "Alice Johnson", avatar: "https://picsum.photos/200" },
    { id: 7463, name: "Tom Jones", avatar: "https://picsum.photos/200" },
    { id: 34643636, name: "Samantha Lee", avatar: "https://picsum.photos/200" },
    { id: 3635737, name: "Mike Brown", avatar: "https://picsum.photos/200" },
    { id: 365363638, name: "Emily Davis", avatar: "https://picsum.photos/200" },
    { id: 36365359, name: "David Kim", avatar: "https://picsum.photos/200" },
    { id: 15747470, name: "Karen Lee", avatar: "https://picsum.photos/200" },
    { id: 3463634, name: "Alice Johnson", avatar: "https://picsum.photos/200" },
    { id: 5547457, name: "Tom Jones", avatar: "https://picsum.photos/200" },
    { id: 5747456, name: "Samantha Lee", avatar: "https://picsum.photos/200" },
    { id: 363657, name: "Mike Brown", avatar: "https://picsum.photos/200" },
    { id: 856363, name: "Emily Davis", avatar: "https://picsum.photos/200" },
    { id: 678659, name: "David Kim", avatar: "https://picsum.photos/200" },
    { id: 3565310, name: "Karen Lee", avatar: "https://picsum.photos/200" },
    { id: 65364, name: "Alice Johnson", avatar: "https://picsum.photos/200" },
    { id: 536355, name: "Tom Jones", avatar: "https://picsum.photos/200" },
    { id: 65636, name: "Samantha Lee", avatar: "https://picsum.photos/200" },
    { id: 63657, name: "Mike Brown", avatar: "https://picsum.photos/200" },
    { id: 835653, name: "Emily Davis", avatar: "https://picsum.photos/200" },
    { id: 9653556, name: "David Kim", avatar: "https://picsum.photos/200" },
    { id: 1356350, name: "Karen Lee", avatar: "https://picsum.photos/200" },
  ]);

  const handleToggle = () => {
    setSelectedOption(
      selectedOption === "Following" ? "Followers" : "Following"
    );
  };

  const handleUnfollow = (id) => {
    if (selectedOption === "Following") {
      setFollowing(following.filter((user) => user.id !== id));
    } else {
      setFollowers(followers.filter((user) => user.id !== id));
    }
  };

  const displayList = selectedOption === " Following" ? following : followers;
  const count =
    selectedOption === " Following " ? following.length : followers.length;

  return (
    <Grid
      container
      sx={{
        overflow: "auto",
        width: "900px",
        height: "400px",
        backgroundColor: "#0000D5",
        borderRadius: "5px",
        display: "flex",
        marginBottom: "16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "32px",
        }}
      >
        <Button
          variant={selectedOption === "Following" ? "contained" : "outlined"}
          onClick={handleToggle}
          sx={{ marginRight: "16px" }}
        >
          <Typography variant="h4" gutterBottom>
            Following ({count})
          </Typography>
        </Button>

        <Button
          variant={selectedOption === "Followers" ? "contained" : "outlined"}
          onClick={handleToggle}
        >
          <Typography variant="h4" gutterBottom>
            Followers ({count})
          </Typography>
        </Button>
      </Box>

      <Box
        sx={{
          padding: 2,
          backgroundColor: "#000",
          color: "#fff",
        }}
      >
        <Grid container spacing={2}>
          {displayList.map((user) => (
            <Grid item xs={6} sm={4} md={2} key={user.id}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src={user.avatar}
                  alt={user.name}
                  sx={{ width: 100, height: 100, marginBottom: 1 }}
                />
                <Typography variant="subtitle1">{user.name}</Typography>
                <Button
                  variant="outlined"
                  onClick={() => handleUnfollow(user.id)}
                >
                  Unfollow
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Grid>
  );
};

export default Following;
