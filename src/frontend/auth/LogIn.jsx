import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Footer from "../components/Footer";

import {
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
  Link,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  Box,
} from "@mui/material";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import * as Yup from "yup";
import { Formik } from "formik";

const PRIMARY_COLOR = "primary";
const PASSWORD_VISIBILITY_ICON_COLOR = "action";
const SPACING = 2;

const Login = () => {
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Box>
        <Stack
          direction="row"
          spacing={SPACING}
          sx={{
            bgcolor: PRIMARY_COLOR,
            width: 1000,
          }}
        >
          <RouterLink to="/signup">
            <Button
              variant="text"
              sx={{
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Sign Up
            </Button>
          </RouterLink>
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Box
          sx={{ width: "400px", padding: "24px", backgroundColor: "#ffffff" }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
            sx={{ mb: { xs: -SPACING, sm: -SPACING } }}
          >
            <Typography variant="h4" sx={{ textAlign: "center", mb: 3 }}>
              Sign In
            </Typography>

            <Typography
              component={Link}
              to="/signup"
              variant="body1"
              sx={{ textDecoration: "none" }}
              color={PRIMARY_COLOR}
            >
              Don't have an account?
            </Typography>
          </Stack>

          <Formik
            initialValues={{
              email: "",
              password: "",
              submit: null,
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Must be a valid email")
                .max(255)
                .required("Email is required"),
              password: Yup.string().max(255).required("Password is required"),
            })}
            onSubmit={async (
              values,
              { setErrors, setStatus, setSubmitting }
            ) => {
              try {
                setStatus({ success: false });
                setSubmitting(false);
              } catch (err) {
                setStatus({ success: false });
                setErrors({ submit: err.message });
                setSubmitting(false);
              }
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={SPACING}>
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel
                        htmlFor="email-login"
                        style={{ cursor: "pointer" }}
                      >
                        Email Address
                      </InputLabel>
                      <OutlinedInput
                        id="email-login"
                        type="email"
                        value={values.email}
                        name="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        fullWidth
                        error={Boolean(touched.email && errors.email)}
                        aria-describedby="email-error"
                      />
                      {touched.email && errors.email && (
                        <FormHelperText error id="email-error">
                          {errors.email}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>

                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="password-login">Password</InputLabel>
                      <OutlinedInput
                        fullWidth
                        error={Boolean(touched.password && errors.password)}
                        id="password-login"
                        type={showPassword ? "text" : "password"}
                        value={values.password}
                        name="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password availability"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOffIcon />
                              ) : (
                                <VisibilityIcon />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        placeholder="Enter password"
                        aria-describedby="password-error"
                      />
                      {touched.password && errors.password && (
                        <FormHelperText error id="password-error">
                          {errors.password}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sx={{ mt: -1 }}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      spacing={2}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checked}
                            onChange={(event) =>
                              setChecked(event.target.checked)
                            }
                            name="checked"
                            color="primary"
                            size="small"
                          />
                        }
                        label={<Typography>Keep me signed in</Typography>}
                      />
                      <Link
                        component={RouterLink}
                        to="/"
                        color="primary"
                        variant="body2"
                      >
                        Forgot Password?
                      </Link>
                    </Stack>
                  </Grid>
                  {errors.submit && (
                    <Grid item xs={12}>
                      <FormHelperText error>{errors.submit}</FormHelperText>
                    </Grid>
                  )}
                  <Grid item xs={12}>
                    <Button
                      disabledElevation
                      disabled={isSubmitting}
                      fullWidth
                      variant="contained"
                      size="large"
                      type="submit"
                    >
                      Login
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Login;
