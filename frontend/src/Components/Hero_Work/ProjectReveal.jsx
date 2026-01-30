import { motion } from "framer-motion";
import ProjectContent from "./ProjectContent";
export default function ProjectReveal({ project, area, index }) {
  const gridAreaMap = {
    top: { gridColumn: "1 / -1" },
    left: { gridColumn: "1 / 2" },
    right: { gridColumn: "2 / 3" },
    bottom: { gridColumn: "1 / -1" },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.12,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        position: "relative",
        ...gridAreaMap[area],
      }}
    >
      <ProjectContent project={project} variant={area} />
    </motion.div>
  );
}
