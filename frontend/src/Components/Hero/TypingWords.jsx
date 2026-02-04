import { useState, useEffect } from "react";
import { Box } from "@mui/material";

export default function TypingWords({
  words,
  speed = 90,
  pause = 1200,
}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const currentWord = words[wordIndex];

  /* ===== Typing logic ===== */
  useEffect(() => {
    let timeout;

    if (!isDeleting && charIndex < currentWord.length) {
      // typing
      timeout = setTimeout(() => {
        setText((prev) => prev + currentWord[charIndex]);
        setCharIndex((i) => i + 1);
      }, speed);

    } else if (!isDeleting && charIndex === currentWord.length) {
      // pause at full word
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pause);

    } else if (isDeleting && charIndex > 0) {
      // deleting
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((i) => i - 1);
      }, speed / 1.6);

    } else if (isDeleting && charIndex === 0) {
      // next word
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentWord, pause, speed, words.length]);

  /* ===== Cursor blink ===== */
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((v) => !v);
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
      {text}
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

