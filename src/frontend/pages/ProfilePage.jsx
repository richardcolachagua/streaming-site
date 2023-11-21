import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const ProfilePage = () => {
  return (
    <Box>
      <Box>
        <Typography variant="h3">Update Your Profile</Typography>
      </Box>
      <Box>
        <Typography variant="h4">Add a bio</Typography>
        <TextField>Enter your bio here</TextField>
      </Box>
      <Box>
        <Avatar alt="photo" src="/" sx={{ width: 24, height: 24 }} />
      </Box>
      <Box>
        <Typography>Followers</Typography>

        <Typography>Following</Typography>
      </Box>

      <Box>
        <Typography variant="h3" fontWeight="bold">
          Email
        </Typography>
        <TextField>Enter your email here</TextField>
        <Typography variant="h3">Birthday</Typography>
        <TextField>Enter your birthday here</TextField>
        <Typography variant="h3">Gender</Typography>
        <Typography variant="h3">Enter your gender here</Typography>
      </Box>
      <Button variant="success">Save Profile</Button>
    </Box>
  );
};

export default ProfilePage;
