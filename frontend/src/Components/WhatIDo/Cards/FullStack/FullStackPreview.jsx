import { Box } from "@mui/material";
import { FrontendPanel } from "./FrontendPanel";
import { BackendPanel } from "./BackendPanel";
import { Connector } from "./Connector";

export default function FullStackPreview() {
  return (
    <Box>
      <FrontendPanel />
      <Connector />
      <BackendPanel />
    </Box>
  );
}
