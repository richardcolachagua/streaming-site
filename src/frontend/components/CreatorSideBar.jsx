import React, { useState } from "react";
import { Box, Grid, Item, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import VideoFileIcon from "@mui/icons-material/VideoFile";
import QueueIcon from "@mui/icons-material/Queue";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const CreatorSideBar = () => {
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box display="flex" justifyContent="space-between">
      <Typography>Feed</Typography>
      <Typography>Browse</Typography>
      <Typography>Your Videos</Typography>

      <Item
        title="Browse"
        to="/Browse"
        icon={""}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Your Videos"
        to="/your-videos"
        icon={<VideoFileIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Watch Later"
        to="/watch-later"
        icon={<QueueIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Following"
        to="/following"
        icon={""}
        selected={selected}
        setSelected={setSelected}
      />
      <Typography>General</Typography>
      <Item
        title="Settings"
        to="/settings"
        icon={<SettingsIcon />}
        selected={selected}
        setSelected={setSelected}
      />
      <Item
        title="Logout"
        to="/logout"
        icon={<LogoutIcon />}
        selected={selected}
        setSelected={setSelected}
      />
    </Box>
  );
};

export default CreatorSideBar;
