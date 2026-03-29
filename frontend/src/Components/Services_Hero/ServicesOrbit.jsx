import { useState } from "react";
import { motion } from "framer-motion";
import { ServicesSection, DragWrapper } from "./ServicesOrbit.styles";
import ServiceCard from "./ServiceCard";

/* ===============================
   SERVICES DATA
================================ */
const services = [
  {
    label: "For small businesses & personal brands",
    title: "Starter Website",
    subtitle:
      "A refined online presence for professionals, personal brands and small businesses.",
    features: [
      "1–3 core pages (Home, About, Contact)",
      "Custom design aligned with your brand",
      "Responsive and mobile-friendly",
      "Basic SEO and performance setup",
      "Contact form connected to your email",
    ],
    price: "Starting at €700",
    timeline: "Approx. 2–3 weeks",
    cta: "Start this project",
  },
  {
    label: "For growing businesses",
    title: "Growth Website",
    subtitle:
      "For businesses that need more structure, flexibility and room to scale.",
    features: [
      "4–6 pages (Services, FAQ, Blog, Contact…)",
      "Visual consistency and design system",
      "Optional blog or content section",
      "Integrations (booking, newsletter, etc.)",
      "Performance and accessibility optimisation",
    ],
    price: "Starting at €1,200",
    timeline: "Approx. 4–5 weeks",
    cta: "Start this project",
  },
  {
    label: "For advanced or complex needs",
    title: "Custom Web Application",
    subtitle:
      "For projects that require logic, user interaction, data or more advanced functionality.",
    features: [
      "Custom front-end development",
      "Back-end with Django and PostgreSQL",
      "User accounts, dashboards or booking systems",
      "Payments and third-party integrations",
      "Scalable structure built around your needs",
    ],
    price: "Custom quote",
    timeline: "Based on project scope",
    cta: "Request a custom quote",
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
    scale: 1,
    opacity: 1,
    zIndex: 3,
    filter: "blur(0px)",
  },
  left: {
    x: -380,
    y: 18,
    scale: 0.82,
    opacity: 0.22,
    zIndex: 1,
    filter: "blur(1.2px)",
  },
  right: {
    x: 380,
    y: 18,
    scale: 0.82,
    opacity: 0.22,
    zIndex: 1,
    filter: "blur(1.2px)",
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
              key={`${services[index].title}-${position}`}
              variants={cardVariants}
              animate={position}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              drag={position === "center" ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.22}
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
              <ServiceCard
                {...services[index]}
                isActive={position === "center"}
              />
            </motion.div>
          );
        })}
      </DragWrapper>
    </ServicesSection>
  );
}
