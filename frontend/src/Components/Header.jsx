import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  Stack,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [open, setOpen] = useState(false);

  const mainLinks = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "Work", to: "/projects" },
  ];

  const menuLinks = [
    { label: "Process", to: "/process" },
    { label: "About", to: "/aboutme" },
    { label: "Contact", to: "/contactpage" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "rgba(213, 190, 169, 0.78)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1280,
            width: "100%",
            mx: "auto",
            py: 0.1, // ⬅️ NAV MÁS ANGOSTO
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
            alignItems: "center",
          }}
        >
          {/* LOGO */}
          <Box
            sx={{ cursor: "pointer" }}
            onClick={() => (window.location.href = "/")}
          >
            <img
              src="https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767547942/new_brush_ktsbyr.png"
              alt="Webcode Art Logo"
              style={{ height: 36 }} // ⬅️ un poco más pequeño
            />
          </Box>

          {/* NAV + MENU */}
          <Stack
            direction="row"
            spacing={3.5}
            justifyContent="center"
            alignItems="center"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {mainLinks.map((link) => (
              <Button
                key={link.label}
                href={link.to}
                sx={{
                  color: "rgba(58, 46, 28, 0.78)",
                  fontSize: "0.88rem",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "none",
                  position: "relative",
                  borderRadius: "6px",
                  px: 1.2,
                  py: 0.4,

                  transition:
                    "color 240ms ease, letter-spacing 240ms ease, background-color 260ms ease",

                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -6,
                    left: "50%",
                    width: "32%",
                    height: "1px",
                    background:
                      "linear-gradient(90deg, transparent, rgba(201,169,106,0.6), transparent)",
                    transform: "translateX(-50%) scaleX(0)",
                    transformOrigin: "center",
                    transition: "transform 320ms cubic-bezier(.22,.61,.36,1)",
                  },

                  "&:hover": {
                    color: "rgba(219, 188, 124, 0.95)",
                    letterSpacing: "0.09em",

                    backgroundColor: "rgba(120, 116, 116, 0.22)",
                  },

                  "&:hover::after": {
                    transform: "translateX(-50%) scaleX(1)",
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
            {/* MENU ICON JUNTO A WORK */}
            <IconButton
              onClick={() => setOpen(true)}
              sx={{
                ml: 0.5,
                color: "rgba(131, 101, 43, 0.95)",
                "&:hover": {
                  color: "#7e6a3f",
                },
              }}
            >
              <MenuIcon fontSize="small" />
              
            </IconButton>
          </Stack>

          {/* CTA */}
          <Button
            variant="outlined"
            href="/contactpage"
            sx={{
              position: "relative",
              px: 3.4,
              py: 1.15,

              fontSize: "0.72rem",
              letterSpacing: "0.22em",
              fontWeight: 500,
              textTransform: "uppercase",

              color: "rgba(60, 48, 28, 0.9)",

              background: `
      linear-gradient(
        180deg,
        rgba(255,255,255,0.35),
        rgba(255,255,255,0.12)
      )
    `,
              backdropFilter: "blur(6px)",

              borderRadius: "999px",
              border: "1px solid rgba(201,169,106,0.35)",

              boxShadow: `
      inset 0 1px 0 rgba(255,255,255,0.45),
      0 6px 18px rgba(0,0,0,0.12)
    `,

              transition: "all 280ms cubic-bezier(.22,.61,.36,1)",

              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                borderRadius: "999px",
                background: `
        radial-gradient(
          120% 140% at 50% 0%,
          rgba(201,169,106,0.55),
          rgba(201,169,106,0.15) 40%,
          transparent 70%
        )
      `,
                opacity: 0,
                transition: "opacity 300ms ease",
                pointerEvents: "none",
              },

              "&:hover": {
                transform: "translateY(-1px)",
                color: "rgba(40, 32, 18, 1)",
                borderColor: "rgba(201,169,106,0.6)",

                boxShadow: `
        inset 0 1px 0 rgba(255,255,255,0.55),
        0 10px 28px rgba(201,169,106,0.35)
      `,
              },

              "&:hover::before": {
                opacity: 1,
              },

              "&:active": {
                transform: "translateY(0)",
                boxShadow: `
        inset 0 2px 4px rgba(0,0,0,0.18)
      `,
              },
            }}
          >
            LET’S CREATE
          </Button>
        </Toolbar>
      </AppBar>

      {/* DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 320, p: 4 }}>
          <Typography variant="overline" sx={{ letterSpacing: "0.2em", mb: 3 }}>
            MENU
          </Typography>

          <Stack spacing={2}>
            {[...mainLinks, ...menuLinks].map((link) => (
              <Button
                key={link.label}
                href={link.to}
                onClick={() => setOpen(false)}
                sx={{
                  justifyContent: "flex-start",
                  fontSize: "1.05rem",
                  textTransform: "none",
                  color: "#111",
                }}
              >
                {link.label}
              </Button>
            ))}
          </Stack>

          {/* SOCIALS */}
          <Box sx={{ mt: 6 }}>
            <Typography variant="caption" color="text.secondary">
              Follow
            </Typography>
            <Stack direction="row" spacing={2} mt={1}>
              <Button size="small">IG</Button>
              <Button size="small">IN</Button>
              <Button size="small">GH</Button>
            </Stack>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
