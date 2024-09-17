import { Link } from "react-router-dom";
import { homePath, leafCreatePath, loginPath } from "../../routes";
import { ReactNode, useEffect, useState } from "react";
import { getLeaves } from "../../apis/leaf";
import { Box } from "@mui/material";
import { orange } from "@mui/material/colors";
import { isLoginUser } from "../../apis/auth";

export type LeafType = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  user?: {
    id: string,
    username: string,
  }
}

function formatDatetime(datetime: string) {
  return new Date(datetime).toLocaleString();
}

export default function Leaves() {
  const [leaves, setLeaves] = useState<Array<LeafType> | null>(null);

  let content: ReactNode;
  if (isLoginUser()) {
    content = (
      <Box>
      <Link to={leafCreatePath}>
        描绘叶子
      </Link>
    </Box>
    )
  } else {
    content = (
      <Box>
        <Link to={loginPath}>
          登录
        </Link>
      </Box>
    )
  }

  function _get() {
    getLeaves({limit: 10_000}).then(result => {
      setLeaves((old) => {
        old ??= [];
        return [...old, ...result]
      })
    }).catch((_e) => {
    })
  }

  useEffect(function() {
    _get();
  }, [])

  let leavesContent: ReactNode;

  if (leaves === null) {
    leavesContent = <>加载中</>
  } else if (leaves.length) {
    leavesContent = (
      <>
        {
        leaves.map(leaf => {
          return (
            <Box key={leaf.id}
              sx={{
                m: 1,
                border: "1px solid orange",
                display: "grid",
                gridTemplateAreas: `
                  "a b"
                  "d c"
                `,
                gridTemplateColumns: '180px 1fr',
                gridTemplateRows: '30px 70px',
              }}
            >
              <Box
                sx={{
                  gridArea: 'a',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {leaf.user?.username}
              </Box>
              <Box
                sx={{
                  gridArea: 'd',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {formatDatetime(leaf.createdAt)}
              </Box>
              <Box
                sx={{
                  gridArea: 'b',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  color: orange[300],
                }}
              >
                {leaf.title}
              </Box>
              <Box
                sx={{
                  gridArea: 'c',
                  overflow: 'auto',
                }}
              >
                {leaf.content}
              </Box>
            </Box>
          )
        })
        }
      </>
    )
  } else {
    leavesContent = <>暂无叶子</>
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Link to={homePath}>
          返回主页
        </Link>
        {content}
      </Box>
      {
        leavesContent
      }
    </>
  );
}
