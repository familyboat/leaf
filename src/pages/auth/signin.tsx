/**
 * 注册表单
 */

import { Box, Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import LoginIcon from "@mui/icons-material/Login";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { TextField } from "formik-mui";
import { signinValidationSchema } from "./validation";
import { signin } from "../../apis/auth";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import { AxiosError } from "axios";
import GeneralError from "../../components/error";
import { toast } from "react-toastify";

const initialValues = {
  username: "",
  password: "",
  confirmPassword: "",
};

const onSubmit = async (values: typeof initialValues, { setSubmitting, setStatus }: FormikHelpers<typeof initialValues>,) => {
  try {
    await signin(values);
    toast('账号注册成功');
    routes.navigate(-1);
  } catch (e) {
    const err = e as AxiosError<{ error: string }>;
    setStatus(err.response?.data.error);
  }

  setSubmitting(false);
};

/**
 * TODO：检查是否是登录用户
 */
export default function Signin() {
  const navigate = useNavigate();

  function back() {
    navigate(-1);
  }

  return (
    <>
      <Box>
        <Button onClick={back} variant="outlined" size="small">
          返回
        </Button>
      </Box>
      <Formik
        initialValues={initialValues}
        validationSchema={signinValidationSchema}
        onSubmit={onSubmit}
      >
        {({ submitForm, isSubmitting, status }) => {
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
                {status && <GeneralError message={status} />}
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
