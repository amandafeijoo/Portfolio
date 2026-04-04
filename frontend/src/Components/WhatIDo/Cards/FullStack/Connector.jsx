import { Box } from "@mui/material";
import { MotionBox, connectorTransition } from "./FullStackPreview.motion";
import { palette } from "./FullStackPreview.constants";

export function Connector() {
  return (
    <Box
      sx={{
        position: "relative",
        height: 24,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "68%",
          height: "2px",
          background: `linear-gradient(90deg, ${palette.connectorLineA}, ${palette.connectorLineB}, ${palette.connectorLineA})`,
        }}
      />

      <MotionBox
        animate={{ x: ["-140%", "140%"] }}
        transition={connectorTransition}
        sx={{
          position: "absolute",
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: palette.connectorDot,
          boxShadow: "0 0 0 3px rgba(143,168,201,0.18)",
        }}
      />
    </Box>
  );
}
