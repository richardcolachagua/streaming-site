import React from "react";
import { Box, CardContent, Grid, Typography, Card } from "@mui/material";
import SettingsLink from "./SettingsComponents/SettingsLinks";

const MemberSettings = () => {
  return (
    <Box m="20px" flexGrow={1} p={2}>
      <Typography sx={{ fontWeight: "bold" }} variant="h2" marginBottom="20px">
        Account Settings
      </Typography>
      <SettingsLink
        to="/PasswordChange"
        title="Password Change"
        description="Change password"
      />

      <SettingsLink
        to="/ChangeEmail"
        title="Email"
        description="Change email"
      />

      <SettingsLink
        to="/billing"
        title="Update Payment Information"
        description="update payment information"
      />
    </Box>
  );
};

export default MemberSettings;
