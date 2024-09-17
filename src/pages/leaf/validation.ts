import * as Yup from "yup";

const title = Yup.string().required("Title is required");
const content = Yup.string().required("Content is required").max(
  256,
  "Content must be up to 256 characters",
);

export const leafValidationSchema = Yup.object({
  title,
  content,
})
