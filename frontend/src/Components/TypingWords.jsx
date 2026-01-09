import { useState, useEffect } from "react";
import { Box } from "@mui/material";

export default function TypingWords({ words, speed = 90, pause = 1200 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const handleTyping = () => {
      if (!isDeleting && charIndex < currentWord.length) {
        setDisplayedText((prev) => prev + currentWord[charIndex]);
        setCharIndex((i) => i + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((i) => i - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }
    };

    const typingInterval = setInterval(handleTyping, speed);

    return () => clearInterval(typingInterval);
  }, [charIndex, isDeleting, pause, speed, wordIndex, words]);

  /* Cursor */
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        fontFamily: "Source Code Pro, monospace",
        letterSpacing: "0.18em",
        color: "#f5e2ce",
        minHeight: "1.4em",
      }}
    >
      {displayedText}
      {showCursor && (
        <Box
          sx={{
            ml: "4px",
            width: "2px",
            height: "1.1em",
            backgroundColor: "#f5e2ce",
          }}
        />
      )}
    </Box>
  );
}
