import { useRef } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faPalette,
  faCode,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import ProcessHero from "./ProcessHero";

const steps = [
  {
    step: "Step 1",
    number: "01",
    label: "Discovery",
    icon: faLightbulb,
    title: "Understanding your goals",
    text: "We start with a conversation. You share your business, ideas and priorities. Together, we define the right direction for your website.",
    glow: "rgba(201,169,106,0.18)",
    accent: "rgba(201,169,106,0.55)",
  },
  {
    step: "Step 2",
    number: "02",
    label: "Direction",
    icon: faPalette,
    title: "Structure & visual direction",
    text: "I shape the layout, visual system and hierarchy. Typography, spacing and design decisions are crafted with intention.",
    glow: "rgba(244,240,232,0.12)",
    accent: "rgba(231,201,143,0.48)",
  },
  {
    step: "Step 3",
    number: "03",
    label: "Development",
    icon: faCode,
    title: "Building the experience",
    text: "I turn the design into a functional, responsive website. Every section is built carefully to feel clear, polished and aligned with your goals.",
    glow: "rgba(143,168,201,0.16)",
    accent: "rgba(180,198,224,0.42)",
  },
  {
    step: "Step 4",
    number: "04",
    label: "Launch",
    icon: faRocket,
    title: "Launch & refinement",
    text: "Your website goes live with clarity and confidence. After launch, I can continue supporting updates and improvements when needed.",
    glow: "rgba(230,211,168,0.16)",
    accent: "rgba(244,240,232,0.35)",
  },
];

