import React from "react";
import { Box, Button, Typography } from "@mui/material";

const CreatorDashboard = () => {
  const uploadButton = () => {};
  return (
    <Box>
      <Typography>Channel Dashboard</Typography>
      <Box>
        <Button variant="contained">Upload Videos</Button>
      </Box>
      <Box>
        <Typography>Channel Analytics</Typography>
      </Box>
    </Box>
  );
};

export default CreatorDashboard;
