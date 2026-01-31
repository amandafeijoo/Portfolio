import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Button,
  Typography
} from "@mui/material";
import Swal from "sweetalert2";
import axios from "axios";
import { ContactFormContainer } from "../styles/ContactForm.styles";
import ContactInputs from "./ContactInputs";


const ContactForm = () => {
  const [emailError, setEmailError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const getCSRFToken = () => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let cookie of cookies) {
        const trimmed = cookie.trim();
        if (trimmed.startsWith("csrftoken=")) {
          cookieValue = decodeURIComponent(trimmed.substring(10));
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
      await axios.post(
        "/contact/",
        formData,
        { headers: { "X-CSRFToken": csrfToken } }
      );
      Swal.fire(
        "Success",
        "Thank you for reaching out! Your message has been successfully sent. I will get back to you as soon as possible.",
        "success"
      );
      setFormData({ name: "", email: "", message: "" });
      navigate("/");
    } catch (error) {
      Swal.fire("Error", "There was an error sending your message.", "error");
    }
  };

  return (
    <ContactFormContainer>
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          px: { xs: 0, sm: 4 },
          pb: { xs: 4, sm: 4 },            
          overflowY: "auto",
          overflowX: "hidden",
          fontFamily: "'Source Code Pro', monospace"
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 5,
            mb: 3,
            p: { xs: 2, sm: 3 },
            borderRadius: 2,
            color: "#fff",
            boxShadow: "0 0 10px rgba(192, 192, 192, 0.5)",
            backdropFilter: "blur(10px)",
            border: "1px solid #ff7799",
            backgroundColor: "rgba(200, 162, 200, 0.5)",
            width: "100%",
            maxWidth: "500px",
            mx: "auto",
            fontFamily: "'Source Code Pro', monospace"
          }}
        >
          <Typography
            variant="h8"
            textAlign="center"
            gutterBottom
            sx={{
              fontFamily: "'Source Code Pro', monospace",
              fontWeight: "bold",
              fontSize: {xs: "0.8rem",  sm: "1rem",lineHeight: {xs: 1.4,sm: 1.6,},},
              color: "#e6d6e6"
            }}
          >
            Feel free to reach out for collaborations, questions, or just to say hi. I’m here to help!
          </Typography>

          {/* 👉 Sección separada: campos de entrada */}
          <ContactInputs formData={formData} handleChange={handleChange} />

          {/* 👉 Aviso de privacidad */}
          <Typography
            sx={{
              fontFamily: "'Source Code Pro', monospace",
              fontSize: "0.7rem",
              color: "#ffffff",
              textAlign: "center",
              mt: 2
            }}
          >
            By submitting this form, you agree to our{" "}
            <span
              onClick={() => navigate("/privacy-policy")}
              style={{
                cursor: "pointer",
                color: "#fbb6ce",
                fontWeight: "bold",
                textDecoration: "underline"
              }}
              onMouseEnter={(e) => (e.target.style.color = "#f783ac")}
              onMouseLeave={(e) => (e.target.style.color = "#fbb6ce")}
            >
              Privacy Policy
            </span>
            .
          </Typography>

          {/* 👉 Botón de envío */}
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#ff5577",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#ff7799"
              },
              fontFamily: "'Source Code Pro', monospace"
            }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </ContactFormContainer>
  );
};

export default ContactForm;