import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import { useState, useEffect } from "react";
import Circles from "./Circles";
import axios from "axios";
import Swal from "sweetalert2";

const fadeInUp = keyframes`

  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const AnimatedLetter = styled.span`
  display: inline-block;
  position: relative;
  animation: ${rotate} 9s infinite;
  border: 2px solid #99aaff;
  margin-right: 13px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    z-index: 2;
  }

  &::before {
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
  }

  &::after {
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const StyledText = styled.span`
  font-size: 5.2em;
  display: inline-block;
  font-family: "Source Code Pro", monospace;
  text-shadow: 0 0 3px #fff;
  color: #fff;
  margin-top: 33px;
  margin-bottom: 20px;

  @media (max-width: 1024px) and (min-width: 768px) {
    /* iPad Pro */
    font-size: 4.5em;
    margin-top: 25px;
    margin-bottom: 18px;
  }

  @media (max-width: 768px) {
    font-size: 3.5em;
    margin-top: 20px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 2em;
    margin-top: 180px;
    margin-bottom: 10px;
  }
`;

const borderAnimation = keyframes`
  0% { border-color: #7799ff; }
  25% { border-color: #ff7799; }
  75% { border-color: #ff99ff; }
  100% { border-color: #7799ff; }
`;

const AnimatedTypography = styled(Typography)`
  ${({ scale }) => css`
    transform: scale(${scale});
    transition: transform 0.1s ease-in-out;
  `}
`;

const LargeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  top: 12vh;
  text-align: center;
  border: 2px solid #d0ff94;
  padding: 20px;
  animation: ${fadeInUp} 1s cubic-bezier(0.68, -0.55, 0.27, 1.55),
    ${borderAnimation} 5s infinite;
  opacity: 1;
  width: 60vw;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) and (min-width: 768px) {
    /* iPad Pro */
    width: 80vw;
    height: 75vh;
    padding: 18px;
    margin-top: 20px;
  }

  @media (max-width: 834px) and (min-width: 768px) and (min-height: 1024px) and (max-height: 1024px) {
    /* iPad Mini */
    width: 75vw;
    height: 105vh;
    padding: 18px;
    margin-top: 30px;
  }

  @media (max-width: 820px) and (min-width: 820px) and (min-height: 1180px) and (max-height: 1180px) {
    /* iPad Air */
    width: 75vw;
    height: 100vh;
    padding: 18px;
    margin-top: 25px;
  }

  @media (max-width: 768px) {
    width: 80vw;
    height: 70vh;
    padding: 15px;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    width: 90vw;
    height: 70vh;
    padding: 10px;
    margin-top: 40px;
    margin-bottom: 0;
  }

  @media (max-width: 414px) and (min-width: 375px) and (min-height: 812px) and (max-height: 812px) {
    /* iPhone X, iPhone XS, iPhone 11 Pro */
    width: 85vw;
    height: 65vh;
    padding: 12px;
    margin-top: 35px;
  }

  @media (max-width: 375px) and (min-width: 320px) and (min-height: 568px) and (max-height: 568px) {
    /* iPhone SE */
    width: 90vw;
    height: 60vh;
    padding: 8px;
    margin-top: 40px;
  }

  @media (max-width: 414px) and (min-width: 375px) and (min-height: 896px) and (max-height: 896px) {
    /* iPhone XR, iPhone 11, iPhone 11 Pro Max */
    width: 85vw;
    height: 70vh;
    padding: 15px;
    margin-top: 30px;
  }
