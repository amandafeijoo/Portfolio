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
import MenuDrawer from "./MenuDrawer";

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
            {/* CTA (HIDDEN ON MOBILE) */}
            <Button
              variant="outlined"
              href="/contactpage"
              sx={{
                display: "inline-flex",

                px: { xs: 2.2, sm: 2.6, md: 3.4 },
                py: { xs: 0.7, sm: 0.9, md: 1.15 },

                fontSize: { xs: "0.6rem", sm: "0.68rem", md: "0.72rem" },
                letterSpacing: { xs: "0.18em", sm: "0.2em", md: "0.22em" },
                fontWeight: 600,
                textTransform: "uppercase",

                color: "#f3ead8",
                backgroundColor: "rgba(166,151,120,0.5)",
                backdropFilter: "blur(6px)",

                borderRadius: "999px",
                border: "1px solid rgba(201,169,106,0.55)",

                boxShadow: {
                  xs: "0 6px 16px rgba(201,169,106,0.28)",
                  sm: `
        inset 0 1px 0 rgba(255,255,255,0.45),
        0 10px 28px rgba(201,169,106,0.35)
      `,
                },

                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  borderRadius: "999px",
                  background: `
        radial-gradient(
          120% 140% at 50% 0%,
          rgba(201,169,106,0.45),
          rgba(201,169,106,0.15) 40%,
          transparent 70%
        )
      `,
                  opacity: { xs: 0.7, sm: 1 },
                  pointerEvents: "none",
                },

                "&:hover": {
                  transform: { sm: "translateY(-1px)" },
                  color: "#f3ead8",
                  boxShadow: `
        inset 0 1px 0 rgba(255,255,255,0.55),
        0 12px 30px rgba(201,169,106,0.4)
      `,
                },

                "&:active": {
                  transform: "translateY(0)",
                  boxShadow: `
        inset 0 2px 4px rgba(0,0,0,0.18),
        0 6px 14px rgba(201,169,106,0.25)
      `,
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
