import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FooterSocial from "./FooterSocial";

export default function Footer() {
  const navigate = useNavigate();

  return (
    /* =========================
       FOOTER OUTER (FULL BLEED)
    ========================= */
    <Box
      component="footer"
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        background:
          "linear-gradient(180deg, rgb(14,15,16) 0%, rgb(22,23,24) 100%)",
        borderTop: {
          xs: "1px solid rgba(240,230,210,0.45)",
          md: "1px solid rgba(240,230,210,0.85)",
        },
        borderBottom: {
          xs: "1px solid rgba(240,230,210,0.45)",
          md: "1px solid rgba(240,230,210,0.85)",
        },
        borderLeft: {
          xs: "1px solid rgba(240,230,210,0.25)",
          md: "1px solid rgba(240,230,210,0.45)",
        },
        borderRight: {
          xs: "1px solid rgba(240,230,210,0.25)",
          md: "1px solid rgba(240,230,210,0.45)",
        },

        overflow: "hidden",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(80% 40% at 50% 0%, rgba(255,255,255,0.04), transparent 70%)",
          pointerEvents: "none",
        },
      }}
    >
      {/* =========================
         FOOTER INNER (CENTERED)
      ========================= */}
      <Box
        sx={{
          maxWidth: 1400,
          mx: "auto",
          px: { xs: 2, sm: 3, md: 6 },
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ---------- TOP ---------- */}
        <Box
          sx={{
            py: { xs: 4, sm: 3, md: 2.5 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: { xs: 3.5, md: 4 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* LEFT */}
          <Box>
            <Box
              component="img"
              src="https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767547942/new_brush_ktsbyr.png"
              alt="Webcode-art logo"
              sx={{
                width: { xs: 28, sm: 32, md: 34 },
                mb: 1.5,
                opacity: 0.85,
                mx: { xs: "auto", md: 0 },
              }}
            />

            <Typography
              sx={{
                fontFamily: "Playfair Display, serif",
                letterSpacing: { xs: "0.24em", sm: "0.32em" },
                fontSize: { xs: "0.85rem", sm: "1.05rem" },
                color: "rgba(201,169,106,0.55)",
                textShadow: "0 0 12px rgba(201,169,106,0.25)",
                mb: 1,
              }}
            >
              WEBCODE-ART
            </Typography>

            <Typography
              sx={{
                fontFamily: "Playfair Display, serif",
                fontSize: { xs: "0.72rem", sm: "0.8rem" },
                lineHeight: 1.75,
                color: "rgba(200,200,195,0.6)",
                maxWidth: { xs: 280, sm: 420 },
                mx: { xs: "auto", md: 0 },
              }}
            >
              Crafting thoughtful digital experiences
              <br />
              through design & code.
            </Typography>
          </Box>

          {/* RIGHT */}
          <Box
            sx={{
              mt: { xs: 3, md: 0 },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FooterSocial variant="icons" />
          </Box>
        </Box>

        {/* ---------- BOTTOM ---------- */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            py: { xs: 3.5, sm: 2.5 },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: { xs: 2, sm: 2 },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Playfair Display, serif",
              fontSize: { xs: "0.65rem", sm: "0.7rem" },
              color: "rgba(180,180,175,0.5)",
              textShadow: "0 0 8px rgba(180,180,175,0.15)",
            }}
          >
            © {new Date().getFullYear()} WEBCODE-ART. All Rights Reserved.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: { xs: 2, sm: 1.5 },
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              onClick={() => navigate("/privacy-policy")}
              sx={{
                fontSize: "0.65rem",
                color: "rgba(201,169,106,0.55)",
                cursor: "pointer",
                transition: "all 0.25s ease",
                "&:hover": {
                  color: "rgba(201,169,106,0.9)",
                  textShadow: "0 0 12px rgba(201,169,106,0.25)",
                },
              }}
            >
              Privacy Policy
            </Typography>

            <Typography sx={{ color: "rgba(180,180,175,0.35)" }}>·</Typography>

            <Typography
              onClick={() => navigate("/legal-notice")}
              sx={{
                fontSize: "0.65rem",
                color: "rgba(201,169,106,0.55)",
                cursor: "pointer",
                transition: "all 0.25s ease",
                "&:hover": {
                  color: "rgba(201,169,106,0.9)",
                  textShadow: "0 0 12px rgba(201,169,106,0.25)",
                },
              }}
            >
              Legal Notice
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
