/**
 * 表单的验证器
 */
import * as Yup from "yup";

const username = Yup.string().required("Username is required");
const password = Yup.string().required("Password is required").min(
  8,
  "Password must be at least 8 characters",
);
const confirmPassword = Yup.string().required("Confirm password is required").oneOf([
  Yup.ref("password"),
], "Passwords must match")

/**
 * 注册表单的验证器
 */
export const signinValidationSchema = Yup.object({
  username,
  password,
  confirmPassword,
});

/**
 * 登录表单的验证器
 */
export const loginValidationSchema = Yup.object({
  username,
  password,
})
