import React from "react";
import { Box, Typography, Container, TextField, Button } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactSummary = ({ handleSubmit, handleChange, formData = {} }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, 
    threshold: 0.6, 
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 1 },
      });
    } else {
      controls.start({
        scale: 0.2,
        opacity: 0,
        transition: { duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          px: 4,
          pb: 4,
          mt: -30,
          overflowY: "auto",
          fontFamily: "'Source Code Pro', monospace",
        }}
      >
        <motion.div
          ref={ref}
          initial={{ scale: 0.2, opacity: 0 }}
          animate={controls}
        >
          <Box
            sx={{
              border: "2px solid rgba(200, 162, 200, 0.5)",
              borderRadius: 2,
              p: 3,
              width: "100%",
              maxWidth: "600px",
              mx: "auto",
              mt: 40,
              mb: 5,
              fontFamily: "'Source Code Pro', monospace",
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              textAlign="center"
              gutterBottom
              sx={{
                mb: 3,
                fontFamily: "'Source Code Pro', monospace",
                fontWeight: "bold",
              }}
            >
              Contact
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                p: 3,
                borderRadius: 2,
                color: "#fff",
                boxShadow: "0 0 10px rgba(192, 192, 192, 0.5)",
                backdropFilter: "blur(10px)",
                border: "1px solid #ff7799",
                backgroundColor: "rgba(200, 162, 200, 0.5)",
                fontFamily: "'Source Code Pro', monospace",
              }}
            >
              <Typography
                variant="h6"
                component="h1"
                textAlign="center"
                gutterBottom
                sx={{
                  fontFamily: "'Source Code Pro', monospace",
                  fontSize: "1rem",
                }}
              >
                Feel free to reach out for collaborations, questions, or just to
                say hi. I’m here to help!
              </Typography>
              <TextField
                label="Name"
                variant="outlined"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#a3bffa",
                    },
                  },
                  fontFamily: "'Source Code Pro', monospace",
                }}
              />
              <TextField
                label="Email"
                variant="outlined"
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#a3bffa",
                    },
                  },
                  fontFamily: "'Source Code Pro', monospace",
                }}
              />
              <TextField
                label="Message"
                variant="outlined"
                name="message"
                value={formData.message || ""}
                onChange={handleChange}
                multiline
                rows={4}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: "#a3bffa",
                    },
                  },
                  fontFamily: "'Source Code Pro', monospace",
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "'Source Code Pro', monospace",
                  mt: 2,
                  fontSize: "9px",
                  textAlign: "justify",
                }}
              >
                By submitting this form, you agree that your data will be used
                solely to respond to your inquiry.{" "}
                <a href="/privacy-policy.html">Learn more</a>.
              </Typography>
              <Button
                type="submit"
                variant="contained"
                disableRipple={false}
                sx={{
                  backgroundColor: "#ff5577",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#ff7799",
                  },
                  ".MuiTouchRipple-root": {
                    color: "#ff7799",
                  },
                  fontFamily: "'Source Code Pro', monospace",
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </>
  );
};

export default ContactSummary;
