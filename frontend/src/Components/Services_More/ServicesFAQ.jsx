import { Box, Typography } from "@mui/material";

const faqs = [
  {
    q: "Can I ask for something outside the packages?",
    a: "Yes. The packages are a starting point. If your project needs something more tailored, I can prepare a custom quote.",
  },
  {
    q: "Do you only design or also develop?",
    a: "I do both. I work on the visual direction and the technical implementation, depending on the scope of the project.",
  },
  {
    q: "Do you offer booking systems or payments?",
    a: "Yes, for projects that require it. More advanced functionality such as bookings, payments, dashboards or custom user flows usually fits within custom solutions.",
  },
  {
    q: "How do we start?",
    a: "Usually with a first conversation about your goals, timeline and what kind of online presence or functionality you need.",
  },
];

export default function ServicesFAQ() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Box sx={{ maxWidth: 780, mb: 5 }}>
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
            color: "#f4efe6",
            lineHeight: 1.08,
            mb: 2,
          }}
        >
          A few answers
          <Box component="span" sx={{ color: "#e7c98f" }}>
            {" "}
            before we begin.
          </Box>
        </Typography>
      </Box>

      <Box sx={{ display: "grid", gap: 2 }}>
        {faqs.map((faq) => (
          <Box
            key={faq.q}
            sx={{
              p: { xs: 2.5, md: 3 },
              borderRadius: "24px",
              border: "1px solid rgba(214,183,122,0.12)",
              background:
                "linear-gradient(180deg, rgba(12,12,12,0.95) 0%, rgba(7,7,7,0.98) 100%)",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1.08rem", md: "1.16rem" },
                color: "#f4efe6",
                mb: 1.2,
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
