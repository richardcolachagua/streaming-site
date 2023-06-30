import React from "react";
import { Box, Typography, TextField, Button, Avatar } from "@mui/material";
import Header from "../../components/Header.jsx";

const ProfilePage = () => {
  return (
    <Box>
      <Header />
      <Typography>Customize Your Profile</Typography>
      <Box>
        <Typography>What type of content are you uploading?</Typography>
        <Box>
          <Typography>Add A Bio</Typography>
          <TextField alt="Bio">Enter Bio Here</TextField>
        </Box>
        <Avatar alt="" src="" sx={{ width: 56, height: 56 }}></Avatar>
        <Typography>Add a Photo</Typography>
        <Box>
          <Typography>Add Your Location</Typography>
        </Box>
        <Box>
          <Typography>Add a language</Typography>
        </Box>
        <Button color="primary" type="submit">
          Submit Profile
        </Button>
      </Box>
    </Box>
  );
};

export default ProfilePage;
