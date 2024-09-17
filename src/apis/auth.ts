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

/**
 * 用户的登录状态
 */
export function isLoginUser(): boolean {
  const token = localStorage.getItem('auth_token');
  if (!token) return false;

  return true;
}

export function getToken() {
  return localStorage.getItem('auth_token');
}
