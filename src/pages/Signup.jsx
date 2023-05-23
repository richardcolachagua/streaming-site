import React from "react";
import { Container, Typography } from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";

const Signup = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required,
    email: Yup.string().required(),
    dob: Yup.string().required(),
    password: Yup.string().required,
    confirmPassword: Yup.string().required,
    creatorName: Yup.string().required,
    phoneNumber: Yup.string().required,
    address: Yup.string().required,
    gender: Yup.string().required,
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      dob: "",
      password: "",
      confirmPassword: "",
      creatorName: "",
      phoneNumber: "",
      address: "",
      gender: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      <label htmlFor="emailName">Email</label>
      <input
        id="email"
        name="email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <label htmlFor="dob">Date of Birth</label>
      <input
        id="dob"
        name="dob"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.dob}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
    </form>
  );
};

export default Signup;
