import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

const TypingEffect = ({ text = "", speed = 100, pause = 1000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      } else if (!isDeleting && index === text.length) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
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
  }, [text, speed, pause, isDeleting, index]);

  return (
    <Typography
      component="div"
      sx={{
        fontFamily: "'Source Code Pro', monospace",
        color: "#fff",
        fontSize: "1em",
        marginBottom: "20px",
        textAlign: "justify",
        whiteSpace: "pre-wrap",
      }}
    >
      {displayedText}
      {showCursor && (
        <span style={{ backgroundColor: "#fff", color: "#000" }}>&nbsp;</span>
      )}
    </Typography>
  );
};

export default TypingEffect;
