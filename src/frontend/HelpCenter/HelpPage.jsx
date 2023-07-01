import React from "react";
import { Grid, Box, Typography } from "@mui/material";

export const HelpPage = () => {
  return (
    <Grid container>
      <Box>
        <Typography>
          Welcome Back, Richard Colachagua We think you'll find these articles
          helpful
        </Typography>
      </Box>
      <Box>
        <Typography>Billing and Plans</Typography>
        <Typography>I can't log into my account</Typography>
      </Box>
    </Grid>
  );
};

export default HelpPage;
