import ProcessHero from "./ProcessHero";
import ProcessCards from "./ProcessCards";

import { Box } from "@mui/material";

export default function ProcessSection() {
  return (
    <section style={{ background: "#000", overflow: "hidden" }}>
      <ProcessHero />

      <Box sx={{ pt: { xs: 8, md: 10 } }}>
        <ProcessCards />
      </Box>
    </section>
  );
}
