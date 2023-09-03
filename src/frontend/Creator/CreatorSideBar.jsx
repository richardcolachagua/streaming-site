import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Drawer,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import VideoFileIcon from "@mui/icons-material/VideoFile";
import QueueIcon from "@mui/icons-material/Queue";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";

const CreatorSideBar = () => {
  const [selected, setSelected] = useState("Dashboard");
  const [open, setOpen] = useState(false);

  const handleItemClick = (title) => {
    setSelected(title);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        onOpen={handleDrawerOpen}
        variant="persistent"
      >
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

        <Divider />

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
      </Drawer>
    </>
  );
};

export default CreatorSideBar;
