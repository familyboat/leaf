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
export async function isLoginUser(): Promise<boolean> {
  const token = localStorage.getItem('auth_token');
  if (!token) return false;

  const resp = await api.get('/auth/isLogin', {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  });

  return resp.data.isLogin;
}

export function getToken() {
  return localStorage.getItem('auth_token');
}
