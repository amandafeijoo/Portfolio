import { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Understanding your idea",
    text: `We start by talking about your project and your ideas.

You can share references, content, or simply explain what you want to improve.

I’ll listen, ask questions, and help you shape a clear structure for your website.`,
  },
  {
    number: "2",
    title: "Structure & visual direction",
    text: `Based on your input, I define the structure of your website and a visual direction.

This includes layout, colors, typography, and the overall style.

I share progress with you and adjust things together as the design evolves.`,
  },
  {
    number: "3",
    title: "Building the website",
    text: `I develop your website using modern web technologies.

I bring the design to life and turn it into a real, functional website.

I make sure everything works properly across different devices.`,
  },
  {
    number: "4",
    title: "Launch & small improvements",
    text: `Once everything feels right, your website goes live.

After launch, I can help with small changes and fixes.

I’m here to support you as your business grows.`,
  },
];

export default function ProcessCards() {
  const scrollerRef = useRef(null);

  const handleWheel = (e) => {
    if (!scrollerRef.current) return;

    // exactamente igual que en InfoBoxesReserva
    e.preventDefault();
    scrollerRef.current.scrollLeft += e.deltaY;
  };

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 6, md: 10 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        ref={scrollerRef}
        onWheel={handleWheel}
        sx={{
          mt: 10,
          display: "flex",
          gap: 4,
          overflowX: "auto",
          overflowY: "hidden",
          px: 4,
          width: "100%",

          WebkitOverflowScrolling: "touch",

          /* ===== Scrollbar Chrome / Safari ===== */
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
          "&::-webkit-scrollbar-thumb:hover": {
            background:
              "linear-gradient(180deg, rgba(201,169,106,0.85), rgba(201,169,106,0.55))",
          },

          /* ===== Firefox ===== */
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(44, 38, 26, 0.6) rgba(255,255,255,0.05)",
        }}
      >
        {steps.map((step) => (
          <Box
            key={step.number}
            component={motion.div}
            sx={{
              flex: "0 0 320px",
              p: "36px 26px",
              borderRadius: "22px",
              background:
                "linear-gradient(rgba(15,15,15,0.92), rgba(15,15,15,0.92)) padding-box, radial-gradient(120% 140% at 50% 0%, rgba(201,169,106,0.45), rgba(201,169,106,0.12) 35%, rgba(255,255,255,0.12) 55%, rgba(255,255,255,0.04) 75%, transparent 100%) border-box",
              border: "1px solid transparent",
              backdropFilter: "blur(18px)",
              boxShadow: "0 40px 90px rgba(0,0,0,0.55)",
            }}
          >
            {/* Step number */}
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                mx: "auto",
                mb: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.8rem",
                color: "rgba(201,169,106,0.85)",
                border: "1px solid rgba(201,169,106,0.35)",
                background: "rgba(201,169,106,0.05)",
              }}
            >
              {step.number}
            </Box>

            <Typography
              sx={{
                fontSize: "1.1rem",
                fontWeight: 500,
                textAlign: "center",
                mb: 2,
                color: "rgba(255,255,255,0.95)",
              }}
            >
              {step.title}
            </Typography>

            <Typography
              sx={{
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.65)",
                whiteSpace: "pre-line",
                textAlign: "center",
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
