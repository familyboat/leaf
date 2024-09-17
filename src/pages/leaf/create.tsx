import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Formik, Field, Form, FormikHelpers } from "formik";
import GeneralError from "../../components/error";
import { AxiosError } from "axios";
import { routes } from "../../routes";
import { TextField } from "formik-mui";
import PostAddIcon from '@mui/icons-material/PostAdd';
import { leafValidationSchema } from "./validation";
import { createLeaf } from "../../apis/leaf";

const initialValues = {
  title: "",
  content: "",
};

const onSubmit = async (
  values: typeof initialValues,
  { setSubmitting, setStatus }: FormikHelpers<typeof initialValues>,
) => {
  try {
    await createLeaf(values);
    routes.navigate(-1);
  } catch (e) {
    const err = e as AxiosError<{ error: string }>;
      setStatus(err.response?.data.error);
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
