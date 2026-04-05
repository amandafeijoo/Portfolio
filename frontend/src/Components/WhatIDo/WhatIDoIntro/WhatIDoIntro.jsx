import React from "react";
import { Box } from "@mui/material";
import {
  IntroHero,
  IntroTextWrap,
  HeroTitle,
  HeroText,
  IntroMediaSlot,
  MetaLine,
  TitleDivider,
} from "./WhatIDoIntro.styles";

export default function WhatIDoIntro({ introCopy, isDesktop, startRef }) {
  return (
    <IntroHero style={{ position: "relative", overflow: "hidden" }}>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          top: { xs: "8%", md: "10%" },
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "80%", sm: "70%", md: "58%" },
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(201,176,122,0.16), rgba(232,201,143,0.40), rgba(201,176,122,0.16), transparent)",
          opacity: 0.9,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: { xs: "12%", md: "14%" },
          transform: "translate(-50%, -50%)",
          width: { xs: 260, sm: 360, md: 460, lg: 560 },
          height: { xs: 100, sm: 120, md: 150, lg: 180 },
          borderRadius: "50%",
          background: `
            radial-gradient(
              ellipse at center,
              rgba(232, 201, 143, 0.12) 0%,
              rgba(201, 176, 122, 0.06) 34%,
              rgba(0,0,0,0) 76%
            )
          `,
          filter: "blur(28px)",
          opacity: 0.95,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: { xs: "17%", md: "18%" },
          transform: "translateX(-50%)",
          width: { xs: 110, sm: 150, md: 190, lg: 220 },
          height: { xs: 230, sm: 280, md: 340, lg: 400 },
          borderRadius: "50%",
          background: `
            radial-gradient(
              ellipse at center,
              rgba(232, 201, 143, 0.08) 0%,
              rgba(201, 176, 122, 0.035) 30%,
              rgba(201, 176, 122, 0.012) 54%,
              rgba(0,0,0,0) 76%
            )
          `,
          filter: "blur(26px)",
          opacity: 0.72,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: { xs: "34%", md: "36%" },
          transform: "translate(-50%, -50%)",
          width: { xs: 420, sm: 620, md: 820, lg: 980 },
          height: { xs: 320, sm: 380, md: 460, lg: 520 },
          borderRadius: "50%",
          background: `
            radial-gradient(
              ellipse at center,
              rgba(232, 201, 143, 0.08) 0%,
              rgba(232, 201, 143, 0.04) 24%,
              rgba(232, 201, 143, 0.016) 42%,
              rgba(0,0,0,0) 72%
            )
          `,
          filter: "blur(58px)",
          opacity: 0.82,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <IntroTextWrap style={{ position: "relative", zIndex: 1 }}>
        <MetaLine>{introCopy.meta}</MetaLine>
        <TitleDivider />

        <HeroTitle>
          {introCopy.titleLine1}
          <br />
          <span className="highlight">{introCopy.highlight}</span>
        </HeroTitle>

        <HeroText>{introCopy.text}</HeroText>
      </IntroTextWrap>

      {isDesktop && (
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <IntroMediaSlot ref={startRef} />
        </Box>
      )}
    </IntroHero>
  );
}
