import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import Wavify from "react-wavify";

/* =========================
   ACTION BUTTON STYLES
========================= */
const actionButtonSx = {
  px: { xs: 2, md: 3.5 },
  py: { xs: 1, md: 1.4 },
  fontSize: { xs: "0.6rem", md: "0.7rem" },
  letterSpacing: "0.14em",
  borderRadius: "999px",

  color: "#f5f0e8",
  border: "1px solid rgba(200,164,106,0.35)",
  backgroundColor: "rgba(255,255,255,0.035)",

  maxWidth: 260,
  mx: "auto",

  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.08)",
  },
};

const SingleProjectCard = ({ project }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        position: "relative", 
        maxWidth: 880,
        mx: "auto",
        px: { xs: 1.5, sm: 2, md: 3.5 },
        py: { xs: 2.5, md: 5 },
        borderRadius: { xs: 14, md: 22 },
        minHeight: { md: 600 }, // 👈 SOLO DESKTOP

        backgroundColor: "rgba(38,38,38,0.96)",
        border: "1px solid rgba(224,204,167,0.28)",

        boxShadow: {
          xs: "0 10px 26px rgba(0,0,0,0.45)",
          md: `
            0 28px 65px rgba(0,0,0,0.55),
            inset 0 40px 80px rgba(200,164,106,0.08),
            inset 0 0 18px rgba(255,255,255,0.12),
            inset 0 -12px 24px rgba(0,0,0,0.2)
          `,
        },

        overflow: "hidden",
      }}
    >
      {/* =====================
         CONTENT (zIndex 1)
      ===================== */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        {/* VIDEO */}
        <Box
          sx={{
            height: { xs: 140, sm: 160, md: 390 },
            width: "90%",
            mx: "auto",
            mb: { xs: 1.5, md: 2.5 },
            overflow: "hidden",
            borderRadius: 14,
          }}
        >
          <Box
            component="video"
            autoPlay
            muted
            loop
            playsInline
            src={project.videoSrc}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* TITLE */}
        <Typography
          sx={{
            fontFamily: "Playfair Display, serif",
            fontSize: { xs: "1.05rem", md: "1.4rem" },
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(210,195,170,0.9)",
            mb: 0.5,
          }}
        >
          {project.title}
        </Typography>

        {/* DESCRIPTION */}
        <Typography
          sx={{
            fontSize: { xs: "0.8rem", md: "0.99rem" },
            lineHeight: { xs: 1.45, md: 1.7 },
            color: "rgba(205,200,192,0.75)",
            mb: 1,

            display: "-webkit-box",
            WebkitLineClamp: { xs: 3, md: "unset" },
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {project.comment}
        </Typography>

        {/* TECHNOLOGIES (desktop only) */}
        {!isMobile && (
          <Typography
            sx={{
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(180,170,155,0.6)",
              mb: 5,
            }}
          >
            {project.technologies}
          </Typography>
        )}

        {/* ACTIONS */}
        <Box
          sx={{
            display: "inline-flex",
            borderRadius: "999px",
            border: "1px solid rgba(200,164,106,0.35)",
            overflow: "hidden",
            mx: "auto",
            mt: { xs: 1.5, md: 1 },

            backgroundColor: "rgba(255,255,255,0.035)",

            /* ✨ HALO BASE */
            boxShadow: `
      0 0 0 1px rgba(200,164,106,0.25),
      0 0 18px rgba(200,164,106,0.35)
    `,

            transition: "box-shadow 0.35s ease",

            /* ✨ HALO HOVER */
            "&:hover": {
              boxShadow: `
        0 0 0 1px rgba(200,164,106,0.45),
        0 0 32px rgba(200,164,106,0.65),
        0 0 60px rgba(200,164,106,0.35)
      `,
            },
          }}
        >
          {/* GITHUB */}
          <Button
            href={project.githubLink}
            target="_blank"
            startIcon={<GitHubIcon />}
            sx={{
              px: { xs: 2.2, md: 3 },
              py: { xs: 1, md: 1.2 },
              fontSize: { xs: "0.6rem", md: "0.7rem" },
              letterSpacing: "0.14em",
              color: "#f5f0e8",

              borderRadius: 0,
              borderRight: "1px solid rgba(200,164,106,0.25)",

              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.08)",
                color: "#f5f0e8",
              },
            }}
          >
            GitHub
          </Button>

          {/* WEBSITE o DEMO */}
          {project.web ? (
            <Button
              href={project.web}
              target="_blank"
              startIcon={<LinkIcon />}
              sx={{
                px: { xs: 2.2, md: 3 },
                py: { xs: 1, md: 1.2 },
                fontSize: { xs: "0.6rem", md: "0.7rem" },
                letterSpacing: "0.14em",
                color: "#f5f0e8",

                borderRadius: 0,

                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.08)",
                  color: "#f5f0e8",
                },
              }}
            >
              Website
            </Button>
          ) : (
            <Button
              onClick={(e) => handleDemoClick(e, project.title)}
              startIcon={<LinkIcon />}
              sx={{
                px: { xs: 2.2, md: 3 },
                py: { xs: 1, md: 1.2 },
                fontSize: { xs: "0.6rem", md: "0.7rem" },
                letterSpacing: "0.14em",
                color: "#f5f0e8",
                borderRadius: 0,

                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.08)",
                  color: "#f5f0e8",
                },
              }}
            >
              View Demo
            </Button>
          )}
        </Box>
      </Box>

      {/* =====================
         WAVE BACKGROUND
      ===================== */}
      <Box
        component={Wavify}
        fill="rgba(245, 244, 242, 0.35)"
        paused={false}
        options={{ height: 12, amplitude: 14, speed: 0.12, points: 3 }}
        sx={{
          position: "absolute",
          bottom: { xs: -16, sm: -24, md: -35 },
          left: 0,

          width: "100%",
          height: { xs: 32, sm: 50, md: 100 },

          transform: {
            xs: "scaleY(1.6)",
            sm: "scaleY(2.4)",
            md: "scaleY(3.2)",
          },

          opacity: 0.22,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
    </Box>
  );
};

export default SingleProjectCard;
