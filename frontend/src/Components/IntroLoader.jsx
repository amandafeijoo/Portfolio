// IntroLoader.jsx
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function IntroLoader({ onFinish }) {
  useEffect(() => {
    const t = setTimeout(onFinish, 2600);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <div style={styles.wrapper}>
      <motion.div
        initial={{ scale: 0.18, rotate: -12 }}
        animate={{ scale: 22, rotate: 0 }}
        transition={{
          duration: 2.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={styles.square}
      >
        <div style={styles.inner} />
      </motion.div>
    </div>
  );
}
// 👇 abajo del archivo
const styles = {
    wrapper: {
      position: "fixed",
      inset: 0,
      background: "#000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      overflow: "hidden",
    },
  
    square: {
      width: 160,
      height: 160,
      background: "#0b1c3d",
      border: "6px solid #1e4cff",
      boxShadow: `
        0 0 0 10px rgba(30,76,255,0.35),
        0 40px 120px rgba(0,0,0,0.8)
      `,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  
    inner: {
      width: "65%",
      height: "65%",
      border: "4px solid #fff",
      background: "#021027",
    },
  };
  
