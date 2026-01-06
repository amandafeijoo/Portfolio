import React from "react";
import { motion } from "framer-motion";
import {
  Section,
  SectionCard,
  SectionGlow,
  Title,
  TitleDivider,
  VerticalDivider,
  Subtitle,
  IntroText,
  Statement,
  StatementStrong,
  ScrollHint,
  MobileDivider,
} from "./styles/WhatIDoText.styles";

/* ===============================
   MOTION CONFIG
================================ */

const titleFloatInfinite = {
  animate: {
    y: [0, -14, 0],
    scale: [1, 1.015, 1],
    transition: {
      duration: 8,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const fadeUpDelayed = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
      delay: 0.25,
    },
  },
};

const scrollHintMotion = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: [0.25, 0.6, 0.25],
    y: [0, 6, 0],
    transition: {
      duration: 3.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

/* ===============================
   COMPONENT
================================ */

export default function WhatIDoText() {
  return (
    <Section>
      <SectionCard>
        {/* Glow radial de profundidad */}
        <SectionGlow />
        <Title as={motion.h2} variants={titleFloatInfinite} animate="animate">
          WHAT I DO
        </Title>
        <Subtitle
          as={motion.p}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          Websites designed to work for your business
        </Subtitle>
        {/* Frase fuerte */}
        <StatementStrong
          as={motion.p}
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          I design and build complete websites from start to finish.
        </StatementStrong>

        {/* Explicación */}
        <IntroText
          as={motion.p}
          variants={fadeUpDelayed}
          initial="hidden"
          animate="show"
        >
          From how your website looks, to how it works behind the scenes, and
          how it helps you attract more clients.
        </IntroText>

        {/* Statement final */}
        <Statement
          as={motion.p}
          variants={fadeUpDelayed}
          initial="hidden"
          animate="show"
        >
          You don’t need to understand the technical side. I handle it for you.
        </Statement>
        <VerticalDivider />
        <MobileDivider />

        {/* Scroll hint */}
        <ScrollHint>
          <span className="text">Scroll to explore</span>

          <span className="arrowBtn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </ScrollHint>
      </SectionCard>
    </Section>
  );
}
