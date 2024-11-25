import React from "react";
import styled, { keyframes, css } from "styled-components";
import { Box, Container, TextField, Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Circles from "./Circles";

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
  z-index: 1;
`;

const ContactInfo = styled.div`
  margin-top: 20px;
  animation: ${fadeInUp} 4s cubic-bezier(0.68, -0.55, 0.27, 1.55) 1s;
  opacity: 0;
  animation-fill-mode: forwards;
`;

const ContactFormContainer = styled.div`
  margin-top: 20px;
  animation: ${fadeInUp} 4.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) 1.5s;
  opacity: 0;
  animation-fill-mode: forwards;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
        }}
      >
        <AnimatedTypography
          variant="h6"
          component="h1"
          textAlign="center"
          gutterBottom
          scale={1}
          sx={{
            fontFamily: "'Source Code Pro', monospace",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          Feel free to reach out for collaborations, questions, or just to say
          hi. I’m here to help!{" "}
        </AnimatedTypography>
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={formData.name}
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
          value={formData.email}
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
          value={formData.message}
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
          By submitting this form, you agree that your data will be used solely
          to respond to your inquiry.{" "}
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
              }}
            >
              Email
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontFamily: "'Source Code Pro', monospace",
              }}
            >
              amanda_feijoo@hotmail.com
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
              }}
            >
              Instagram
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontFamily: "'Source Code Pro', monospace",
              }}
            >
              @mandyfeijoo
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
              }}
            >
              Facebook
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontFamily: "'Source Code Pro', monospace",
              }}
            >
              Amanda Flores Feijoo
            </Typography>
          </ContactInfo>
        </SmallSection>
        <div>
          <Circles />
        </div>
        <LargeSection>
          <ContactFormContainer>
            <ContactForm />
          </ContactFormContainer>
        </LargeSection>
      </div>
    </>
  );
};

export default ContactPage;
