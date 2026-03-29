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
            <Box
              component="img"
              src="https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767547942/new_brush_ktsbyr.png"
              alt="Webcode Art Logo"
              sx={{
                height: { xs: 28, sm: 34, md: 36, xl: 38 },
                display: "block",
                flexShrink: 0,
              }}
            />

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
