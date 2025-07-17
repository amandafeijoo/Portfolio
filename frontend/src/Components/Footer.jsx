import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        borderTop: "2px solid rgba(200, 162, 200, 0.5)",
        p: { xs: 1, sm: 2 },
        mt: { xs: 3, sm: 5 },
        fontFamily: "'Source Code Pro', monospace",
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={10}>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Typography
              variant="body2"
              sx={{
                color: "#ffffff",
                fontFamily: "'Source Code Pro', monospace",
                fontSize: { xs: "12px", sm: "14px" },
              }}
            >
              © {new Date().getFullYear()} Amanda Flores. All Rights Reserved.
            </Typography>

            <Box display="flex" alignItems="center" gap={1}>
              <Typography
                onClick={() => navigate("/privacy-policy")}
                sx={{
                  fontFamily: "'Source Code Pro', monospace",
                  fontSize: { xs: "8px", sm: "10px" },
                  color: "#fbb6ce",
                  cursor: "pointer",
                  textDecoration: "underline",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#f783ac",
                  },
                }}
              >
                Privacy Policy
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "8px", sm: "10px" },
                  color: "#fbb6ce",
                }}
              >
                ·
              </Typography>

              <Typography
                onClick={() => navigate("/legal-notice")}
                sx={{
                  fontFamily: "'Source Code Pro', monospace",
                  fontSize: { xs: "8px", sm: "10px" },
                  color: "#fbb6ce",
                  cursor: "pointer",
                  textDecoration: "underline",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#f783ac",
                  },
                }}
              >
                Legal Notice
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={2}>
          <Box display="flex" justifyContent="flex-end">
            <Link
              href="https://linkedin.com/in/amanda-flores-feijoo-93956a156"
              target="_blank"
              rel="noopener"
              sx={{ mr: 1, color: "#9370db" }}
            >
              <LinkedInIcon />
            </Link>
            <Link
              href="https://github.com/amandafeijoo"
              target="_blank"
              rel="noopener"
              sx={{ mr: 1, color: "#9370db" }}
            >
              <GitHubIcon />
            </Link>
            <Link
              href="https://instagram.com/webcode.art"
              target="_blank"
              rel="noopener"
              sx={{ color: "#9370db" }}
            >
              <InstagramIcon />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
