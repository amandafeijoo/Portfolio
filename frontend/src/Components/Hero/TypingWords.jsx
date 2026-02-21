import { useState, useEffect } from "react";
import { Box } from "@mui/material";

export default function TypingWords({
  words,
  speed = 90,
  pause = 1200,
  sx = {},
}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const currentWord = words[wordIndex];

  /* =========================
     ✍️ TYPING LOGIC
  ========================= */
  useEffect(() => {
    let timeout;

    if (!isDeleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setText((prev) => prev + currentWord[charIndex]);
        setCharIndex((i) => i + 1);
      }, speed);
    } else if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pause);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((i) => i - 1);
      }, speed / 1.6);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentWord, pause, speed, words.length]);

  /* =========================
     🖱️ CURSOR BLINK
  ========================= */
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((v) => !v);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  /* =========================
     🎨 RENDER
  ========================= */
  return (
    <Box
      component="span"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        minHeight: "1.4em",
        ...sx,
      }}
    >
      {text}

      {showCursor && (
        <Box
          component="span"
          sx={{
            ml: "4px",
            width: "2px",
            height: "1.1em",
            backgroundColor: "currentColor",
            display: "inline-block",
          }}
        />
      )}
    </Box>
  );
}
