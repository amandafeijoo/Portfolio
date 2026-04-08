import { Box, Typography } from "@mui/material";

export default function ProcessCollaboration() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Box
        sx={{
          p: { xs: 3, md: 4 },
          borderRadius: "30px",
          border: "1px solid rgba(201,176,122,0.12)",
          background:
            "radial-gradient(circle at top, rgba(201,176,122,0.05) 0%, rgba(12,12,12,0.96) 34%, rgba(5,5,5,0.99) 100%)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.28)",
        }}
      >
        <Typography
          sx={{
            color: "#c9b07a",
            fontSize: "0.76rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          Working together
        </Typography>

        <Typography
          sx={{
            fontFamily: "Playfair Display, serif",
            fontSize: { xs: "1.9rem", md: "2.7rem" },
            lineHeight: 1.08,
            color: "#f4efe6",
            mb: 2,
          }}
        >
          Collaborative, but
          <Box component="span" sx={{ color: "#e6d3a8" }}>
            {" "}
            never overwhelming.
          </Box>
        </Typography>

        <Typography
          sx={{
            color: "rgba(244,239,230,0.74)",
            lineHeight: 1.8,
            maxWidth: 860,
            fontSize: { xs: "1rem", md: "1.05rem" },
          }}
        >
          You are involved in the important decisions, but without needing to
          manage the technical side. My role is to guide the process, simplify
          complexity and make sure the project feels clear from beginning to
          end.
        </Typography>
      </Box>
    </Box>
  );
}
