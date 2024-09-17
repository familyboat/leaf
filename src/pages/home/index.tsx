import { Link } from "react-router-dom";
import { leafCreatePath, leavesPath, loginPath } from "../../routes";
import { ReactNode } from "react";
import { isLoginUser } from "../../apis/auth";

export default function Home() {
  // 用户登录状态
  const isLogin = isLoginUser();

  let content: ReactNode;

  if (isLogin) {
    content = (
      <>
        <div>
          <Link to={leafCreatePath}>描述</Link>你的叶子吧
        </div>
        <div>
          <Link to={leavesPath}>看看</Link>别人的叶子
        </div>
      </>
    )
  } else {
    content = (
      <>
        <div>
          <Link to={leavesPath}>看看</Link>别人的叶子
        </div>
        <div>
          <Link to={loginPath}>登录</Link>
        </div>
      </>
    )
  }

  return (
    <>
      欢迎来到叶子的世界
      {
        content
      }
    </>
  );
}
