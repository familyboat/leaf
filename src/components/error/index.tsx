import { Box } from "@mui/material";
import { red } from "@mui/material/colors";

/**
 * 通用的错误组件
 */
type GeneralErrorType = {
  message?: string,
}

export default function GeneralError(props: GeneralErrorType) {
  const message = props.message ?? '这是默认的错误信息';

  return (
    <Box
      sx={{color: red[500]}}
    >
      {message}
    </Box>
  )
}
