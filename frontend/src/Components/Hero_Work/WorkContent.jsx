import { Box, Typography, Button } from "@mui/material";

export default function WorkContent({ project }) {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: { xs: 28, md: 42 },
        left: { xs: 20, md: 42 },
        maxWidth: 520,
        color: "#f5f0e8",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Playfair Display, serif",
          fontSize: "clamp(1.4rem, 3vw, 2rem)",
          mb: 1,
        }}
      >
        {project.title}
      </Typography>

      <Typography
        sx={{
          fontSize: "0.95rem",
          lineHeight: 1.6,
          color: "rgba(245,240,232,0.75)",
          mb: 2,
        }}
      >
        {project.comment}
      </Typography>

      <Button
        href={project.web || project.githubLink}
        target="_blank"
        sx={{
          px: 3,
          py: 1.2,
          borderRadius: "999px",
          border: "1px solid rgba(200,164,106,0.6)",
          color: "#f5f0e8",
          fontSize: "0.7rem",
          letterSpacing: "0.14em",
          backdropFilter: "blur(6px)",
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.08)",
          },
        }}
      >
        VIEW PROJECT
      </Button>
    </Box>
  );
}
