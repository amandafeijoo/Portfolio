import { useState } from "react";
import { motion } from "framer-motion";
import { ServicesSection, DragWrapper } from "./styles/ServicesOrbit.styles";
import ServiceCard from "./ServiceCard";

/* ===============================
   SERVICES DATA
================================ */
const services = [
  {
    title: "Essential Website",
    subtitle:
      "A clear and elegant online presence for professionals and small businesses.",
    features: [
      "1–3 pages (Home, About, Contact)",
      "Custom design adapted to your brand",
      "Responsive & mobile-friendly",
      "Basic SEO & performance setup",
      "Contact form connected to your email",
    ],
    price: "Starting at €700",
    timeline: "Approx. 2–3 weeks",
  },
  {
    title: "Business Website",
    subtitle:
      "For growing businesses that need structure, clarity and flexibility.",
    features: [
      "4–6 pages (Services, FAQ, Blog, Contact…)",
      "Design system & visual consistency",
      "Optional blog or content section",
      "Integrations (booking, newsletter, etc.)",
      "Performance & accessibility optimization",
    ],
    price: "Starting at €1.200",
    timeline: "Approx. 4–5 weeks",
  },
  {
    title: "Custom Web Application",
    subtitle: "For ideas that require logic, data or user interaction.",
    features: [
      "Custom front-end (React)",
      "Back-end with Django & PostgreSQL",
      "User accounts or booking systems",
      "Payments & integrations (Stripe)",
      "Admin panel & scalable structure",
    ],
    price: "Custom quote",
    timeline: "Based on project scope",
  },
];

/* ===============================
   HELPERS
================================ */
const getLeftIndex = (index) => (index === 0 ? services.length - 1 : index - 1);

const getRightIndex = (index) => (index + 1) % services.length;

/* ===============================
   MOTION VARIANTS
================================ */
const cardVariants = {
  center: {
    x: 0,
    y: 0,
    scale: 1.03,
    opacity: 1,
    zIndex: 3,
  },
  left: {
    x: -420,
    y: -20,
    scale: 0.5,
    opacity: 0.3,
    zIndex: 1,
    filter: "blur(0.5px)",
  },
  right: {
    x: 420,
    y: -20,
    scale: 0.5,
    opacity: 0.3,
    zIndex: 1,
    filter: "blur(0.8px)",
  },
};

/* ===============================
   COMPONENT
================================ */
export default function ServicesOrbit({ impulseRef }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCard = () => setActiveIndex((prev) => (prev + 1) % services.length);

  const prevCard = () =>
    setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));

  const leftIndex = getLeftIndex(activeIndex);
  const rightIndex = getRightIndex(activeIndex);

  return (
    <ServicesSection>
      <DragWrapper>
        {[leftIndex, activeIndex, rightIndex].map((index) => {
          const position =
            index === activeIndex
              ? "center"
              : index === leftIndex
              ? "left"
              : "right";

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              animate={position}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              drag={position === "center" ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              onDragEnd={(e, info) => {
                if (info.offset.x < -90) {
                  impulseRef.current = 0.025;
                  nextCard();
                }

                if (info.offset.x > 90) {
                  impulseRef.current = -0.025;
                  prevCard();
                }
              }}
              style={{
                position: "absolute",
                cursor: position === "center" ? "grab" : "default",
              }}
              whileTap={{
                cursor: "grabbing",
              }}
            >
              <ServiceCard {...services[index]} />
            </motion.div>
          );
        })}
      </DragWrapper>
    </ServicesSection>
  );
}
