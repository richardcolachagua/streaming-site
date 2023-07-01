import React from "react";
import { Grid, Box, Typography } from "@mui/material";

const CantLogin = () => {
  return (
    <Grid>
      <Box>
        <Typography variant="strong">I can't log into my account</Typography>
      </Box>
      <Typography>
        If you're having trouble logging in or accessing your account, it could
        be for one of the following issues:
      </Typography>
      <Typography>Invalid login credentials</Typography>
      <Typography>Home Network</Typography>
    </Grid>
  );
};

export default CantLogin;
