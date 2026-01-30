import { Box, Typography, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import { useNavigate } from "react-router-dom";

export default function ProjectContent({ project }) {
  const navigate = useNavigate();
  const isLive = Boolean(project.web);

  const handlePrimary = (e) => {
    e.preventDefault();
    if (project.web) window.open(project.web, "_blank");
    else navigate(`/demopage/${project.title}`);
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        width: "100%",
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      {/* VIDEO */}
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        src={project.videoSrc}
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* GRADIENT */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.8) 100%)",
        }}
      />

      {/* OVERLAY CLICKABLE */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          p: 3,
          gap: 1.4,
          cursor: "pointer",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Source Code Pro, monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#f4f2ed",
            border: "1px solid rgba(201,184,138,0.45)",
            background: "rgba(18,19,20,0.55)",
            px: 1.6,
            py: 0.6,
            borderRadius: 999,
            alignSelf: "flex-start",
          }}
        >
          {isLive ? "LIVE PROJECT" : "DEMO PROJECT"}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Playfair Display, serif",
            fontSize: { xs: "1.4rem", md: "2rem" },
            color: "#F4F2ED",
          }}
        >
          {project.title}
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            onClick={handlePrimary}
            startIcon={<LinkIcon />}
            sx={{
              px: 3,
              py: 1.2,
              fontSize: "0.65rem",
              letterSpacing: "0.14em",
              borderRadius: 999,
              color: "#f5f0e8",
              border: "1px solid rgba(201,184,138,0.45)",
              background: "rgba(18,19,20,0.45)",
            }}
          >
            {isLive ? "Website" : "View Case →"}
          </Button>

          {project.githubLink && (
            <Button
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.githubLink, "_blank");
              }}
              startIcon={<GitHubIcon />}
              sx={{
                px: 3,
                py: 1.2,
                fontSize: "0.65rem",
                borderRadius: 999,
                background: "transparent",
                color: "#e6d5bc",
                border: "1px solid rgba(201,184,138,0.35)",
              }}
            >
              GitHub
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}
