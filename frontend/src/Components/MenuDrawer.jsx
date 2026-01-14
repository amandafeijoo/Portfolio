import { Drawer, Box, Stack, Typography } from "@mui/material";

export default function MenuDrawer({
  open,
  onClose,
  mainLinks = [],
  menuLinks = [],
}) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{
          width: 320,
          minHeight: "100dvh", // 🔑 clave
          p: 4,
          pb: "env(safe-area-inset-bottom)", // 🔑 iOS safe area
          backgroundColor: "rgba(235, 219, 194, 0.98)",
          borderLeft: "2px solid rgba(219, 182, 108, 0.18)",
          display: "flex",
          flexDirection: "column",

          overflowY: "auto", // 🔑 scroll interno correcto
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* TITLE */}
        <Typography
          variant="overline"
          sx={{
            letterSpacing: "0.28em",
            fontSize: "0.65rem",
            color: "rgba(120,120,120,0.75)",
            mb: 2,
          }}
        >
          MENU
        </Typography>

        {/* EDITORIAL DIVIDER */}
        <Box
          sx={{
            height: "1px",
            width: "48%",
            background:
              "linear-gradient(90deg, rgba(201,169,106,0.45), transparent)",
            mb: { xs: 2, sm: 5 }, // 👈 sube en mobile
          }}
        />

        {/* LINKS */}
        <Stack spacing={2.4}>
          {[...mainLinks, ...menuLinks].map((link) => (
            <Box
              key={link.label}
              component="a"
              href={link.to}
              onClick={onClose}
              sx={{
                position: "relative",
                fontSize: "1.05rem",
                fontWeight: 400,
                letterSpacing: "0.04em",
                color: "rgba(40,32,20,0.85)",
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
                  background: "rgba(201,169,106,0.6)",
                  transform: "translateY(-50%)",
                  transition: "height 260ms ease",
                },

                "&:hover": {
                  color: "#7e6a3f",
                  paddingLeft: "18px",
                },

                "&:hover::before": {
                  height: "60%",
                },
              }}
            >
              {link.label}
            </Box>
          ))}
        </Stack>

        {/* MICRO COPY */}
        <Typography
          sx={{
            mt: 6,
            mb: { xs: 2, sm: 5 }, // 👈 sube en mobile
            fontSize: "0.7rem",
            lineHeight: 1.6,
            color: "rgba(120,120,120,0.6)",
            letterSpacing: "0.04em",
            maxWidth: 220,
          }}
        >
          Crafting thoughtful digital experiences through design & code.
        </Typography>

        {/* SOCIALS */}
        <Box
          sx={{
            mt: { xs: 5, sm: 4 },
          }}
        >
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

          <Stack direction="row" spacing={3}>
            <Box
              component="a"
              href="https://github.com/amandafeijoo"
              target="_blank"
              sx={{
                position: "relative",
                fontSize: "1.25rem",
                color: "rgba(140,140,140,0.6)",
                transition: "all 240ms ease",
                "&:hover": {
                  color: "#7e6a3f",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <i className="fab fa-github" />
            </Box>

            <Box
              component="a"
              href="https://www.linkedin.com/in/amanda-flores-feijoo-93956a156"
              target="_blank"
              sx={{
                position: "relative",
                fontSize: "1.25rem",
                color: "rgba(140,140,140,0.6)",
                transition: "all 240ms ease",
                "&:hover": {
                  color: "#7e6a3f",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <i className="fab fa-linkedin-in" />
            </Box>

            <Box
              component="a"
              href="https://www.instagram.com/webcode.art/"
              target="_blank"
              sx={{
                position: "relative",
                fontSize: "1.25rem",
                color: "rgba(140,140,140,0.6)",
                transition: "all 240ms ease",
                "&:hover": {
                  color: "#7e6a3f",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <i className="fab fa-instagram" />
            </Box>
          </Stack>

          {/* BRAND VIDEO */}
          <Box
            sx={{
              mt: { xs: 4, sm: 2 }, // 👈 sube en mobile
              display: "flex",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: {
                  xs: 220, // 📱 mobile (más pequeño)
                  sm: 250, // 📲 tablet
                  md: 280, // 💻 desktop (casi igual)
                },
                borderRadius: 14,
                overflow: "hidden",
                backgroundColor: "rgba(0,0,0,0.04)",
                boxShadow: `
      0 16px 32px rgba(201,169,106,0.25),
      0 0 56px rgba(201,169,106,0.2)
    `,
              }}
            >
              <video
                src="https://res.cloudinary.com/dp6jrgvoz/video/upload/f_mp4,q_auto:low,br_300k,fps_12,w_320,du_6/hero_009_mm4eba.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                style={{
                  width: "100%",
                  display: "block",
                  boxShadow: "inset 0 0 18px rgba(0,0,0,0.12)",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}
