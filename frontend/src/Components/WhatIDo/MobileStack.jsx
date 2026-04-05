import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Divider } from "./WhatIDo.styles";

import BookingFlowPreviewMobile from "./Cards/Mobile/BookingFlowPreviewMobile";
import ResponsivePreviewMobile from "./Cards/Mobile/ResponsivePreviewMobile";
import FullStackPreviewMobile from "./Cards/Mobile/FullStackPreviewMobile";
import TravelLuxuryPreviewMobile from "./Cards/Mobile/TravelLuxuryPreviewMobile";

export default function MobileStack({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const renderMobileMedia = (item) => {
    if (item.title === "Custom websites") {
      return <TravelLuxuryPreviewMobile />;
    }

    if (item.title === "Full-stack systems") {
      return <FullStackPreviewMobile />;
    }

    if (item.title === "Bookings & payments") {
      return <BookingFlowPreviewMobile />;
    }

    if (item.title === "Responsive experiences") {
      return <ResponsivePreviewMobile />;
    }

    return (
      <img
        src={item.mobileSrc || item.src}
        alt={item.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    );
  };

  const handleCtaClick = (item) => {
    if (!item.route) return;

    if (item.route.startsWith("http")) {
      window.open(item.route, "_blank", "noopener,noreferrer");
    } else {
      navigate(item.route);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        padding: "0px 18px 80px",
        display: "flex",
        flexDirection: "column",
        gap: 30,
        marginTop: -30,
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
            <div
              style={{
                width: "100%",
                height: 240,
                overflow: "hidden",
                borderBottom: "1px solid rgba(201,184,138,0.14)",
                background: "transparent",
              }}
            >
              {renderMobileMedia(item)}
            </div>

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

                  {item.cta && (
                    <motion.div
                      whileTap={{ scale: 0.96 }}
                      onClick={() => handleCtaClick(item)}
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
