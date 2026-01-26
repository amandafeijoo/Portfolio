import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { Box, Typography } from "@mui/material";

import WorkFlowLines from "../WorkFlowLines";
import { Section, CanvasWrapper, Content } from "../styles/Work.styles";

export default function WorkSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Animaciones suaves, elegantes
  const y = useTransform(scrollYProgress, [0, 0.3], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <Section id="work" ref={sectionRef}>
      {/* 🎥 CANVAS BACKGROUND */}
      <CanvasWrapper>
        <WorkFlowLines height={800} progress={scrollYProgress} />
      </CanvasWrapper>

      {/* 🧠 CONTENT */}
      <Content
        as={motion.div}
        style={{ y, opacity }}
      >
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
                fontSize: "0.85rem",
                letterSpacing: "0.45em",
                fontWeight: 600,
                color: "rgba(240, 201, 123, 0.95)",
                textTransform: "uppercase",
                mb: "14px",
              }}
            >
              Work
            </Typography>
          </Box>

          {/* TITLE */}
          <Typography
            sx={{
              position: "relative",
              fontSize: "clamp(2.6rem, 6vw, 3.4rem)",
              fontWeight: 500,
              color: "#F4F2ED",
              lineHeight: 1.1,
              mb: "16px",
              textShadow: `
                0 0 18px rgba(201,184,138,0.25),
                0 0 42px rgba(201,184,138,0.15)
              `,
              "::after": {
                content: '""',
                position: "absolute",
                inset: "-70%",
                background:
                  "radial-gradient(circle, rgba(201,184,138,0.10), transparent 70%)",
                filter: "blur(50px)",
                zIndex: -1,
              },
            }}
          >
            Selected work
          </Typography>

          {/* SUBTITLE */}
          <Typography
            sx={{
              mt: "16px",
              fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
              color: "rgba(220,215,205,0.65)",
              maxWidth: "520px",
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            A selection of projects where design, clarity and purpose come together.
          </Typography>

          {/* DIVIDER */}
          <Box
            sx={{
              mt: "22px",
              width: "64px",
              height: "1px",
              mx: "auto",
              background:
                "linear-gradient(90deg, rgba(201,184,138,0.6), transparent)",
            }}
          />
        </Box>
      </Content>
    </Section>
  );
}
