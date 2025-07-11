import React, { useState } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import { motion } from "framer-motion";

const ContactSummary = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailError, setEmailError] = useState("");
  const [formError, setFormError] = useState("");

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

    if (!formData.name || !formData.email || !formData.message) {
      setFormError("All fields are required");
      return;
    }

    if (emailError) {
      Swal.fire("Error", "Invalid email address", "error");
      return;
    }

    try {
      console.log("Form Data:", formData);
      const response = await axios.post(
        "https://portfolio-c6mj.onrender.com/contact/",
        formData,
        {
          headers: {
            "X-CSRFToken": csrfToken,
          },
        }
      );
      Swal.fire(
        "Success",
        "Thank you for reaching out! Your message has been successfully sent. I will get back to you as soon as possible.",
        "success"
      );
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
                color: {
                  xs: "#e6e6fa",
                  sm: "#e6e6fa",
                  md: "#fff",
                },
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
                value={formData.name}
                onChange={handleChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#a3bffa",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#a3bffa",
                    },
                    "& input": {
                      color: "#e6d6e6",
                      fontFamily: "'Source Code Pro', monospace",
                    },
                    "&:hover fieldset": {
                      borderColor: "#ffc0cb",
                    },
                    "&:hover input": {
                      color: "#ffc0cb",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#e6d6e6",
                    fontFamily: "'Source Code Pro', monospace",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#a3bffa",
                  },
                }}
              />
              <TextField
                label="Email"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#a3bffa",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#a3bffa",
                    },
                    "& input": {
                      color: "#e6d6e6",
                      fontFamily: "'Source Code Pro', monospace",
                    },
                    "&:hover fieldset": {
                      borderColor: "#ffc0cb",
                    },
                    "&:hover input": {
                      color: "#ffc0cb",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#e6d6e6",
                    fontFamily: "'Source Code Pro', monospace",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#a3bffa",
                  },
                }}
              />
              <TextField
                label="Message"
                variant="outlined"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={4}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#a3bffa",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#a3bffa",
                    },
                    "& input": {
                      color: "#e6d6e6",
                      fontFamily: "'Source Code Pro', monospace",
                    },
                    "& textarea": {
                      color: "#e6d6e6",
                      fontFamily: "'Source Code Pro', monospace",
                    },
                    "&:hover fieldset": {
                      borderColor: "#ffc0cb",
                    },
                    "&:hover input, &:hover textarea": {
                      color: "#ffc0cb",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#e6d6e6",
                    fontFamily: "'Source Code Pro', monospace",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#a3bffa",
                  },
                }}
              />
              <Typography
                sx={{
                  fontFamily: "'Source Code Pro', monospace",
                  fontSize: "0.9rem",
                  color: "#ffffff",
                  textAlign: "center",
                  mt: 2,
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
                , where we explain how we collect, store, and use your data.
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
