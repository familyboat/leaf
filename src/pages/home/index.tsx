import { Link } from "react-router-dom";
import { leafCreatePath, leavesPath } from "../../routes";
import { Login, Signin } from "../auth";

export default function Home() {
  return (
    <>
      home page
      <Link to={leavesPath}>
        查看所有 leaf
      </Link>
      <Link to={leafCreatePath}>
        创建新的 leaf
      </Link>
      <Login />
      <Signin />
    </>
  );
}
