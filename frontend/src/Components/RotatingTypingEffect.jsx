import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import styled, { keyframes } from "styled-components";

const borderAnimation = keyframes`
  0% {
    border-color: rgba(201, 184, 138, 0.25);
    box-shadow: 0 0 20px rgba(201, 184, 138, 0.15);
  }
  50% {
    border-color: rgba(201, 184, 138, 0.55);
    box-shadow: 0 0 35px rgba(201, 184, 138, 0.35);
  }
  100% {
    border-color: rgba(201, 184, 138, 0.25);
    box-shadow: 0 0 20px rgba(201, 184, 138, 0.15);
  }
`;

const AnimatedBox = styled(Box)`
  display: inline-block;
  position: relative;

  border: 1px solid rgba(201, 184, 138, 0.35);
  border-radius: 12px;
  padding: 10px 14px;

  font-family: "Source Code Pro", monospace;
  font-size: 12px;
  letter-spacing: 0.03em;

  background-color: rgba(18, 19, 20, 0.85);
  color: #f4f2ed;

  margin-bottom: 20px;
  white-space: nowrap;

  animation: ${borderAnimation} 6s ease-in-out infinite;

  backdrop-filter: blur(6px);
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
        <span
          style={{
            display: "inline-block",
            width: "8px",
            height: "1.1em",
            marginLeft: "2px",
            backgroundColor: "rgba(201, 184, 138, 0.9)",
            opacity: showCursor ? 1 : 0,
            transition: "opacity 0.2s",
          }}
        />
      )}
    </AnimatedBox>
  );
};

export default RotatingTypingEffect;
