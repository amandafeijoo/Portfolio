import React, { useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { Container, Box, Typography, Button } from "@mui/material";
import ContactInputs2 from "./Portfolio/ContactInputs2";

/* ===============================
   HELPERS
================================ */

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

/* ===============================
   COMPONENT
================================ */

const ContactSummary = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [emailError, setEmailError] = useState("");

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.6 });
  const navigate = useNavigate();

  useEffect(() => {
    controls.start({
      scale: inView ? 1 : 0.94,
      opacity: inView ? 1 : 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
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
      await axios.post("/contact/", formData, {
        headers: { "X-CSRFToken": csrfToken },
      });

      Swal.fire(
        "Success",
        "Thank you for reaching out. I’ll get back to you soon.",
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
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, sm: 4 },
        pb: 6,
        overflowX: "hidden",
        fontFamily: "'Inter', sans-serif", 

      }}
    >
      <motion.div
        ref={ref}
        initial={{ scale: 0.94, opacity: 0 }}
        animate={controls}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3.5,
            px: { xs: 4, sm: 5 },
            py: { xs: 3, sm: 5 },
            width: "100%",
            maxWidth: "540px",
            borderRadius: "30px",
            fontFamily: "'Inter', sans-serif", 


            color: "rgba(255,255,255,0.9)",

            background: `
              linear-gradient(
                180deg,
                rgba(255,255,255,0.05),
                rgba(255,255,255,0.015)
              )
            `,
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",

            border: "1.5px solid rgba(201,169,106,0.35)",

            boxShadow: `
              0 50px 120px rgba(0,0,0,0.65),
              0 0 60px rgba(201,169,106,0.15),
              inset 0 1px 0 rgba(255,255,255,0.18)
            `,

            transition: "all 0.45s cubic-bezier(0.22,1,0.36,1)",

            "&:hover": {
              boxShadow: `
                0 70px 140px rgba(0,0,0,0.75),
                0 0 80px rgba(201,169,106,0.22)
              `,
            },
          }}
        >
          {/* TITLE */}
          <Typography
            textAlign="center"
            sx={{
              fontSize: { xs: "1.9rem", sm: "2.8rem" },
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontFamily: "'Inter', sans-serif",

              background: "linear-gradient(180deg, #ffffff, #e6d8c6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",

              textShadow: "0 8px 30px rgba(0,0,0,0.6)",
            }}
          >
            Contact
          </Typography>

          {/* SUBTITLE */}
          <Typography
            textAlign="center"
            sx={{
              fontSize: "0.9rem",
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.6)",
              letterSpacing: "0.04em",
            }}
          >
            Feel free to reach out for collaborations, questions,
            or just to say hi.
          </Typography>

          {/* DIVIDER */}
          <Box
            sx={{
              width: "60px",
              fontFamily: "'Inter', sans-serif",
              height: "1px",
              mx: "auto",
              background:
                "linear-gradient(to right, transparent, rgba(201,169,106,0.85), transparent)",
              opacity: 0.8,
            }}
          />

          <ContactInputs2
            formData={formData}
            handleChange={handleChange}
          />

          {/* PRIVACY */}
          <Typography
            textAlign="center"
            sx={{
              fontSize: { xs: "0.65rem", sm: "0.85rem" },
              color: "rgba(255,255,255,0.5)",
              fontFamily: "'Inter', sans-serif",
              mt: 1,
            }}
          >
            By submitting this form, you agree to our{" "}
            <span
              onClick={() => navigate("/privacy-policy")}
              style={{
                cursor: "pointer",
                color: "rgba(201,169,106,0.9)",
                fontFamily: "'Inter', sans-serif",
                textDecoration: "underline",
              }}
            >
              Privacy Policy
            </span>
          </Typography>

          {/* BUTTON */}
          <Button
  type="submit"
  sx={{
    mt: 2,
    py: 1.4,
    borderRadius: "18px",

    background: "rgba(10,10,10,0.85)",
    color: "rgba(255,255,255,0.9)",

    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    fontSize: "0.8rem",
    letterSpacing: "0.22em",
    textTransform: "uppercase",

    border: "1px solid rgba(247, 246, 243, 0.35)",

    boxShadow: `
      0 10px 30px rgba(0,0,0,0.6),
      inset 0 1px 0 rgba(255,255,255,0.06)
    `,

    backdropFilter: "blur(6px)",

    transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",

    "&:hover": {
      transform: "translateY(-2px)",
      borderColor: "rgba(201,169,106,0.7)",
      boxShadow: `
        0 20px 50px rgba(0,0,0,0.75),
        0 0 30px rgba(201,169,106,0.25)
      `,
      background: "rgba(12,12,12,0.95)",
    },
  }}
>
  Send Message
</Button>

        </Box>
      </motion.div>
    </Container>
  );
};

export default ContactSummary;

