import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Divider } from "./WhatIDo.styles";

export default function MobileStack({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div
      style={{
        padding: "28px 18px 80px",
        display: "flex",
        flexDirection: "column",
        gap: 30,
      }}
    >
      {items.map((item, i) => {
        const isOpen = openIndex === i;

        return (
          <motion.div
            key={i}
            layout
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{
              borderRadius: 24,
              overflow: "hidden",
              background: "rgba(18,19,20,0.75)",
              border: "1px solid rgba(201,184,138,0.28)",
              boxShadow: "0 0 28px rgba(201,184,138,0.15)",
            }}
          >
            {/* IMAGE */}
            <img
              src={item.mobileSrc || item.src}
              alt={item.title}
              style={{
                width: "100%",
                height: 210,
                objectFit: "cover",
                display: "block",
              }}
            />

            {/* HEADER */}
            <div
              onClick={() => toggle(i)}
              style={{
                padding: 22,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <div>
                <h3
                  style={{
                    margin: 0,
                    color: "rgba(247, 236, 205, 0.9)",
                    fontSize: "1.1rem",
                    fontWeight: 500,
                  }}
                >
                  {item.title}
                </h3>

                {item.intro && (
                  <p
                    style={{
                      margin: "6px 0 0",
                      fontSize: "0.85rem",
                      color: "rgba(244,242,237,0.6)",
                      lineHeight: 1.4,
                    }}
                  >
                    {item.intro}
                  </p>
                )}
              </div>

              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRightIcon sx={{ color: "#C9B88A", fontSize: 22 }} />
              </motion.div>
            </div>

            {/* EXPANDABLE */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ padding: "0 22px 24px" }}
                >
                  <Divider />

                  <p
                    style={{
                      marginTop: 14,
                      color: "rgba(244,242,237,0.8)",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.text}
                  </p>

                  {item.bullets?.length > 0 && (
                    <ul
                      style={{
                        marginTop: 16,
                        paddingLeft: 18,
                        color: "rgba(244,242,237,0.7)",
                        lineHeight: 1.7,
                      }}
                    >
                      {item.bullets.map((b, idx) => (
                        <li key={idx}>{b}</li>
                      ))}
                    </ul>
                  )}

                  {/* CTA con ruta dinámica */}
                  {item.cta && (
                    <motion.div
                      whileTap={{ scale: 0.96 }}
                      onClick={() => {
                        if (!item.route) return;

                        // 👉 Ruta externa
                        if (item.route.startsWith("http")) {
                          window.open(
                            item.route,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }
                        // 👉 Ruta interna
                        else {
                          navigate(item.route);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                      style={{
                        marginTop: 20,
                        fontSize: "0.75rem",
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                        color: "#C9B88A",
                        cursor: "pointer",
                      }}
                    >
                      {item.cta} →
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
