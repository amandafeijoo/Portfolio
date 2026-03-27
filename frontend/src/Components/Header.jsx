import { useState } from "react";
import { AppBar, Box, Toolbar, Button, IconButton, Stack } from "@mui/material";
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
          {/* LOGO */}
          <Box
            sx={{
              cursor: "pointer",
              justifySelf: "start",
            }}
            onClick={() => (window.location.href = "/")}
          >
            <Box
              component="img"
              src="https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767547942/new_brush_ktsbyr.png"
              alt="Webcode Art Logo"
              sx={{
                height: { xs: 28, sm: 34, md: 36, xl: 38 },
                display: "block",
              }}
            />
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
              variant="outlined"
              href="/contact"
              sx={{
                position: "relative",
                isolation: "isolate",
                overflow: "visible",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",

                px: { xs: 2.2, sm: 2.8, md: 3.2, xl: 3.6 },
                py: { xs: 0.72, sm: 0.9, md: 1.05 },

                fontSize: { xs: "0.58rem", sm: "0.66rem", md: "0.7rem" },
                letterSpacing: { xs: "0.14em", sm: "0.18em", md: "0.22em" },
                fontWeight: 600,
                textTransform: "uppercase",

                color: "#e6d5bc",
                borderRadius: "999px",
                border: "1px solid rgba(230,213,188,0.45)",
                background: "rgba(18,19,20,0.55)",
                backdropFilter: "blur(10px)",

                boxShadow: `
                  0 0 12px rgba(230,213,188,0.22),
                  0 0 32px rgba(230,213,188,0.14)
                `,

                transition:
                  "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",

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

                "&:focus": { outline: "none" },
                "&:focus-visible": { outline: "none" },
                WebkitTapHighlightColor: "transparent",
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
                ml: { xs: 0, md: 0.4, xl: 0.8 },
                color: "rgba(236,228,214,0.6)",

                "&:hover": {
                  color: "#7e6a3f",
                  backgroundColor: "transparent",
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
