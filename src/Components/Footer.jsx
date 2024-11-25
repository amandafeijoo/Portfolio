import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      sx={{
        borderTop: "2px solid rgba(200, 162, 200, 0.5)",
        p: 2,
        mt: 5,
        fontFamily: "'Source Code Pro', monospace",
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={10}>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Typography
              variant="body2"
              sx={{ fontFamily: "'Source Code Pro', monospace" }}
            >
              © 2024 Amanda Flores. All Rights Reserved.
            </Typography>
            <Link
              href="/privacy-policy.html"
              sx={{
                fontFamily: "'Source Code Pro', monospace",
                fontSize: "10px",
              }}
            >
              Privacy Policy
            </Link>
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
              href="https://instagram.com/mandyfeijoo"
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
