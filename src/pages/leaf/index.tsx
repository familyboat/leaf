import { Link } from "react-router-dom";
import { homePath } from "../../routes";

export default function Leaf() {
  return (
    <>
      leaf page
      <Link to={homePath}>
        返回主页
      </Link>
    </>
  );
}
