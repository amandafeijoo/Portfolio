import { Box, Typography } from "@mui/material";
import { processFaqs } from "./processData";

export default function ProcessFAQ() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Box sx={{ maxWidth: 860, mb: 5 }}>
        <Typography
          sx={{
            color: "#c9b07a",
            fontSize: "0.76rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          FAQ
        </Typography>

        <Typography
          sx={{
            fontFamily: "Playfair Display, serif",
            fontSize: { xs: "2rem", md: "3rem" },
            lineHeight: 1.08,
            color: "#f4efe6",
          }}
        >
          A few answers before
          <Box component="span" sx={{ color: "#e6d3a8" }}>
            {" "}
            we begin.
          </Box>
        </Typography>
      </Box>

      <Box sx={{ display: "grid", gap: 2 }}>
        {processFaqs.map((faq) => (
          <Box
            key={faq.q}
            sx={{
              p: { xs: 2.5, md: 3 },
              borderRadius: "24px",
              border: "1px solid rgba(180,188,202,0.12)",
              background:
                "linear-gradient(180deg, rgba(12,12,12,0.95) 0%, rgba(7,7,7,0.98) 100%)",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.05rem", md: "1.14rem" },
                color: "#f4efe6",
                mb: 1.1,
              }}
            >
              {faq.q}
            </Typography>

            <Typography
              sx={{
                color: "rgba(244,239,230,0.72)",
                lineHeight: 1.8,
              }}
            >
              {faq.a}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