`;

const SmallSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 15vh;
  text-align: center;
  top: 12vh;
  border-top: 2px solid #99aaff;
  padding: 20px;
  background: linear-gradient(
    45deg,
    rgba(200, 162, 200, 0.1),
    rgba(180, 140, 180, 0.2),
    rgba(160, 120, 160, 0.2)
  );
  animation: ${fadeInUp} 1s cubic-bezier(0.68, -0.55, 0.27, 1.55),
    ${borderAnimation} 5s infinite;
  opacity: 0;
  transition: opacity 1s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  width: 60vw;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    width: 80vw;
    height: 20vh;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 90vw;
    height: 12vh;
    padding: 10px;
  }

  @media (min-width: 820px) and (max-width: 820px) and (min-height: 1180px) and (max-height: 1180px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 75vw;
    height: 18vh;
    padding: 18px;
  }

  @media (min-width: 1024px) and (max-width: 1024px) and (min-height: 1366px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 80vw;
    height: 20vh;
    padding: 20px;
  }

  @media (min-width: 768px) and (max-width: 768px) and (min-height: 1024px) and (max-height: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 80vw;
    height: 18vh;
    padding: 15px;
  }
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  top: 12vh;
  text-align: center;
  border: 2px solid #d0ff94;
  padding: 20px;
  animation: ${fadeInUp} 1s cubic-bezier(0.68, -0.55, 0.27, 1.55),
    ${borderAnimation} 5s infinite;
  opacity: 1;
  width: 60vw;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    width: 80vw;
    height: 70vh;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 100vw;
    height: 70vh;
    padding: 10px;
    margin-top: 120px;
    top: 0;
    margin-bottom: 0;
  }

  @media (min-width: 820px) and (max-width: 820px) and (min-height: 1180px) and (max-height: 1180px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 75vw;
    height: 70vh;
    padding: 18px;
  }

  @media (min-width: 1024px) and (max-width: 1024px) and (min-height: 1366px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 80vw;
    height: 60vh;
    padding: 20px;
  }

  @media (min-width: 768px) and (max-width: 768px) and (min-height: 1024px) and (max-height: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 80vw;
    height: 60vh;
    padding: 15px;
    margin-top: 0px;
  }

  @media (max-width: 430px) {
    /* iPhone 14 Pro */
    width: 100vw;
    height: 90vh; /* Un poco más largo */
    padding: 10px;
    margin-top: 120px;
    top: 0;
    margin-bottom: 0;
  }
`;

const ContactInfo = styled.div`
  margin-top: 20px;
  animation: ${fadeInUp} 4s cubic-bezier(0.68, -0.55, 0.27, 1.55) 1s;
  opacity: 0;
  animation-fill-mode: forwards;

  @media (max-width: 768px) {
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    margin-top: 5px;
  }

  @media (min-width: 1024px) and (max-width: 1024px) and (min-height: 1366px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
    margin-top: 25px;
  }
`;

const ContactFormContainer = styled.div`
  margin-top: 20px;
  animation: ${fadeInUp} 4.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 1.5s;
  opacity: 0;
  animation-fill-mode: forwards;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 95%;
    height: 70vh;
  }

  @media (max-width: 480px) {
    width: 120%;
    max-width: none;
    margin-top: -80px;
    padding: 10px;
    margin-left: -10%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 820px) and (max-width: 820px) and (min-height: 1180px) and (max-height: 1180px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 95%;
    height: 75vh;
    padding: 15px;
    margin-top: -160px;
  }

  @media (min-width: 1024px) and (max-width: 1024px) and (min-height: 1366px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 85%;
    height: 75vh;
    padding: 20px;
    margin-top: -300px;
  }

  @media (min-width: 768px) and (max-width: 768px) and (min-height: 1024px) and (max-height: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 90%;
    height: 75vh;
    padding: 15px;
    margin-top: -90px;
  }
`;

const ContactForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [emailError, setEmailError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        px: 4,
        pb: 4,
        overflowY: "auto",
        fontFamily: "'Source Code Pro', monospace",
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
          p: 3,
          borderRadius: 2,
          color: "#fff",
          boxShadow: "0 0 10px rgba(192, 192, 192, 0.5)",
          backdropFilter: "blur(10px)",
          border: "1px solid #ff7799",
          backgroundColor: "rgba(200, 162, 200, 0.5)",
          width: "100%",
          maxWidth: "500px",
          mx: "auto",
          fontFamily: "'Source Code Pro', monospace",
          "@media (max-width: 1024px) and (min-width: 768px)": {
            // iPad Pro
            p: 4,
            mt: -100,
            mb: -100,
            border: "1px solid #ff7799",
            boxShadow: "0 0 8px rgba(192, 192, 192, 0.5)",
          },
          "@media (max-width: 834px) and (min-width: 768px)": {
            // iPad Mini
            p: 2,
            mt: 3,
            mb: 2,
            border: "1px solid #ff7799",
            boxShadow: "0 0 8px rgba(192, 192, 192, 0.5)",
          },
          "@media (max-width: 820px) and (min-width: 768px)": {
            // iPad Air
            p: 2,
            mt: 3,
            mb: 2,
            border: "1px solid #ff7799",
            boxShadow: "0 0 8px rgba(192, 192, 192, 0.5)",
          },
          "@media (max-width: 900px)": {
            p: 1,
            mt: -21,
            mb: 0,
            border: "1px solid #ff7799",
            boxShadow: "0 0 5px rgba(192, 192, 192, 0.5)",
          },
          "@media (max-width: 430px)": {
            // iPhone Pro 14
            p: 2,
            mt: -15,
            mb: 2,
            border: "1px solid #ff7799",
            boxShadow: "0 0 5px rgba(192, 192, 192, 0.5)",
          },
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
            fontWeight: "bold",
            color: "#e6d6e6",
          }}
        >
          Feel free to reach out for collaborations, questions, or just to say
          hi. I’m here to help!{" "}
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
    </Container>
  );
};

