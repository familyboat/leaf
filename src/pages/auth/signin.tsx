/**
 * 注册表单
 */

import { Box } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import LoginIcon from "@mui/icons-material/Login";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import { signinValidationSchema } from "./validation";
import { signin } from "../../apis/auth";

const initialValues = {
  username: "",
  password: "",
  confirmPassword: "",
};

const onSubmit = async (values: typeof initialValues) => {
  const resp = await signin(values);
  console.log(resp);
};

export default function Signin() {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={signinValidationSchema}
        onSubmit={onSubmit}
      >
        {({ submitForm, isSubmitting }) => {
          return (
            <Form>
              <Box
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    maxWidth: "200px",
                  },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Field
                  component={TextField}
                  name="username"
                  type="text"
                  label="username"
                />
                <Field
                  component={TextField}
                  name="password"
                  type="password"
                  label="password"
                />
                <Field
                  component={TextField}
                  name="confirmPassword"
                  type="password"
                  label="comfirm password"
                />
                <LoadingButton
                  variant="contained"
                  loadingPosition="start"
                  startIcon={<LoginIcon />}
                  onClick={submitForm}
                  loading={isSubmitting}
                >
                  sign in
                </LoadingButton>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}
