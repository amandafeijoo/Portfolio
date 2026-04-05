import React, { useState } from "react";
import { Box, ButtonBase, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  CardText,
  CardIntro,
  PanelContent,
  PanelInner,
  CardBullets,
  CardLink,
  PlaceholderMedia,
  CardImg,
} from "./WhatIDoCard.styles";
import WhatIDoCardMedia from "../WhatIDoCardMedia";

export default function WhatIDoCard({
  item,
  isFirst = false,
  targetRef = null,
  onMouseMove,
  onMouseLeave,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const isExternal = item.route?.startsWith("http");

  return (
    <Box
      component={motion.div}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      sx={{
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box",
        width: "100%",
        minHeight: 640,
        px: { xs: 2, md: 2.4 },
        py: { xs: "22px", md: "28px" },
        borderRadius: "30px",
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
          borderRadius: "30px",
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
          borderRadius: "30px",
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
        "@media (max-width:768px)": {
          minHeight: "auto",
          borderRadius: "24px",
        },
      }}
    >
      {isFirst ? (
        <CardImg ref={targetRef}>
          <PlaceholderMedia />
        </CardImg>
      ) : (
        <CardImg>
          <WhatIDoCardMedia item={item} />
        </CardImg>
      )}

      <Typography
        sx={{
          mt: 3,
          fontSize: { xs: "1.05rem", md: "1.10rem" },
          lineHeight: 1.2,
          fontWeight: 600,
          color: "rgba(244,239,230,0.96)",
          fontFamily: `"Inter", sans-serif`,
        }}
      >
        {item.title}
      </Typography>

      <Box
        sx={{
          width: { xs: 76, md: 108 },
          height: "1px",
          mx: "auto",
          mt: 2,
          mb: 2,
          background:
            "linear-gradient(90deg, transparent, rgba(231,201,143,0.82), transparent)",
          boxShadow: "0 0 14px rgba(231,201,143,0.10)",
        }}
      />

      <CardIntro>{item.intro}</CardIntro>

      <Box
        sx={{
          mt: 2.3,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ButtonBase
          disableRipple
          disableTouchRipple
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1.2,
            p: 0,
            borderRadius: "999px",
            "&:focus": { outline: "none" },
            "&:focus-visible": { outline: "none", boxShadow: "none" },
            "& .MuiTouchRipple-root": { display: "none" },
          }}
        >
          <Typography
            sx={{
              fontSize: "0.68rem",
              lineHeight: 1,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(244,239,230,0.88)",
              fontFamily: `"Source Code Pro", monospace`,
            }}
          >
            {isOpen ? "LESS" : "MORE"}
          </Typography>

          <Box
            sx={{
              width: 34,
              height: 34,
              borderRadius: "999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#e7c98f",
              fontSize: "0.95rem",
              border: "1px solid rgba(201,169,106,0.20)",
              background: `
                radial-gradient(circle at 30% 30%, rgba(255,255,255,0.05), transparent 45%),
                linear-gradient(180deg, rgba(201,169,106,0.10), rgba(201,169,106,0.04))
              `,
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.05), 0 8px 18px rgba(0,0,0,0.22)",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition:
                "transform 0.35s ease, border-color 0.25s ease, box-shadow 0.25s ease",
            }}
          >
            <Box component="span" sx={{ transform: "translateY(-4px)" }}>
              ⌄
            </Box>
          </Box>
        </ButtonBase>
      </Box>

      <PanelContent $open={isOpen}>
        <PanelInner>
          <CardText>{item.text}</CardText>

          <CardBullets>
            {item.bullets.slice(0, 3).map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </CardBullets>

          <CardLink
            href={item.route}
            target={isExternal ? "_blank" : "_self"}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            {item.cta} →
          </CardLink>
        </PanelInner>
      </PanelContent>
    </Box>
  );
}
