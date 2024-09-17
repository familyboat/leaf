/**
 * 与授权相关的 hook
 */

import { useEffect, useState } from "react";
import { isLoginUser } from "../apis/auth";

/**
 * 检查用户的登录状态
 */
export function useCheckLogin() {
  // 接口的请求状态
  const [loading, setLoading] = useState(true);

  // 用户的登录状态
  const [isLogin, setIsLogin] = useState(false);

  useEffect(function() {
    isLoginUser().then(result => {
      setIsLogin(result);
    }).catch(() => {
      setIsLogin(false)
    }).finally(() => {
      setLoading(false);
    })
  }, []);

  return [loading, isLogin];
}