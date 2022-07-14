import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import InputField from "./InputField";

interface MyFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
}

const validate = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  username: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Username is required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .max(20, "Must be less than 20 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password does not match")
    .required("Confirm password is required"),
});

const RegisterForm: React.FC<{}> = () => {
  const initialValues: MyFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <div style={{ margin: "auto", maxWidth: "500px", fontSize: "1.5rem" }}>
          <h1>Sign Up</h1>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit(e);
            }}
          >
            <InputField label="First Name" name="firstName" type="" />
            <InputField label="Last Name" name="lastName" type="" />
            <InputField label="Email" name="email" type="" />
            <InputField label="Username" name="username" type="" />
            <InputField label="Password" name="password" type="password" />
            <InputField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <div style={{ display: "flex", gap: "40px" }}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
              <Button variant="contained" color="error">
                Reset
              </Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default RegisterForm;
