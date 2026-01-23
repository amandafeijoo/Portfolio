import { useRef } from "react";
import { useScroll } from "framer-motion";
import { Box, Typography } from "@mui/material";

import WorkFlowLines from "./WorkFlowLines";
import { Section, CanvasWrapper, Content } from "./styles/Work.styles";

export default function WorkSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <Section id="work" ref={sectionRef}>
      {/* 🎥 CANVAS */}
      <CanvasWrapper>
        <WorkFlowLines height={800} progress={scrollYProgress} />
      </CanvasWrapper>

      {/* 🧠 CONTENT */}
      <Content>
        <Box
          sx={{
            textAlign: "center",
            pointerEvents: "none",
            mb: { xs: 8, md: 12, lg: 20 },
          }}
        >
          {/* LABEL */}
          <Box
            sx={{
              maxWidth: "1200px",
              mx: "auto",
              textAlign: "left",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.9rem",
                letterSpacing: "0.45em",
                fontWeight: 600,
                color: "rgba(240, 201, 123, 0.95)",
                textTransform: "uppercase",
                mb: "12px",
              }}
            >
              Work
            </Typography>
          </Box>

          {/* TITLE */}
          <Typography
            sx={{
              fontSize: "clamp(2.8rem, 6vw, 3.5rem)",
              fontWeight: 500,
              color: "#F4F2ED",
              lineHeight: 1.1,
              textShadow: `
                0 0 18px rgba(201,184,138,0.25),
                0 0 42px rgba(201,184,138,0.15)
              `,
            }}
          >
            Selected projects
          </Typography>

          {/* SUBTITLE */}
          <Typography
            sx={{
              mt: "18px",
              fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
              color: "rgba(220,215,205,0.65)",
              maxWidth: "520px",
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Crafted digital experiences with attention to detail and intent
          </Typography>
          <div
            style={{
              margin: "18px auto 0",
              width: "64px",
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(201,184,138,0.6), transparent)",
            }}
          />
        </Box>
      </Content>
    </Section>
  );
}
