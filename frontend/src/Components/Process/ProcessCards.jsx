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
    title: "Understanding your goals",
    text: `We start with a conversation.

You share your business, ideas and priorities.

Together, we define the right direction for your website.`,
  },
  {
    icon: faPalette,
    title: "Structure & visual direction",
    text: `I shape the layout, visual system and hierarchy.

Typography, spacing and design decisions are crafted with intention.

We refine everything together before development begins.`,
  },
  {
    icon: faCode,
    title: "Building the experience",
    text: `I turn the design into a functional, responsive website.

Every section is built carefully to feel clear, polished and aligned with your goals.

I make sure everything works smoothly across different devices.`,
  },
  {
    icon: faRocket,
    title: "Launch & refinement",
    text: `Your website goes live with clarity and confidence.

After launch, I can continue supporting updates and improvements when needed.

Your website evolves as your business grows.`,
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
        mb: { xs: 14, md: 25 },
        mt: { xs: -28, md: -6 },
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Box
        ref={scrollerRef}
        onWheel={handleWheel}
        sx={{
          display: "flex",
          gap: { xs: 3, md: 4, lg: 5, xl: 6 },
          overflowX: "auto",
          overflowY: "hidden",
          px: { xs: 2, md: 4 },
          width: "100%",
          maxWidth: "100%",
          boxSizing: "border-box",
          justifyContent: {
            xs: "flex-start",
            md: "center",
          },
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
          },
        }}
      >
        {steps.map((step, index) => (
          <Box
            key={index}
            component={motion.div}
            whileHover={{ y: -8 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
            sx={{
              position: "relative",
              overflow: "hidden",
              boxSizing: "border-box",

              flex: {
                xs: "0 0 88%",
                sm: "0 0 70%",
                md: "0 0 320px",
              },

              minHeight: { xs: 360, md: 420 },

              scrollSnapAlign: "center",
              px: { xs: 2.2, md: 2.4 },
              py: { xs: "24px", md: "34px" },

              borderRadius: "26px",
              textAlign: "center",

              border: "1px solid rgba(201,169,106,0.16)",

              background: `
                linear-gradient(
                  180deg,
                  rgba(16,16,16,0.96) 0%,
                  rgba(10,10,10,0.98) 100%
                )
              `,

              boxShadow: `
                0 26px 70px rgba(0,0,0,0.58),
                inset 0 1px 0 rgba(255,255,255,0.04)
              `,

              backdropFilter: "blur(16px)",

              transition:
                "transform 0.45s cubic-bezier(0.22,1,0.36,1), border-color 0.35s ease, box-shadow 0.35s ease",

              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                borderRadius: "26px",
                background: `
                  radial-gradient(
                    circle at 50% -10%,
                    rgba(201,169,106,0.12),
                    rgba(201,169,106,0.05) 28%,
                    transparent 62%
                  )
                `,
                pointerEvents: "none",
              },

              "&::after": {
                content: '""',
                position: "absolute",
                inset: 0,
                borderRadius: "26px",
                background: `
                  linear-gradient(
                    180deg,
                    rgba(255,255,255,0.03),
                    transparent 22%,
                    transparent 78%,
                    rgba(0,0,0,0.18)
                  )
                `,
                pointerEvents: "none",
              },

              "&:hover": {
                borderColor: "rgba(201,169,106,0.28)",
                boxShadow: `
                  0 34px 90px rgba(0,0,0,0.64),
                  0 0 26px rgba(201,169,106,0.08),
                  inset 0 1px 0 rgba(255,255,255,0.05)
                `,
              },
            }}
          >
            {/* STEP */}
            <Typography
              sx={{
                fontFamily: "Source Code Pro, monospace",
                fontSize: "0.68rem",
                letterSpacing: "0.26em",
                color: "rgba(241, 233, 217, 0.52)",
                mb: 1.2,
                textTransform: "uppercase",
              }}
            >
              STEP {index + 1}
            </Typography>

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
                width: 46,
                height: 46,
                borderRadius: "50%",
                mx: "auto",
                mb: 2.2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(201,169,106,0.92)",
                border: "1px solid rgba(201,169,106,0.18)",
                background: "rgba(201,169,106,0.045)",
                boxShadow: "0 0 18px rgba(201,169,106,0.06)",
              }}
            >
              <FontAwesomeIcon icon={step.icon} />
            </Box>

            {/* TITLE */}
            <Typography
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontSize: { xs: "1.1rem", md: "1.32rem" },
                fontWeight: 500,
                lineHeight: 1.25,
                mb: 2,
                color: "rgba(255,255,255,0.96)",
                letterSpacing: "-0.01em",
              }}
            >
              {step.title}
            </Typography>

            {/* MINI DIVIDER */}
            <Box
              sx={{
                width: 42,
                height: "1px",
                mx: "auto",
                mb: 2.2,
                background:
                  "linear-gradient(90deg, transparent, rgba(201,169,106,0.55), transparent)",
              }}
            />

            {/* TEXT */}
            <Typography
              sx={{
                fontSize: { xs: "0.9rem", md: "0.93rem" },
                lineHeight: 1.85,
                color: "rgba(255,255,255,0.64)",
                whiteSpace: "pre-line",
                maxWidth: "100%",
                wordBreak: "break-word",
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
