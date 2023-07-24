import React from "react";
import { Link } from "react-router-dom";
import { Stack, Typography, Button, Box } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const CreatorHeader = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        sx={{
          bgcolor: "beige",
          width: 700,
          marginBottom: "25px",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Movies
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold" }}
          component={Link}
          to="/Shows"
        >
          Shows
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          New and Popular
        </Typography>

        <NotificationsIcon />
        <Button variant="contained" size="small" onClick={""}>
          Log Out
        </Button>
      </Stack>
    </Box>
  );
};

export default CreatorHeader;
