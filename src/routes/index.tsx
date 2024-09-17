/**
 * 部署环境为 github
 */

import { createHashRouter } from "react-router-dom";
import Home from "../pages/home";
import Leaves from "../pages/leaves";
import { Login, Signin } from "../pages/auth";
import CreateLeaf from "../pages/leaf/create";

/**
 * 主页的路径
 */
export const homePath = "/";
/**
 * 全部 leaf 的路径
 */
export const leavesPath = "/leaves";
/**
 * 创建 leaf 的路径
 */
export const leafCreatePath = "/leaves/create";

/**
 * 登录
 */
export const loginPath = '/login';
/**
 * 注册
 */
export const signinPath = '/signin';

export const routes = createHashRouter([
  {
    path: homePath,
    element: <Home />,
  },
  {
    path: leavesPath,
    element: <Leaves />,
  },
  {
    path: leafCreatePath,
    element: <CreateLeaf />,
  },
  {
    path: loginPath,
    element: <Login />,
  },
  {
    path: signinPath,
    element: <Signin />
  }
]);
