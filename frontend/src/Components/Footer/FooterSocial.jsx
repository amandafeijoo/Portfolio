import { Box, Stack, Typography } from "@mui/material";

export default function FooterSocial() {
  return (
    <Box sx={{ mt: { xs: -2, md: 8 }, textAlign: "center" }}>
      <Typography
        sx={{
          fontSize: "0.65rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "rgba(120,120,120,0.7)",
          mb: { xs: 3, sm: 5 },
        }}
      >
        Follow
      </Typography>

      <Stack direction="row" spacing={3} justifyContent="center">
        {[
          {
            href: "https://github.com/amandafeijoo",
            icon: "fab fa-github",
          },
          {
            href: "https://www.linkedin.com/in/amanda-flores-feijoo-93956a156",
            icon: "fab fa-linkedin-in",
          },
          {
            href: "https://www.instagram.com/webcode.art/",
            icon: "fab fa-instagram",
          },
        ].map((item, i) => (
          <Box
            key={i}
            component="a"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontSize: "1.25rem",
              color: "rgba(140,140,140,0.6)",
              transition: "all 240ms ease",
              "&:hover": {
                color: "#7e6a3f",
                transform: "translateY(-2px)",
              },
            }}
          >
            <i className={item.icon} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
