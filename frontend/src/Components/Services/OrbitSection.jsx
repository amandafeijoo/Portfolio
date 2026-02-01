import { Box } from "@mui/material";
import { useRef } from "react";
import ServicesOrbit from "./ServicesOrbit";
import ServicesHero from "./ServicesHero";
import OrbitThree from "./Sphere/OrbitThree";
import { useCursor } from "../../Context/CursorContext";
import OrbitStars from "./OrbitStars";

export default function OrbitSection() {
  const orbitImpulse = useRef(0);
  const isDragging = useRef(false);
  const lastX = useRef(0);
  const { setCursorMode } = useCursor();

  /* =========================
     DRAG LOGIC
  ========================= */
  const onMouseDown = (e) => {
    isDragging.current = true;
    lastX.current = e.clientX;
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;

    const delta = e.clientX - lastX.current;
    lastX.current = e.clientX;
    orbitImpulse.current += delta * 0.003;
  };

  return (
    <Box
      onMouseEnter={() => setCursorMode("drag")}
      onMouseLeave={() => setCursorMode("default")}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: "125vh", md: "160vh" },
        overflow: "hidden",
        background: "#000",
        mt: { xs: 4, md: 6 },
      }}
    >
      {/* ===================================
          🌌 ORBIT SPHERE (ANCLADA ARRIBA)
      =================================== */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: 65, md: 30 },
          left: 0,
          right: 0,
          height: { xs: "48vh", md: "105vh" },
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <OrbitThree impulseRef={orbitImpulse} />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 55%, #000 100%)",
          }}
        />
      </Box>

      {/* ===================================
          ✨ SERVICES HERO (DEBAJO DE LA ESFERA)
      =================================== */}
      <Box
        sx={{
          position: "relative",
          zIndex: 3,
          pt: { xs: "42vh", md: "42vh" },
          px: { xs: 2, md: 3 },
          textAlign: "center",
        }}
      >
        <ServicesHero />
      </Box>

      {/* ===================================
          🟣 SERVICES ORBIT (DRAG)
      =================================== */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          mt: { xs: 8, md: 12 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ServicesOrbit impulseRef={orbitImpulse} />
      </Box>
    </Box>
  );
}
