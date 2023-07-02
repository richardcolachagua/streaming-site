import React, { useRef } from "react";
import { Grid, Box, Typography } from "@mui/material";

// we create a ref using the useRef hook and assign it to the target Typography
// component further down the page. We then add an onClick event handler to the
// first Typography component, which calls the handleClick function. Inside the
// handleClick function, we use the scrollIntoView method on the targetRef to smoothly
// scroll to the target element when the first Typography component is clicked.

const CantLogin = () => {
  const targetRef = useRef(null);

  const handleClick = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Grid>
      <Box sx={{ display: "flex" }}>
        <Typography variant="strong">I can't log into my account</Typography>
      </Box>
      <Typography>
        If you're having trouble logging in or accessing your account, it could
        be for one of the following issues:
      </Typography>
      <Typography onClick={handleClick} sx={{ cursor: "pointer" }}>
        Invalid login credentials
      </Typography>
      <Typography onClick={handleClick} sx={{ cursor: "pointer" }}>
        Other errors and loading issues
      </Typography>
      <div ref={targetRef}>
        <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
          Invalid login credentials
        </Typography>
      </div>
      <Typography>
        Are you getting an error message that says "Your login is invalid.
        Please try again." when you try to log in? If so, it means you're
        entering an incorrect email address and/or password.
      </Typography>
      <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>
        Password
      </Typography>
      <Typography>
        If you forgot your password, try resetting it. Don't forget to check
        your inbox/spam folders if you are not seeing it in your inbox after 15
        minutes. If you don't receive the password reset. It's possible that
        your account is linked to a different email address.
      </Typography>
      <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>
        Email Address
      </Typography>
      <Typography>
        Not sure what email address you should log in with? Learn more how to
        recover it here.
      </Typography>
      <div ref={targetRef}>
        <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
          Other errors and loading issues
        </Typography>
      </div>
      <Typography>
        If you're unable to bypass the login screen because of technical issues
        - like an unresponsive page or general error message - working through
        some basic troubleshooting steps may help. Try these:
      </Typography>
      <Typography>
        Clear your browser or app cache Force Close Check for updates
      </Typography>
    </Grid>
  );
};

export default CantLogin;
