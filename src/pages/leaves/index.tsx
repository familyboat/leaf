import { Link, useNavigate } from "react-router-dom";
import { homePath, leafCreatePath, loginPath } from "../../routes";
import { useEffect, useState } from "react";
import { getLeaves } from "../../apis/leaf";
import { Box } from "@mui/material";
import { orange } from "@mui/material/colors";

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

export default function Leaves() {
  const [leaves, setLeaves] = useState<Array<LeafType>>([]);
  const navigate = useNavigate();

  useEffect(function() {
    getLeaves({limit: 10}).then(result => {
      setLeaves(result)
    }).catch((_e) => {
      navigate(loginPath);
    })
  }, [])

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
        <Box>
          <Link to={leafCreatePath}>
            描绘叶子
          </Link>
        </Box>
      </Box>
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
                  "a c"
                `,
                gridTemplateColumns: '100px 1fr',
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
  );
}
