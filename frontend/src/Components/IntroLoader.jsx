import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroLoader({ onFinish }) {
  const [phase, setPhase] = useState("loading");
  const [showText, setShowText] = useState(true);
  const [progress, setProgress] = useState(0);

  // Fake loading %
  useEffect(() => {
    let value = 0;
    const interval = setInterval(() => {
      value += 4;
      setProgress(value);
      if (value >= 100) clearInterval(interval);
    }, 60);

    return () => clearInterval(interval);
  }, []);

  // Timeline
  useEffect(() => {
    const t0 = setTimeout(() => setShowText(false), 1400);
    const t1 = setTimeout(() => setPhase("expand"), 1600);
    const t2 = setTimeout(onFinish, 2800);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        style={styles.wrapper}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* CUADRADO */}
        <motion.div
          style={styles.square}
          initial={{ scale: 0.28, rotate: -12 }}
          animate={
            phase === "loading"
              ? { scale: 0.4, rotate: -12 }
              : { scale: 18, rotate: 0 }
          }
          transition={{
            duration: phase === "loading" ? 1 : 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div style={styles.inner}>
            <AnimatePresence>
              {showText && (
                <motion.div
                  style={styles.textBlock}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div style={styles.percent}>{progress}%</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* TEXTO INFERIOR */}
        <AnimatePresence>
          {showText && (
            <motion.div
              style={styles.caption}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
            >
              WEBCODE-ART
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}

const styles = {
  wrapper: {
    position: "fixed",
    inset: 0,
    background: "#000",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    overflow: "hidden",
  },

  square: {
    width: 160,
    height: 160,
    background: "rgba(18,18,18,1)",
    border: "2px solid rgba(200,164,106,0.35)",
    boxShadow: `
        0 0 0 10px rgba(200,164,106,0.12),
        0 40px 120px rgba(0,0,0,0.8)
      `,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  inner: {
    width: "80%",
    height: "80%",
    border: "1px solid rgba(200,164,106,0.35)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  textBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    textAlign: "center",
  },

  loading: {
    fontSize: "2.2rem",
    letterSpacing: "0.4em",
    textTransform: "uppercase",
    color: "rgba(240,230,210,0.7)",
  },

  percent: {
    fontSize: "2.2rem",
    fontWeight: 500,
    color: "rgba(240,230,210,0.95)",
  },

  caption: {
    marginTop: 0,
    fontSize: "0.7rem",
    letterSpacing: "0.28em",
    color: "rgba(200,164,106,0.8)",
  },
};
