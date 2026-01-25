import { useRef } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faPalette,
  faCode,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

const steps = [
  {
    icon: faLightbulb,
    title: "Understanding your idea",
    text: `We start by talking about your project and your ideas.

You can share references, content, or simply explain what you want to improve.

I’ll listen, ask questions, and help you shape a clear structure for your website.`,
  },
  {
    icon: faPalette,
    title: "Structure & visual direction",
    text: `Based on your input, I define the structure of your website and a visual direction.

This includes layout, colors, typography, and the overall style.

I share progress with you and adjust things together as the design evolves.`,
  },
  {
    icon: faCode,
    title: "Building the website",
    text: `I develop your website using modern web technologies.

I bring the design to life and turn it into a real, functional website.

I make sure everything works properly across different devices.`,
  },
  {
    icon: faRocket,
    title: "Launch & small improvements",
    text: `Once everything feels right, your website goes live.

After launch, I can help with small changes and fixes.

I’m here to support you as your business grows.`,
  },
];

export default function ProcessCards() {
  const scrollerRef = useRef(null);
  const isDesktop = useMediaQuery("(min-width:1024px)");

  const handleWheel = (e) => {
    if (!scrollerRef.current || !isDesktop) return;
    e.preventDefault();
    scrollerRef.current.scrollLeft += e.deltaY;
  };

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 6, md: 10 },
        mb: { xs: 8, md: 10 },
        mt: { xs: 2, md: -5 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        ref={scrollerRef}
        onWheel={handleWheel}
        sx={{
          mt: { xs: 6, md: 10 },
          display: "flex",
          gap: { xs: 3, md: 4 },
          overflowX: "auto",
          px: { xs: 2, md: 4 },
          width: "100%",
          maxWidth: "100vw",
          WebkitOverflowScrolling: "touch",

          scrollSnapType: {
            xs: "x mandatory",
            md: "none",
          },

          "&::-webkit-scrollbar": {
            height: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "rgba(255,255,255,0.05)",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            background:
              "linear-gradient(180deg, rgba(201,169,106,0.65), rgba(201,169,106,0.35))",
            borderRadius: "10px",
            boxShadow: "0 0 6px rgba(201,169,106,0.4)",
          },
        }}
      >
        {steps.map((step, index) => (
          <Box
            key={index}
            component={motion.div}
            whileHover={{
              y: -8,
              boxShadow: "0 60px 120px rgba(0,0,0,0.65)",
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
            sx={{
              flex: {
                xs: "0 0 78%",
                sm: "0 0 68%",
                md: "0 0 320px",
              },
              scrollSnapAlign: "center",
              p: { xs: "22px 18px", md: "36px 26px" },
              borderRadius: "22px",
              backdropFilter: "blur(18px)",
              border: "1px solid transparent",
              textAlign: "center",

              background: `
                linear-gradient(180deg, rgba(15,15,15,0.94), rgba(12,12,12,0.94)) padding-box,
                radial-gradient(
                  120% 160% at 50% -20%,
                  rgba(201,169,106,0.55),
                  rgba(201,169,106,0.18) 35%,
                  rgba(255,255,255,0.10) 55%,
                  rgba(255,255,255,0.04) 75%,
                  transparent 100%
                ) border-box
              `,
            }}
          >
            {/* STEP */}
            <Typography
              sx={{
                fontFamily: "Source Code Pro, monospace",
                fontSize: "0.75rem",
                letterSpacing: "0.25em",
                color: "rgba(201,169,106,0.6)",
                mb: 1,
              }}
            >
              STEP {index + 1}
            </Typography>

            {/* Decorative line */}
            <Box
              sx={{
                width: "36px",
                height: "1px",
                mx: "auto",
                mb: 2,
                background:
                  "linear-gradient(90deg, transparent, rgba(201,169,106,0.8), transparent)",
              }}
            />

            {/* ICON */}
            <Box
              component={motion.div}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.85, 1, 0.85],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              sx={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                mx: "auto",
                mb: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(201,169,106,0.9)",
                border: "1px solid rgba(201,169,106,0.15)",
                background: "rgba(201,169,106,0.03)",
              }}
            >
              <FontAwesomeIcon icon={step.icon} />
            </Box>

            {/* TITLE */}
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontWeight: 500,
                letterSpacing: "0.01em",
                mb: 2,
                color: "rgba(255,255,255,0.95)",
              }}
            >
              {step.title}
            </Typography>

            {/* TEXT */}
            <Typography
              sx={{
                fontSize: { xs: "0.9rem", md: "0.95rem" },
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.62)",
                whiteSpace: "pre-line",
                maxWidth: "34ch",
                mx: "auto",
              }}
            >
              {step.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
