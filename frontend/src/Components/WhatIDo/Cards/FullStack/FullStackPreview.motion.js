import { Box } from "@mui/material";
import { motion } from "framer-motion";

export const MotionBox = motion(Box);

export const floatTransition = {
  front: {
    duration: 3.2,
    repeat: Infinity,
    ease: "easeInOut",
  },
  back: {
    duration: 3.6,
    repeat: Infinity,
    ease: "easeInOut",
    delay: 0.2,
  },
};

export const connectorTransition = {
  duration: 2.2,
  repeat: Infinity,
  ease: "easeInOut",
};
