import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  Link,
  IconButton,
  InputAdornment,
  Inputlabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";

import * as Yup from "yup";
import { Formik } from "formik";

const SignUp = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastname: "",
          dob: "",
          email: "",
          password: "",
          setPassword: "",
          address: "",
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().max(255).required("First Name is required"),
          lastName: Yup.string().max(255).required("Last Name is required"),
          email: Yup.string()
            .email("Must be a valid email")
            .max(255)
            .required("Email is required"),
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
          <form>
            <Grid container spacing={3}></Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
