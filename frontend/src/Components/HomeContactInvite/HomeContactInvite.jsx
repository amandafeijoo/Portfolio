import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ThreeContactBackground from "../Contact/ThreeContactBackground";
import { InviteCTA } from "./HomeContact.styles";

export default function HomeContactInvite() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 3,
        background: "#000",
        overflow: "hidden",
      }}
    >
      <ThreeContactBackground mode="ambient" />

      {/* SOFT HALO */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            width: { xs: 260, sm: 340, md: 420 },
            height: { xs: 260, sm: 340, md: 420 },
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(232, 201, 143, 0.14), transparent 70%)",
            filter: "blur(60px)",
            opacity: 0.9,
          }}
        />
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: 860,
          width: "100%",
        }}
      >
        <Typography
          sx={{
            mb: 2,
            fontSize: "0.65rem",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "#c9b07a",
            opacity: 0.8,
          }}
        >
          Start your project
        </Typography>

        <Typography
          sx={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 500,
            lineHeight: 1.08,
            fontSize: {
              xs: "clamp(1.9rem, 8vw, 2.6rem)",
              sm: "clamp(2.7rem, 6vw, 3.4rem)",
              md: "clamp(3.2rem, 5vw, 4.2rem)",
              lg: "clamp(3.8rem, 4.5vw, 4.9rem)",
              xl: "clamp(4.3rem, 4vw, 5.4rem)",
            },
            letterSpacing: "-0.02em",
            color: "#f4f0e8",
            mb: 3,
          }}
        >
          Ready to{" "}
          <Box component="span" sx={{ color: "#e8c98f" }}>
            grow your business
          </Box>
          <br />
          and turn visitors into real clients?
        </Typography>

        <Typography
          sx={{
            maxWidth: 680,
            mx: "auto",
            mb: { xs: 4, md: 5 },
            fontSize: { xs: "0.95rem", md: "1.08rem" },
            lineHeight: 1.8,
            color: "rgba(255,255,255,0.72)",
          }}
        >
          I design and build websites that attract, engage and convert — crafted
          to support the way your business grows.
        </Typography>

        <InviteCTA onClick={() => navigate("/contact")}>
          Start your project →
        </InviteCTA>
      </Box>
    </Box>
  );
}
