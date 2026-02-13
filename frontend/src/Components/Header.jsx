import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuDrawer from "./MenuDrawer/MenuDrawer";

export default function Header() {
  const [open, setOpen] = useState(false);

  const mainLinks = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/orbit-section" },
    { label: "Work", to: "/projects" },
  ];

  const menuLinks = [
    { label: "Process", to: "/process-section" },
    { label: "About", to: "/aboutme" },
    { label: "Contact", to: "/contactpage" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: "100%",
          backgroundColor: "rgba(59, 58, 58, 0.72)",
          backdropFilter: "blur(18px)",
          borderBottom: "2px solid rgba(223, 188, 117, 0.15)",
          boxShadow: "0 6px 22px rgba(0,0,0,0.45)",
          zIndex: open ? 1000 : 2000,
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1280,
            width: "100%",
            mx: "auto",
            px: { xs: 2, sm: 3 },
            py: { xs: 0.6, md: 0.2 },

            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
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
              style={{ height: window.innerWidth < 600 ? 28 : 36 }}
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
                  color: "rgba(236,228,214,0.7)",
                  fontSize: "0.85rem",
                  fontWeight: 400,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  position: "relative",
                  px: 1,
                  py: 0.4,
                  borderRadius: "4px",
                  transition: "color 220ms ease",

                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -6,
                    left: "50%",
                    width: "28%",
                    height: "1px",
                    background:
                      "linear-gradient(90deg, transparent, rgba(214,183,122,0.6), transparent)",
                    transform: "translateX(-50%) scaleX(0)",
                    transition: "transform 300ms ease",
                  },

                  "&:hover": {
                    color: "#d6b77a",
                  },

                  "&:hover::after": {
                    transform: "translateX(-50%) scaleX(1)",
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Stack>
          {/* RIGHT SIDE (CTA + MENU) */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2,

              /* 👇 SOLO MOBILE */
              justifySelf: { xs: "start", md: "end" },
              ml: { xs: 20.5, sm: 0 },
            }}
          >
            <Button
              variant="outlined"
              href="/contactpage"
              sx={{
                position: "relative",
                isolation: "isolate",
                overflow: "visible",

                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",

                /* 📐 SIZE */
                px: { xs: 2.4, sm: 2.8, md: 3.2 },
                py: { xs: 0.75, sm: 0.9, md: 1.05 },

                /* 🔤 TEXT */
                fontSize: { xs: "0.6rem", sm: "0.66rem", md: "0.7rem" },
                letterSpacing: { xs: "0.16em", sm: "0.18em", md: "0.22em" },
                fontWeight: 600,
                textTransform: "uppercase",
                
                /* 🎨 COLORS – UNIFICADO */
                color: "#e6d5bc",
                borderRadius: "999px",
                border: "1px solid rgba(230,213,188,0.45)",

                background: "rgba(18,19,20,0.55)",
                backdropFilter: "blur(10px)",

                /* 🌕 DEPTH (más suave que primary) */
                boxShadow: `
      0 0 12px rgba(230,213,188,0.22),
      0 0 32px rgba(230,213,188,0.14)
    `,

                cursor: "pointer",

                transition:
                  "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",

                /* 🌕 HALO EXTERNO */
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: { xs: -8, md: -10 },
                  borderRadius: "999px",
                  background:
                    "radial-gradient(circle, rgba(230,213,188,0.35), transparent 70%)",
                  filter: { xs: "blur(14px)", md: "blur(20px)" },
                  opacity: 0.8,
                  zIndex: -1,
                  pointerEvents: "none",
                  transition: "opacity 0.3s ease, filter 0.3s ease",
                },

                /* ✨ HALO INTERNO */
                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  borderRadius: "999px",
                  background:
                    "radial-gradient(60% 60% at 50% 0%, rgba(230,213,188,0.22), transparent 70%)",
                  opacity: 0.6,
                  pointerEvents: "none",
                },

                /* ✨ HOVER */
                "&:hover": {
                  transform: { sm: "translateY(-1px)" },
                  background: "rgba(230,213,188,0.18)",
                  color: "#e6d5bc",

                  boxShadow: `
        0 0 22px rgba(230,213,188,0.4),
        0 0 56px rgba(230,213,188,0.22)
      `,

                  "&::before": {
                    opacity: 1,
                    filter: { xs: "blur(18px)", md: "blur(24px)" },
                  },
                },

                "&:active": {
                  transform: "translateY(0)",
                },

                /* 🚫 iOS BLUE RING */
                "&:focus": { outline: "none" },
                "&:focus-visible": { outline: "none" },
                WebkitTapHighlightColor: "transparent",

                /* 📱 MOBILE */
                "@media (max-width: 520px)": {
                  px: 2,
                  fontSize: "0.58rem",
                  letterSpacing: "0.14em",
                },
              }}
            >
              LET’S CREATE
            </Button>

            <IconButton
              disableRipple
              disableFocusRipple
              disableTouchRipple
              onClick={() => setOpen(true)}
              sx={{
                ml: 0.5,
                color: "rgba(236,228,214,0.6)",

                "&:hover": {
                  color: "#7e6a3f",
                },

                "&:focus": {
                  outline: "none",
                },

                "&.Mui-focusVisible": {
                  outline: "none",
                },
              }}
            >
              <MenuIcon fontSize="small" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* DRAWER */}
      <MenuDrawer
        open={open}
        onClose={() => setOpen(false)}
        mainLinks={mainLinks}
        menuLinks={menuLinks}
      />
      <Box sx={{ width: 320, p: 4 }}></Box>
    </>
  );
}
