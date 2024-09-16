import api from ".";

/**
 * 登录
 */
export function login(user: {
  username: string;
  password: string;
}) {
  return api.post("/login", user);
}

/**
 * 注册
 */
export function signin(user: {
  username: string;
  password: string;
  confirmPassword: string;
}) {
  return api.post("/register", user);
}