export default function ProcessScrollStory({ scrollContainerRef }) {
  const sectionRef = useRef(null);
  const isMobile = useMediaQuery("(max-width:768px)");

  const totalSlides = 1 + steps.length;
  
  console.log("scrollContainerRef prop:", scrollContainerRef);
  console.log("scrollContainerRef current:", scrollContainerRef?.current);
  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    target: sectionRef,
    offset: ["start start", "end end"],
    layoutEffect: false,
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", `-${(totalSlides - 1) * 100}vw`]
  );

  return (
    <Box
      ref={sectionRef}
      sx={{
        position: "relative",
        height: `${totalSlides * 100}vh`,
        background: "#000",
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          background: "#000",
        }}
      >
        <Box
          component={motion.div}
          style={{ x }}
          sx={{
            display: "flex",
            width: `${totalSlides * 100}vw`,
            height: "100%",
          }}
        >
          {/* HERO SLIDE */}
          <Box
            sx={{
              width: "100vw",
              height: "100vh",
              flexShrink: 0,
              position: "relative",
              overflow: "hidden",
              background: "#000",
            }}
          >
            <ProcessHero />
          </Box>

          {/* STEP SLIDES */}
          {steps.map((step) => (
            <Box
              key={step.step}
              sx={{
                width: "100vw",
                height: "100vh",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: { xs: 3, md: 8, lg: 10 },
                position: "relative",
                overflow: "hidden",
                background: `
                  radial-gradient(circle at 50% 50%, ${step.glow} 0%, rgba(0,0,0,0) 45%),
                  linear-gradient(180deg, rgba(6,6,6,1) 0%, rgba(0,0,0,1) 100%)
                `,
              }}
            >
              {/* BIG AMBIENT GLOW */}
              <Box
                sx={{
                  position: "absolute",
                  width: { xs: 280, md: 500, lg: 620 },
                  height: { xs: 280, md: 500, lg: 620 },
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${step.glow} 0%, rgba(0,0,0,0) 70%)`,
                  filter: "blur(40px)",
                  opacity: 0.9,
                  zIndex: 0,
                }}
              />

              {/* SIDE VIGNETTE */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: `
                    linear-gradient(
                      90deg,
                      rgba(0,0,0,0.88) 0%,
                      rgba(0,0,0,0.18) 18%,
                      rgba(0,0,0,0.18) 82%,
                      rgba(0,0,0,0.88) 100%
                    )
                  `,
                  pointerEvents: "none",
                  zIndex: 1,
                }}
              />

              {/* DECORATIVE TOP LIGHT */}
              <Box
                sx={{
                  position: "absolute",
                  top: "8%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: { xs: "58%", md: "42%" },
                  height: "1px",
                  background: `linear-gradient(90deg, transparent, ${step.accent}, transparent)`,
                  opacity: 0.7,
                  zIndex: 1,
                }}
              />

              {/* CARD */}
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.45 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                sx={{
                  position: "relative",
                  zIndex: 2,

                  width: "100%",
                  maxWidth: { xs: 340, sm: 420, md: 620, lg: 720 },
                  minHeight: { xs: 420, sm: 460, md: 520, lg: 560 },

                  borderRadius: { xs: "24px", md: "30px" },

                  px: { xs: 3, sm: 4, md: 5.5, lg: 6.5 },
                  py: { xs: 5.5, sm: 6, md: 7, lg: 7.5 },

                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center", // 🔥 CENTRADO REAL
                  alignItems: "center",
                  gap: { xs: 1.2, md: 1.6 },

                  background: `
      linear-gradient(
        180deg,
        rgba(18,18,18,0.95) 0%,
        rgba(10,10,10,0.98) 100%
      )
    `,

                  border: "1px solid rgba(201,169,106,0.16)",

                  boxShadow: `
      0 30px 90px rgba(0,0,0,0.62),
      0 0 40px rgba(201,169,106,0.08),
      inset 0 1px 0 rgba(255,255,255,0.05)
    `,

                  textAlign: "center",
                  overflow: "hidden",
                  backdropFilter: "blur(14px)",

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    borderRadius: { xs: "24px", md: "30px" },
                    background: `
        radial-gradient(
          circle at 50% -10%,
          rgba(255,255,255,0.05),
          transparent 34%
        )
      `,
                    pointerEvents: "none",
                  },
                }}
              >
                {/* NUMBER */}
                <Typography
                  sx={{
                    position: "absolute",
                    top: { xs: 18, md: 22 },
                    right: { xs: 18, md: 26 },
                    fontFamily: '"Playfair Display", serif',
                    fontSize: { xs: "4.2rem", md: "6rem", lg: "7rem" },
                    lineHeight: 1,
                    color: "rgba(255,255,255,0.035)",
                    letterSpacing: "-0.04em",
                    pointerEvents: "none",
                    zIndex: 1,
                  }}
                >
                  {step.number}
                </Typography>

                {/* ICON */}
                <Box
                  sx={{
                    width: { xs: 58, md: 68 },
                    height: { xs: 58, md: 68 },
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    color: "#f4f0e8",
                    border: "1px solid rgba(201,169,106,0.2)",
                    background: "rgba(201,169,106,0.06)",
                    boxShadow: `
        0 0 28px rgba(201,169,106,0.08),
        inset 0 1px 0 rgba(255,255,255,0.04)
      `,
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      inset: -10,
                      borderRadius: "50%",
                      background: `radial-gradient(circle, ${step.glow} 0%, rgba(0,0,0,0) 72%)`,
                      filter: "blur(14px)",
                      opacity: 0.9,
                      zIndex: -1,
                    },
                  }}
                >
                  <FontAwesomeIcon
                    icon={step.icon}
                    style={{ fontSize: "1.15rem" }}
                  />
                </Box>

                {/* STEP */}
                <Typography
                  sx={{
                    fontFamily: "Source Code Pro, monospace",
                    fontSize: { xs: "0.62rem", md: "0.72rem" },
                    letterSpacing: "0.26em",
                    color: "rgba(241, 233, 217, 0.52)",
                    textTransform: "uppercase",
                  }}
                >
                  {step.step}
                </Typography>

                {/* LABEL */}
                <Typography
                  sx={{
                    fontFamily: "Source Code Pro, monospace",
                    fontSize: { xs: "0.68rem", md: "0.78rem" },
                    letterSpacing: "0.16em",
                    color: step.accent,
                    textTransform: "uppercase",
                  }}
                >
                  {step.label}
                </Typography>

                {/* TITLE */}
                <Typography
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontSize: {
                      xs: "1.8rem",
                      sm: "2.05rem",
                      md: "2.45rem",
                      lg: "2.8rem",
                    },
                    color: "#f4f0e8",
                    lineHeight: 1.12,
                    letterSpacing: "-0.02em",
                    maxWidth: { xs: "100%", md: "88%" },
                  }}
                >
                  {step.title}
                </Typography>

                {/* DIVIDER */}
                <Box
                  sx={{
                    width: 62,
                    height: "1px",
                    background: `linear-gradient(90deg, transparent, ${step.accent}, transparent)`,
                    mt: 0.5,
                    mb: 0.5,
                  }}
                />

                {/* TEXT */}
                <Typography
                  sx={{
                    fontSize: { xs: "0.98rem", sm: "1.02rem", md: "1.08rem" },
                    lineHeight: { xs: 1.9, md: 1.95 },
                    color: "rgba(255,255,255,0.72)",
                    whiteSpace: "pre-line",
                    maxWidth: { xs: "100%", md: "86%" },
                    mb: 0.5, // 👈 pequeño empuje visual
                  }}
                >
                  {step.text}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
