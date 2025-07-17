import styled, { keyframes, css } from "styled-components";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

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

export const AnimatedBox = styled(Box)`
  max-width: 800px;
  margin: 150px auto 0 auto;
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

export const FloatingCircle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  animation: ${floatAnimation} 6s ease-in-out infinite;
`;

export const StyledTitle = styled(Typography)`
  background-color: rgba(255, 255, 255, 0.05);
  color: #fbb6ce;
  padding: 6px 12px;
  display: inline-block;
  border-radius: 6px;
  font-family: "Source Code Pro", monospace;
`;
