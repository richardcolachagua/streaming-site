import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import VideoFileIcon from "@mui/icons-material/VideoFile";
import QueueIcon from "@mui/icons-material/Queue";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";

const CreatorSideBar = () => {
  const [selected, setSelected] = useState("Dashboard");

  const handleItemClick = (title) => {
    setSelected(title);
  };

  return (
    <Box>
      <Typography>Feed</Typography>
      <Typography>Browse</Typography>
      <Typography>Your Videos</Typography>

      <List>
        <ListItem
          button
          component={Link}
          to="/dashboard"
          selected={selected === "Dashboard"}
          onClick={() => handleItemClick("Dashboard")}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem
          button
          onClick={() => handleItemClick("Yout Content")}
          selected={selected === "Your Content"}
          component={Link}
          to="/content"
        >
          <ListItemIcon>
            <VideoFileIcon />
          </ListItemIcon>
          <ListItemText primary="Your Content" />
        </ListItem>

        <ListItem
          button
          selected={selected === "Watch Later"}
          onClick={() => handleItemClick("Watch Later")}
          component={Link}
          to="/watch-later"
        >
          <ListItemIcon>
            <QueueIcon />
          </ListItemIcon>
          <ListItemText primary="Watch Later" />
        </ListItem>

        <ListItem
          button
          selected={selected === "Following"}
          onClick={() => handleItemClick("Following")}
          component={Link}
          to="/Following"
        >
          <ListItemIcon>{/* Replace with your actual icon */}</ListItemIcon>
          <ListItemText primary="Following" />
        </ListItem>
      </List>

      <Typography>General</Typography>

      <List>
        <ListItem
          button
          selected={selected === "Settings"}
          onClick={() => handleItemClick("Settings")}
          component={Link}
          to="/settings"
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>

        <ListItem
          button
          selected={selected === "Logout"}
          onClick={() => handleItemClick("Logout")}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );
};

export default CreatorSideBar;
