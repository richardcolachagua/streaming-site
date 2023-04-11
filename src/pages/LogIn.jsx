import React, { useState, useContext } from "react";
import * as Yup from "yup";
import {
  Container,
  Typography,
  Box,
  Grid,
  Link,
  Button,
  TextField,
} from "@mui/material";

export default function LoginPage() {
  const [login, setLogin] = useState();

  const LoginSchema = Yup.object().shape({
    emailAddress: Yup.string().required("Email address is required"),
  });

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
