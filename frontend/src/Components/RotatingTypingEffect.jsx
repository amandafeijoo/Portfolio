import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import styled, { keyframes } from "styled-components";

const borderAnimation = keyframes`
  0% { border-color: #7799ff; }
  25% { border-color: #ff7799; }
  50% { border-color: #99ff77; }
  75% { border-color: #ff99ff; }
  100% { border-color: #7799ff; }
`;

const AnimatedBox = styled(Box)`
  display: inline-block;
  border: 2px solid;
  border-radius: 10px;
  padding: 10px;
  font-family: "Source Code Pro", monospace;
  color: #fff;
  font-size: 12px;
  margin-bottom: 20px;
  text-align: justify;
  white-space: nowrap;
  animation: ${borderAnimation} 4s linear infinite;
`;

const RotatingTypingEffect = ({ messages, speed = 100, pause = 1000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentMessage = messages[messageIndex];
      if (!isDeleting && index < currentMessage.length) {
        setDisplayedText((prev) => prev + currentMessage[index]);
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      } else if (!isDeleting && index === currentMessage.length) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
        setMessageIndex((prev) => (prev + 1) % messages.length);
      }
    };

    const interval = setInterval(handleTyping, speed);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, [messages, speed, pause, isDeleting, index, messageIndex]);

  return (
    <AnimatedBox>
      {displayedText}
      {showCursor && (
        <span style={{ backgroundColor: "#fff", color: "#000" }}>&nbsp;</span>
      )}
    </AnimatedBox>
  );
};

export default RotatingTypingEffect;
