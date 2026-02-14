import ProcessHero from "./ProcessHero";
import ProcessCards from "./ProcessCards";

import { Box } from "@mui/material";

export default function ProcessSection() {
  return (
    <section style={{ background: "#000", overflow: "hidden" }}>
      <ProcessHero />

      <Box
        sx={{
          mt: { xs: "-295px", md: "-120px" },
        }}
      >
        <ProcessCards />
      </Box>
    </section>
  );
}
