import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Link,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
  InputLabel,
} from "@mui/material";
//import { strengthColor, strengthIndicator } from "utils/password-strength";

import * as Yup from "yup";
import { Formik } from "formik";

const SignUp = () => {
  const [level, setLevel] = useState();
  const [showPassword, setShowPassword] = useState();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    // const temp = strengthIndicator(value);
    // setLevel(strengthColor(temp));
  };
  useEffect(() => {
    changePassword("");
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "f5f5f5",
      }}
    >
      <Box sx={{ width: "400px", padding: "24px", backgroundColor: "#ffffff" }}>
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            dob: "",
            email: "",
            password: "",
            setpassword: "",
            address: "",
          }}
          validationSchema={Yup.object().shape({
            firstname: Yup.string().max(255).required("First Name is required"),
            lastname: Yup.string().max(255).required("Last Name is required"),
            email: Yup.string()
              .email("Must be a valid email")
              .max(255)
              .required("Email is required"),
            password: Yup.string().max(255).required("Password is required"),
            setpassword: Yup.string()
              .max(255)
              .required("set password is required"),
            address: Yup.string().max(255).required("Address is required"),
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
              setStatus({ success: false });
              setSubmitting(false);
            } catch (err) {
              console.error(err);
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
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="firstname-signup">
                      First Name
                    </InputLabel>
                    <OutlinedInput
                      id="firstname-login"
                      type="firstname"
                      value={values.firstname}
                      name="firstname"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="John"
                      fullWidth
                      error={Boolean(touched.firstname && errors.firstname)}
                    />
                    {touched.firstname && errors.firstname && (
                      <FormHelperText error id="helper-text-firstname-signup">
                        {errors.firstname}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="lastname-signup">Last Name</InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.lastname && errors.lastname)}
                      id="lastname-signup"
                      type="lastname"
                      value={values.lastname}
                      name="lastname"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Doe"
                      inputProps={{}}
                    />
                    {touched.lastname && errors.lastname && (
                      <FormHelperText error id="helper-text-lastname-signup">
                        {errors.lastname}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="dob-signup">DOB</InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.company && errors.company)}
                      id="dob-signup"
                      value={values.dob}
                      name="dob"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="5/27/199"
                      inputProps={{}}
                    />
                    {touched.company && errors.dob && (
                      <FormHelperText error id="helper-text-company-signup">
                        {errors.dob}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="email-signup">
                      Email Address
                    </InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.email && errors.email)}
                      id="email-login"
                      type="email"
                      value={values.email}
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="richard@sneakersociety.com"
                      inputProps={{}}
                    />
                    {touched.email && errors.email && (
                      <FormHelperText error id="helper-text-email-signup">
                        {errors.email}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="password-signup">Password</InputLabel>
                    <OutlinedInput
                      fullWidth
                      error={Boolean(touched.password && errors.password)}
                      id="password-signup"
                      type={showPassword ? "text" : "password"}
                      values={values.password}
                      name="password"
                      onBlur={handleBlur}
                      onChange={(e) => {
                        handleChange(e);
                        changePassword(e.target.value);
                      }}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            size="large"
                          ></IconButton>
                        </InputAdornment>
                      }
                      placeholder="*****"
                      inputProps={{}}
                    />
                    {touched.password && errors.password && (
                      <FormHelperText error id="helper-text-password-signup">
                        {errors.password}
                      </FormHelperText>
                    )}
                  </Stack>
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="confirmpassword-signup">
                        Confirm Password
                      </InputLabel>
                      <OutlinedInput
                        filledWidth
                        error={Boolean(
                          touched.setpassword && errors.setpassword
                        )}
                        value={values.setpassword}
                        name="setpassword"
                        onBlur={handleBlur}
                        onChange={(e) => {
                          handleChange(e);
                          changePassword(e.target.value);
                        }}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visbility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                              size="large"
                            ></IconButton>
                          </InputAdornment>
                        }
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="address-signup">Address</InputLabel>
                      <OutlinedInput
                        fullWidth
                        error={Boolean(touched.address && errors.address)}
                        id="address-signup"
                        value={values.address}
                        name="address"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="address"
                      ></OutlinedInput>
                    </Stack>
                  </Grid>
                  <FormControl fullWidth sx={{ mt: 2 }}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item>
                        <Box
                          sx={{
                            bgcolor: level?.color,
                            width: 85,
                            height: 8,
                            borderRadius: "7px",
                          }}
                        />
                      </Grid>
                    </Grid>
                  </FormControl>
                  <Grid item xs={12}>
                    <Typography variant="body2">
                      By Signing up, you agree to our &nbsp;
                      <Link variant="subtitle2" component={RouterLink} to="#">
                        Terms of Service
                      </Link>
                      &nbsp; and &nbsp;
                      <Link variant="subtitle2" component={RouterLink} to="#">
                        Privacy Policy
                      </Link>
                    </Typography>
                  </Grid>
                  {errors.submit && (
                    <Grid item xs={12}>
                      <FormHelperText error>{errors.submit}</FormHelperText>
                    </Grid>
                  )}
                  <Button
                    disableElevation
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Create Account
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default SignUp;
