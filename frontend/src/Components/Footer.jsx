import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FooterSocial } from "./FooterSocial";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        width: "100%",
        background:
          "linear-gradient(180deg, rgb(14,15,16) 0%, rgb(22,23,24) 100%)",
        borderTop: "1px solid rgba(240,230,210,0.85)",
        overflow: "hidden",
        paddingInline: { xs: "32px", sm: "24px", md: "0px" },

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(80% 40% at 50% 0%, rgba(255,255,255,0.04), transparent 70%)",
          pointerEvents: "none",
        },
      }}
    >
      {/* TOP */}
      <Box
        sx={{
          maxWidth: { xs: 290, sm: 640, md: 1400 }, 
          mx: "auto",
          px: { xs: 0, sm: 0, md: 6 },

          py: { xs: 2, md: 7 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: { xs: 3, md: 4 },
          textAlign: { xs: "center", md: "left" },
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* LEFT */}
        <Box>
          <Box
            component="img"
            src="https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767547942/new_brush_ktsbyr.png"
            alt="Webcode-art logo"
            sx={{
              width: 34,
              mb: 1.5,
              opacity: 0.85,
              mx: { xs: "auto", md: 0 },
            }}
          />

          <Typography
            sx={{
              fontFamily: "Playfair Display, serif",
              letterSpacing: "0.32em",
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
              color: "rgba(235,235,232,0.9)",
              mb: 1,
            }}
          >
            WEBCODE-ART
          </Typography>

          <Typography
            sx={{
              fontFamily: "Playfair Display, serif",
              fontSize: { xs: "0.75rem", sm: "0.8rem" },
              textAlign: { xs: "left", md: "left" },
              lineHeight: 1.8,
              color: "rgba(200,200,195,0.6)",
              maxWidth: 420,
              mx: { xs: "auto", md: 0 },
            }}
          >
            Crafting thoughtful digital experiences
            <br />
            through design & code.
          </Typography>
        </Box>

        {/* RIGHT — SOCIAL ICONS */}
        <Box sx={{ mt: { xs: 2, md: 0 } }}>
          <FooterSocial variant="icons" />
        </Box>
      </Box>

      {/* BOTTOM */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          py: { xs: 3, sm: 2.5 },
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            maxWidth: 1400,
            mx: "auto",
            px: { xs: 2, sm: 3, md: 6 },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: { xs: 1.5, sm: 2 },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Playfair Display, serif",
              fontSize: "0.7rem",
              color: "rgba(180,180,175,0.5)",
            }}
          >
            © {new Date().getFullYear()} WEBCODE-ART. All Rights Reserved.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 1.5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              onClick={() => navigate("/privacy-policy")}
              sx={{
                fontSize: "0.65rem",
                color: "rgba(201,169,106,0.55)",
                cursor: "pointer",
                transition: "all 0.25s ease",
                "&:hover": {
                  color: "rgba(201,169,106,0.9)",
                  textShadow: "0 0 12px rgba(201,169,106,0.25)",
                },
              }}
            >
              Privacy Policy
            </Typography>

            <Typography sx={{ color: "rgba(180,180,175,0.35)" }}>·</Typography>

            <Typography
              onClick={() => navigate("/legal-notice")}
              sx={{
                fontSize: "0.65rem",
                color: "rgba(201,169,106,0.55)",
                cursor: "pointer",
                transition: "all 0.25s ease",
                "&:hover": {
                  color: "rgba(201,169,106,0.9)",
                  textShadow: "0 0 12px rgba(201,169,106,0.25)",
                },
              }}
            >
              Legal Notice
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// import React from "react";
// import { Box, Typography, Link, Grid } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import InstagramIcon from "@mui/icons-material/Instagram";

// const Footer = () => {
//   const navigate = useNavigate();

//   return (
//     <Box
//       sx={{
//         borderTop: "2px solid rgba(200, 162, 200, 0.5)",
//         p: { xs: 1, sm: 2 },
//         mt: { sm: 5 },
//         fontFamily: "'Source Code Pro', monospace",
//       }}
//     >
//       <Grid container spacing={2} alignItems="center">
//         <Grid item xs={12} sm={10}>
//           <Box display="flex" flexDirection="column" alignItems="flex-start">
//             <Typography
//               variant="body2"
//               sx={{
//                 color: "#ffffff",
//                 fontFamily: "'Source Code Pro', monospace",
//                 fontSize: { xs: "12px", sm: "14px" },
//               }}
//             >
//               © {new Date().getFullYear()} Amanda Flores. All Rights Reserved.
//             </Typography>

//             <Box display="flex" alignItems="center" gap={1}>
//               <Typography
//                 onClick={() => navigate("/privacy-policy")}
//                 sx={{
//                   fontFamily: "'Source Code Pro', monospace",
//                   fontSize: { xs: "8px", sm: "10px" },
//                   color: "#fbb6ce",
//                   cursor: "pointer",
//                   textDecoration: "underline",
//                   transition: "color 0.3s ease",
//                   "&:hover": {
//                     color: "#f783ac",
//                   },
//                 }}
//               >
//                 Privacy Policy
//               </Typography>

//               <Typography
//                 sx={{
//                   fontSize: { xs: "8px", sm: "10px" },
//                   color: "#fbb6ce",
//                 }}
//               >
//                 ·
//               </Typography>

//               <Typography
//                 onClick={() => navigate("/legal-notice")}
//                 sx={{
//                   fontFamily: "'Source Code Pro', monospace",
//                   fontSize: { xs: "8px", sm: "10px" },
//                   color: "#fbb6ce",
//                   cursor: "pointer",
//                   textDecoration: "underline",
//                   transition: "color 0.3s ease",
//                   "&:hover": {
//                     color: "#f783ac",
//                   },
//                 }}
//               >
//                 Legal Notice
//               </Typography>
//             </Box>
//           </Box>
//         </Grid>

//         <Grid item xs={12} sm={2}>
//           <Box display="flex" justifyContent="flex-end">
//             <Link
//               href="https://linkedin.com/in/amanda-flores-feijoo-93956a156"
//               target="_blank"
//               rel="noopener"
//               sx={{ mr: 1, color: "#9370db" }}
//             >
//               <LinkedInIcon />
//             </Link>
//             <Link
//               href="https://github.com/amandafeijoo"
//               target="_blank"
//               rel="noopener"
//               sx={{ mr: 1, color: "#9370db" }}
//             >
//               <GitHubIcon />
//             </Link>
//             <Link
//               href="https://instagram.com/webcode.art"
//               target="_blank"
//               rel="noopener"
//               sx={{ color: "#9370db" }}
//             >
//               <InstagramIcon />
//             </Link>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Footer;
