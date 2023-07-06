import React from "react";
import { Box, Grid, Link, Item, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import VideoFileIcon from "@mui/icons-material/VideoFile";
import QueueIcon from "@mui/icons-material/Queue";
import SettingsIcon from "@mui/icons-material/Settings";

const CreatorSideBar = () => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Typography>Feed</Typography>
      <Typography>Browse</Typography>
      <Typography>Your Videos</Typography>
    </Box>
  );
};

export default CreatorSideBar;
