import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Container,
  Grid,
  Box,
  Link,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { CheckBox } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CssBaseline from "@mui/material/CssBaseline";

const validationSchema = Yup.object({
  email: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography fontWeight={700} fontSize="22px">
          Welcome Back!
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <form onSubmit={formik.handleSubmit}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <TextField
                id="email"
                name="email"
                label="email"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.username && Boolean(formik.errors.email)}
                helperText={formik.touched.username && formik.errors.email}
              />
              <TextField
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <FormControlLabel
                control={<CheckBox value="remember" color="primary" />}
              />
            </div>
            <Button type="submit" variant="contained" color="primary">
              SIGN IN
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