const ContactPage = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newScale = 1 + scrollPosition / 1000;
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          section.style.opacity = 1;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div style={{ minHeight: "220vh" }}>
        <LargeSection>
          <AnimatedTypography
            scale={scale}
            variant="h1"
            component="h1"
            sx={{
              fontFamily: "'Source Code Pro', monospace",
              fontSize: "1.7rem",
              marginTop: "-200px",
              padding: "20px",
            }}
          >
            <StyledText>
              <AnimatedLetter>C</AnimatedLetter>ontact
            </StyledText>
          </AnimatedTypography>
        </LargeSection>
        <SmallSection>
          <ContactInfo>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontFamily: "'Source Code Pro', monospace",
                fontSize: {
                  xs: "1.2rem",
                  sm: "1.5rem",
                  md: "2rem",
                  lg: "1.2rem",
                },
                color: "#ffc0cb",
              }}
            >
              Email
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontFamily: "'Source Code Pro', monospace",
                fontSize: {
                  xs: "0.8rem",
                  sm: "1rem",
                  md: "1.2rem",
                  lg: "1rem",
                },
                color: "#d8bfd8",
              }}
            >
              <a
                href="mailto:amandaflores@webcode-art.com"
                style={{ color: "#d8bfd8", textDecoration: "none" }}
              >
                amandaflores@webcode-art.com
              </a>
            </Typography>
          </ContactInfo>
        </SmallSection>
        <SmallSection>
          <ContactInfo>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontFamily: "'Source Code Pro', monospace",
                fontSize: {
                  xs: "1.2rem",
                  sm: "1.5rem",
                  md: "2rem",
                  lg: "1.2rem",
                },
                color: "#ffc0cb",
              }}
            >
              LinkedIn
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontFamily: "'Source Code Pro', monospace",
                fontSize: {
                  xs: "0.8rem",
                  sm: "1rem",
                  md: "1.2rem",
                  lg: "1rem",
                },
                color: "#d8bfd8",
              }}
            >
              <a
                href="https://www.linkedin.com/in/amanda-flores-feijoo-93956a156"
                style={{
                  color: "#d8bfd8",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Amanda Flores Feijoo
              </a>
            </Typography>
          </ContactInfo>
        </SmallSection>
        <SmallSection>
          <ContactInfo>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontFamily: "'Source Code Pro', monospace",
                fontSize: {
                  xs: "1.2rem",
                  sm: "1.5rem",
                  md: "2rem",
                  lg: "1.2rem",
                },
                color: "#ffc0cb",
                position: "relative",
                zIndex: 2,
              }}
            >
              <a
                href="https://github.com/amandafeijoo"
                style={{
                  color: "#ffc0cb",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontFamily: "'Source Code Pro', monospace",
                fontSize: {
                  xs: "0.8rem",
                  sm: "1rem",
                  md: "1.2rem",
                  lg: "1rem",
                },
                color: "#d8bfd8",
              }}
            >
              amandafeijoo
            </Typography>
          </ContactInfo>
        </SmallSection>
        <div>
          <Circles />
        </div>
        <ContactSection>
          <ContactFormContainer>
            <ContactForm />
          </ContactFormContainer>
        </ContactSection>
      </div>
    </>
  );
};

export default ContactPage;
