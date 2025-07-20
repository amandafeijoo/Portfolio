import React, { useState, useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import {
  Container,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import ContactInputs from "./ContactInputs";

const getCSRFToken = () => {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    const trimmed = cookie.trim();
    if (trimmed.startsWith("csrftoken=")) {
      return decodeURIComponent(trimmed.substring(10));
    }
  }
  return null;
};

const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


const ContactSummary = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [emailError, setEmailError] = useState("");

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.6 });
  const navigate = useNavigate();

  useEffect(() => {
    controls.start({
      scale: inView ? 1 : 0.2,
      opacity: inView ? 1 : 0,
      transition: { duration: 1 },
    });
  }, [inView, controls]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "email") {
      setEmailError(validateEmail(value) ? "" : "Invalid email address");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const csrfToken = getCSRFToken();

    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire("Error", "All fields are required.", "error");
      return;
    }

    if (emailError) {
      Swal.fire("Error", emailError, "error");
      return;
    }

    try {
      await axios.post("https://portfolio-c6mj.onrender.com/contact/", formData, {
        headers: { "X-CSRFToken": csrfToken },
      });

      Swal.fire(
        "Success",
        "Thank you for reaching out! I’ll get back to you as soon as possible.",
        "success"
      );
      setFormData({ name: "", email: "", message: "" });
      navigate("/");
    } catch (error) {
      Swal.fire("Error", "There was an error sending your message.", "error");
    }
  };

  return (
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
        fontFamily:  "'Source Code Pro', monospace",
      }}
    >
      <motion.div ref={ref} initial={{ scale: 0.2, opacity: 0 }} animate={controls}>
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
            fontFamily:  "'Source Code Pro', monospace",
          }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            gutterBottom
            sx={{ mb: 3, fontWeight: "bold", color: "#fff",fontFamily:  "'Source Code Pro', monospace", }}
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
            }}
          >
            <Typography variant="body1" textAlign="center" gutterBottom  sx={{ fontFamily: "'Source Code Pro', monospace",
            fontSize: {xs: "0.8rem",  sm: "1rem",lineHeight: {xs: 1.4,sm: 1.6,},},
             }}
          >
              Feel free to reach out for collaborations, questions, or just to say hi. I’m here to help!
            </Typography>

            <ContactInputs formData={formData} handleChange={handleChange} />
            <Typography
              sx={{
                fontSize: "0.9rem",
                color: "#ffffff",
                textAlign: "center",
                mt: 2,
                fontFamily:  "'Source Code Pro', monospace",
                fontSize: {xs: "0.65rem",sm: "0.9rem",},
                lineHeight: {xs: 1.6,sm: 1.5,},
              }}
            >
              By submitting this form, you agree to our{" "}
              <span
                onClick={() => navigate("/privacy-policy")}
                style={{
                  cursor: "pointer",
                  color: "#fbb6ce",
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#f783ac")}
                onMouseLeave={(e) => (e.target.style.color = "#fbb6ce")}
              >
                Privacy Policy
              </span>
              .
            </Typography>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#ff5577",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#ff7799",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
};

export default ContactSummary;
