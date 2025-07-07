import React from "react";
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import styled, { keyframes, css } from "styled-components";
import { motion } from "framer-motion";
import {
  MdPerson,
  MdEmail,
  MdMessage,
  MdReply,
  MdInfo,
  MdStorage,
  MdSecurity,
  MdLink,
  MdUpdate,
  MdContactMail,
} from "react-icons/md";

const floatAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const borderAnimation = keyframes`
  0% { border-color: #7799ff; }
  25% { border-color: #ff7799; }
  75% { border-color: #ff99ff; }
  100% { border-color: #7799ff; }
`;

const AnimatedBox = styled(Box)`
  max-width: 800px;
  margin: 150px auto;
  padding: 40px 20px;
  border-radius: 16px;
  border: 3px solid;
  ${css`
    animation: ${borderAnimation} 8s linear infinite;
  `}
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  font-family: "Source Code Pro", monospace;
  text-align: justify;
  overflow: hidden;
  color: #ffffff;
  background-color: #121212;
  position: relative;
`;

const FloatingCircle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  animation: ${floatAnimation} 6s ease-in-out infinite;
`;

const StyledTitle = styled(Typography)`
  background-color: rgba(255, 255, 255, 0.05);
  color: #fbb6ce;
  padding: 6px 12px;
  display: inline-block;
  border-radius: 6px;
  font-family: "Source Code Pro", monospace;
`;

const ListItem = ({ icon, text }) => (
  <li style={{ display: "flex", alignItems: "center", marginBottom: "6px" }}>
    <span style={{ marginRight: "8px", color: "#fbb6ce" }}>{icon}</span>
    <Typography sx={{ fontFamily: "'Source Code Pro', monospace" }}>
      {text}
    </Typography>
  </li>
);

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <AnimatedBox>
      <FloatingCircle
        style={{
          width: 400,
          height: 400,
          top: -20,
          right: -20,
          background: "rgba(255, 255, 255, 0.2)",
        }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <FloatingCircle
        style={{
          width: 400,
          height: 400,
          bottom: -30,
          left: -30,
          background: "rgba(255, 255, 255, 0.15)",
        }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <Typography
        variant="h4"
        sx={{
          mb: 3,
          fontWeight: "bold",
          fontFamily: "'Source Code Pro', monospace",
        }}
      >
        Privacy Policy
      </Typography>

      <Typography sx={{ mb: 2, fontFamily: "'Source Code Pro', monospace" }}>
        <strong>Last updated:</strong> Jul, 07, 2025
      </Typography>

      <Typography sx={{ mb: 3, fontFamily: "'Source Code Pro', monospace" }}>
        This Privacy Policy explains how your personal information is collected,
        used, and protected when you submit a form on my personal portfolio
        website, webcode-art.com.
      </Typography>

      <StyledTitle
        variant="h6"
        sx={{
          mt: 4,
          fontWeight: "bold",
          fontFamily: "'Source Code Pro', monospace",
        }}
      >
        Information Collection
      </StyledTitle>
      <Typography sx={{ mb: 2, fontFamily: "'Source Code Pro', monospace" }}>
        When you submit a form on my website, I collect the following personal
        information:
      </Typography>
      <ul>
        <ListItem icon={<MdPerson />} text="Your name" />
        <ListItem icon={<MdEmail />} text="Your email address" />
        <ListItem icon={<MdMessage />} text="Your message content" />
      </ul>

      <StyledTitle
        variant="h6"
        sx={{
          mt: 4,
          fontWeight: "bold",
          fontFamily: "'Source Code Pro', monospace",
        }}
      >
        Use of Information
      </StyledTitle>
      <Typography sx={{ mb: 2, fontFamily: "'Source Code Pro', monospace" }}>
        I use the information you provide to:
      </Typography>
      <ul>
        <ListItem icon={<MdReply />} text="Respond to your inquiries" />
        <ListItem
          icon={<MdInfo />}
          text="Provide information or services you request"
        />
      </ul>

      <StyledTitle
        variant="h6"
        sx={{
          mt: 4,
          fontWeight: "bold",
          fontFamily: "'Source Code Pro', monospace",
        }}
      >
        Sharing of Information
      </StyledTitle>
      <Typography sx={{ mb: 3, fontFamily: "'Source Code Pro', monospace" }}>
        I do not share your personal information with third parties, except as
        necessary to respond to your inquiries or as required by law.
      </Typography>

      <StyledTitle
        variant="h6"
        sx={{
          mt: 4,
          fontWeight: "bold",
          fontFamily: "'Source Code Pro', monospace",
        }}
      >
        Data Retention
      </StyledTitle>
      <Typography sx={{ mb: 3, fontFamily: "'Source Code Pro', monospace" }}>
        I retain your information only for as long as necessary to respond to
        your inquiry. If you would like your information to be deleted, please
        contact me.
      </Typography>

      <StyledTitle
        variant="h6"
        sx={{
          mt: 4,
          fontWeight: "bold",
          fontFamily: "'Source Code Pro', monospace",
        }}
      >
        External Links
      </StyledTitle>
      <Typography sx={{ mb: 3, fontFamily: "'Source Code Pro', monospace" }}>
        This site contains links to external websites, such as GitHub, Facebook,
        Instagram, and X (formerly Twitter). I am not responsible for the
        privacy practices of these external websites. Please refer to their
        respective privacy policies for more information.
      </Typography>

      <StyledTitle
        variant="h6"
        sx={{
          mt: 4,
          fontWeight: "bold",
          fontFamily: "'Source Code Pro', monospace",
        }}
      >
        Security
      </StyledTitle>
      <Typography sx={{ mb: 3, fontFamily: "'Source Code Pro', monospace" }}>
        I take reasonable measures to protect your information, but please note
        that no system is completely secure.
      </Typography>

      <StyledTitle
        variant="h6"
        sx={{
          mt: 4,
          fontWeight: "bold",
          fontFamily: "'Source Code Pro', monospace",
        }}
      >
        Your Rights
      </StyledTitle>
      <Typography sx={{ mb: 3, fontFamily: "'Source Code Pro', monospace" }}>
        You have the right to access, correct, or delete your personal
        information. To exercise these rights, please contact me at
        amandaflores@webcode-art.com.
      </Typography>

      <StyledTitle
        variant="h6"
        sx={{
          mt: 4,
          fontWeight: "bold",
          fontFamily: "'Source Code Pro', monospace",
        }}
      >
        Changes to This Policy
      </StyledTitle>
      <Typography sx={{ mb: 3, fontFamily: "'Source Code Pro', monospace" }}>
        I may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated date.
      </Typography>

      <StyledTitle
        variant="h6"
        sx={{
          mt: 4,
          fontWeight: "bold",
          fontFamily: "'Source Code Pro', monospace",
        }}
      >
        Contact
      </StyledTitle>
      <Typography sx={{ fontFamily: "'Source Code Pro', monospace" }}>
        If you have any questions about this Privacy Policy, please contact me
        at: amandaflores@webcode-art.com
      </Typography>
    </AnimatedBox>
  );
};

export default PrivacyPolicy;
