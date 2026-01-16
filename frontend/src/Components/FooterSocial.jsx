import { Box, Typography, Stack, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/amandafeijoo",
    icon: <GitHubIcon fontSize="small" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amanda-flores-feijoo-93956a156",
    icon: <LinkedInIcon fontSize="small" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/webcode.art/",
    icon: <InstagramIcon fontSize="small" />,
  },
];

export function FooterSocial({ variant = "list" }) {
  if (variant === "icons") {
    return (
      <Box textAlign="right">
        <Typography
          sx={{
            fontSize: "0.65rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(240,230,210,0.85)",
            mb: 2,
          }}
        >
          Follow
        </Typography>

        <Box display="flex" gap={1.5} justifyContent="flex-end">
          {socials.map((item) => (
            <IconButton
              key={item.label}
              component="a"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                width: 42,
                height: 42,
                border: "1px solid rgba(200,164,106,0.35)",
                color: "rgba(240,230,210,0.85)",
                transition: "all 260ms ease",

                "&:hover": {
                  backgroundColor: "rgba(200,164,106,0.12)",
                  boxShadow: "0 0 22px rgba(200,164,106,0.45)",
                  transform: "translateY(-2px)",
                  color: "rgba(240,230,210,0.85)",
                },
              }}
            >
              {item.icon}
            </IconButton>
          ))}
        </Box>
      </Box>
    );
  }

  return (
    <Box>
      <Typography
        sx={{
          fontSize: "0.7rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "rgba(200,164,106,0.75)",
          mb: 3,
        }}
      >
        Follow
      </Typography>

      <Stack spacing={2.4}>
        {socials.map((item) => (
          <Box
            key={item.label}
            component="a"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              fontFamily: "Playfair Display, serif",
              fontSize: "0.9rem",
              letterSpacing: "0.05em",
              color: "rgba(220,215,205,0.75)",
              textDecoration: "none",
              paddingLeft: "12px",
              transition: "all 260ms cubic-bezier(.22,.61,.36,1)",

              "&::before": {
                content: '""',
                position: "absolute",
                left: 0,
                top: "50%",
                width: "2px",
                height: "0%",
                background: "rgba(201,169,106,0.7)",
                transform: "translateY(-50%)",
                transition: "height 260ms ease",
              },

              "&:hover": {
                color: "rgba(210,195,170,1)",
                paddingLeft: "18px",
              },

              "&:hover::before": {
                height: "60%",
              },

              "& svg": {
                opacity: 0.7,
                transition: "opacity 260ms ease",
              },

              "&:hover svg": {
                opacity: 1,
              },
            }}
          >
            {item.icon}
            {item.label}
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
