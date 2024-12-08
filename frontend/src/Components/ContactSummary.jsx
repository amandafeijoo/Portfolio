import React from "react";
import { useState } from "react";
import { Box, Typography, Container, TextField, Button } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ContactSummary = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailError, setEmailError] = useState("");

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.6,
  });

  const navigate = useNavigate();

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

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === "email") {
      validateEmail(value);
    }
  };

  const getCSRFToken = () => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, 10) === "csrftoken=") {
          cookieValue = decodeURIComponent(cookie.substring(10));
          break;
        }
      }
    }
    return cookieValue;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const csrfToken = getCSRFToken();

    if (emailError) {
      Swal.fire("Error", "Invalid email address", "error");
      return;
    }

    try {
      const response = await axios.post(
        "https://portfolio-c6mj.onrender.com/contact/",
        formData,
        {
          headers: {
            "X-CSRFToken": csrfToken,
          },
        }
      );
      Swal.fire("Success", response.data.message, "success");
      setFormData({ name: "", email: "", message: "" });
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      Swal.fire("Error", "There was an error sending your message.", "error");
    }
  };

  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          px: { xs: 2, sm: 4 },
          pb: 4,
          mt: { xs: 0, sm: -30 },
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
              p: { xs: 2, sm: 3 },
              width: "100%",
              maxWidth: "600px",
              mx: "auto",
              mt: { xs: 10, sm: 40 },
              mb: 5,
              fontFamily: "'Source Code Pro', monospace",
              "@media (max-width: 1024px) and (min-width: 768px)": {
                mt: -30,
                mb: -300,
              },
              "@media (max-width: 834px) and (min-width: 768px)": {
                mt: 10,
                mb: 0,
              },
              "@media (max-width: 820px) and (min-width: 768px)": {
                mt: 30,
                mb: 0,
              },
              "@media (min-width: 1024px) and (max-width: 1366px)": {
                // iPad Pro
                mt: -20,
                mb: -60,
              },
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
                p: { xs: 2, sm: 3 },
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
                error={!!emailError}
                helperText={emailError}
                autoComplete="new-password"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: emailError ? "pink" : "#a3bffa",
                    },
                    "& fieldset": {
                      borderColor: emailError ? "pink" : "rgba(0, 0, 0, 0.23)",
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
