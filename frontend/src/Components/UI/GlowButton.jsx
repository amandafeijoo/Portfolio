import { Button } from "@mui/material";

export default function GlowButton({ children, href, fullWidth = false }) {
  return (
    <Button
      href={href}
      fullWidth={false}
      sx={{
        position: "relative",
        isolation: "isolate",
        overflow: "visible",

        display: "block",
        mx: "auto",
        width: "fit-content",

        px: { xs: "16px", sm: "18px" },
        py: { xs: "8px", sm: "10px" },

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
      {children}
    </Button>
  );
}
