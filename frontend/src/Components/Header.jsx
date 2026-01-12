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
          borderBottom: "1px solid rgba(223, 188, 117, 0.15)",
          boxShadow: "0 6px 22px rgba(0,0,0,0.45)",
          zIndex: open ? 1000 : 2000,
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1280,
            width: "100%",
            mx: "auto",
            py: 0.1,
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
              style={{ height: 36 }}
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
            {/* MENU ICON JUNTO A WORK */}
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
              fontWeight: 600,
              textTransform: "uppercase",

              color: "#f3ead8",
              backgroundColor: "rgba(166,151,120,0.5)",
              backdropFilter: "blur(6px)",

              borderRadius: "999px",
              border: "1px solid rgba(201,169,106,0.6)",

              transform: "translateY(-1px)",

              boxShadow: `
      inset 0 1px 0 rgba(255,255,255,0.55),
      0 10px 28px rgba(201,169,106,0.35)
    `,

              transition: "all 260ms cubic-bezier(.22,.61,.36,1)",

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
                opacity: 1,
                pointerEvents: "none",
              },

              "&:hover": {
                transform: "translateY(-2px)",
                color: "#f3ead8",

                boxShadow: `
        inset 0 1px 0 rgba(255,255,255,0.6),
        0 14px 34px rgba(201,169,106,0.45)
      `,
              },

              /* ACTIVE = PRESIÓN */
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
