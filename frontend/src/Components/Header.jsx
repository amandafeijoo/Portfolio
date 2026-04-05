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
    { label: "Services", to: "/services" },
    { label: "Work", to: "/projects" },
  ];

  const menuLinks = [
    { label: "Process", to: "/process" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
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
            width: "100%",
            maxWidth: "100%",
            mx: 0,
            px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8 },
            py: { xs: 0.6, md: 0.2 },
            display: "grid",
            gridTemplateColumns: {
              xs: "auto 1fr auto",
              md: "1fr auto 1fr",
            },
            alignItems: "center",
          }}
        >
          {/* LOGO + BRAND */}
          <Box
            sx={{
              cursor: "pointer",
              justifySelf: "start",
              display: "flex",
              alignItems: "center",
              gap: { xs: 0.8, sm: 1, md: 1.2 },
              minWidth: 0,
            }}
            onClick={() => (window.location.href = "/")}
          >          
            <Typography
              sx={{
                display: { xs: "block", sm: "block" },
                fontFamily: "Playfair Display, serif",
                fontWeight: 500,
                fontSize: {
                  xs: "1.20rem",
                  sm: "1.45rem",
                  md: "1.65rem",
                  lg: "1.6rem",
                  xl: "1.60rem",
                },
                lineHeight: 1,
                letterSpacing: "-0.045em",
                whiteSpace: "nowrap",
                textShadow: `
                  0 1px 0 rgba(0,0,0,0.35),
                  0 0 10px rgba(0,0,0,0.22),
                  0 0 18px rgba(0,0,0,0.18)
                `,
              }}
            >
              <Box
                component="span"
                sx={{
                  color: "#f4efe6",
                }}
              >
                Webcode
              </Box>
              <Box
                component="span"
                sx={{
                  color: "#e7c98f",
                  textShadow: `
                    0 1px 0 rgba(0,0,0,0.28),
                    0 0 10px rgba(20,20,20,0.22)
                  `,
                }}
              >
                -Art
              </Box>
            </Typography>
          </Box>

          {/* NAV CENTRO */}
          <Stack
            direction="row"
            spacing={{ md: 3, lg: 4, xl: 5 }}
            justifyContent="center"
            alignItems="center"
            sx={{
              display: { xs: "none", md: "flex" },
              justifySelf: "center",
            }}
          >
            {mainLinks.map((link) => (
              <Button
                key={link.label}
                href={link.to}
                sx={{
                  color: "rgba(236,228,214,0.7)",
                  fontSize: { md: "0.82rem", lg: "0.85rem" },
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
                    backgroundColor: "transparent",
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

          {/* RIGHT SIDE */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifySelf: "end",
              gap: { xs: 0.6, sm: 1, md: 1.2, xl: 1.6 },
            }}
          >
            <Button
              href="/contact"
              sx={{
                position: "relative",
                isolation: "isolate",
                overflow: "visible",

                px: { xs: "18px", sm: "20px" },
                py: { xs: "9px", sm: "9px" },

                fontFamily: '"Source Code Pro", monospace',
                fontSize: { xs: "0.60rem", sm: "0.7rem" },
                letterSpacing: { xs: "0.16em", sm: "0.25em" },
                textTransform: "uppercase",

                color: "#e6d5bc",
                border: "1px solid rgba(230, 213, 188, 0.45)",
                borderRadius: "999px",

                background: "rgba(18, 19, 20, 0.55)",
                backdropFilter: "blur(10px)",

                boxShadow: `
              0 0 16px rgba(230, 213, 188, 0.25),
              0 0 48px rgba(230, 213, 188, 0.15)
            `,

                transition:
                  "transform 0.35s ease, box-shadow 0.35s ease, background 0.35s ease",

                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: { xs: -10, sm: -14 },
                  borderRadius: "999px",
                  background:
                    "radial-gradient(circle, rgba(230, 213, 188, 0.35), transparent 70%)",
                  filter: { xs: "blur(22px)", sm: "blur(26px)" },
                  opacity: 0.85,
                  zIndex: -1,
                  pointerEvents: "none",
                  transition: "opacity 0.35s ease, filter 0.35s ease",
                },

                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  borderRadius: "999px",
                  background:
                    "radial-gradient(60% 60% at 50% 0%, rgba(230, 213, 188, 0.22), transparent 70%)",
                  opacity: 0.6,
                  pointerEvents: "none",
                },

                "&:hover": {
                  transform: "translateY(-2px)",
                  color: "#e6d5bc",

                  background: "rgba(230, 213, 188, 0.18)",
                  border: "1px solid rgba(230, 213, 188, 0.45)",
                  boxShadow: `
                0 0 28px rgba(230, 213, 188, 0.45),
                0 0 80px rgba(230, 213, 188, 0.25)
              `,
                  "&::before": {
                    opacity: 1,
                    filter: { xs: "blur(26px)", sm: "blur(30px)" },
                  },
                },

                "&:active": {
                  transform: "translateY(0)",
                },

                "&:focus": { outline: "none" },
                "&:focus-visible": { outline: "none" },
                "&.Mui-focusVisible": { outline: "none" },

                "&.Mui-disabled": {
                  opacity: 0.4,
                  boxShadow: "none",
                  "&::before": { opacity: 0 },
                },
              }}
            >
              Start a project
            </Button>
            <IconButton
              disableRipple
              disableFocusRipple
              disableTouchRipple
              onClick={() => setOpen(true)}
              sx={{
                ml: { xs: 0, md: 0.4, xl: 0.8 },
                color: "rgba(236,228,214,0.6)",
                border: "1px solid rgba(236,228,214,0.3)",
                boxShadow: "0 2px 8px rgba(255, 253, 253, 0.3)",

                "&:hover": {
                  color: "#7e6a3f",
                  backgroundColor: "transparent",
                  borderColor: "rgba(126,106,63,0.5)",
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

      <MenuDrawer
        open={open}
        onClose={() => setOpen(false)}
        mainLinks={mainLinks}
        menuLinks={menuLinks}
      />

      <Box sx={{ width: 320, p: 4 }} />
    </>
  );
}
