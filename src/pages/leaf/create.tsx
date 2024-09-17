import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { loginPath, routes } from "../../routes";
import { TextField } from "formik-mui";
import PostAddIcon from '@mui/icons-material/PostAdd';
import { leafValidationSchema } from "./validation";
import { createLeaf } from "../../apis/leaf";
import { toast } from "react-toastify";

const initialValues = {
  title: "",
  content: "",
};

const onSubmit = async (
  values: typeof initialValues,
  { setSubmitting }: FormikHelpers<typeof initialValues>,
) => {
  try {
    await createLeaf(values);
    routes.navigate(-1);
  } catch (e) {
    toast('登录信息已过期，请重新登录');
    routes.navigate(loginPath);
  }

  setSubmitting(false);
};

export default function CreateLeaf() {
  const navigate = useNavigate();

  function back() {
    navigate(-1);
  }

  return (
    <>
      <Button
        onClick={back}
        variant="outlined"
      >
        返回
      </Button>
      <Formik
        initialValues={initialValues}
        validationSchema={leafValidationSchema}
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
                  name="title"
                  type="text"
                  label="title"
                />
                <Field
                  component={TextField}
                  name="content"
                  multiline
                  rows={4}
                  label="content"
                />
                <LoadingButton
                  variant="contained"
                  loadingPosition="start"
                  startIcon={<PostAddIcon />}
                  onClick={submitForm}
                  loading={isSubmitting}
                >
                  post
                </LoadingButton>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}
