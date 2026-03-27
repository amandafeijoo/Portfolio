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
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 3,
        mt: { xs: 7, md: 18 },
        background: "#000",
        overflow: "hidden",
      }}
    >
      <ThreeContactBackground mode="ambient" />

      <Box sx={{ position: "relative", zIndex: 2, maxWidth: 800 }}>
        {/* KICKER */}
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
          Contact
        </Typography>

        {/* TITLE */}
        <Typography
          sx={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 500,
            lineHeight: 1.08,
            fontSize: {
              xs: "clamp(1.8rem, 7vw, 2.4rem)",
              sm: "clamp(2.6rem, 6vw, 3.2rem)",
              md: "clamp(3rem, 5vw, 3.8rem)",
            },
            letterSpacing: "-0.02em",
            color: "#f4f0e8",
            mb: 4,
          }}
        >
          Ready to{" "}
          <Box component="span" sx={{ color: "#e8c98f" }}>
            grow your business
          </Box>{" "}
          online?
        </Typography>

        {/* CTA */}
        <InviteCTA onClick={() => navigate("/contact")}>
          Start your project →
        </InviteCTA>
      </Box>
    </Box>
  );
}
