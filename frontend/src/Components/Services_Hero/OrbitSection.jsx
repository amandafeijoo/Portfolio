import { Box } from "@mui/material";
import { useRef } from "react";
import ServicesOrbit from "./ServicesOrbit";
import ServicesHero from "./ServicesHero";
import OrbitThree from "./Sphere/OrbitThree";
import { useCursor } from "../../Context/CursorContext";

export default function OrbitSection() {
  const orbitImpulse = useRef(0);
  const isDragging = useRef(false);
  const lastX = useRef(0);
  const { setCursorMode } = useCursor();

  /* =========================
     ✅ POINTER DRAG (works everywhere)
  ========================= */
  const onPointerDownCapture = (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;

    isDragging.current = true;
    lastX.current = e.clientX;

    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const onPointerMoveCapture = (e) => {
    if (!isDragging.current) return;

    const delta = e.clientX - lastX.current;
    lastX.current = e.clientX;

    orbitImpulse.current += delta * 0.003;
  };

  const stopDrag = (e) => {
    isDragging.current = false;
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  };

  return (
    <Box
      onMouseEnter={() => setCursorMode("drag")}
      onMouseLeave={() => setCursorMode("default")}
      onPointerDownCapture={onPointerDownCapture}
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerUpCapture={stopDrag}
      onPointerCancelCapture={stopDrag}
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: "125vh", md: "160vh" },
        overflow: "hidden",
        background: "#000",
        mt: { xs: 2, md: -2 },
        mb: { xs: 4, md: 12 },

        touchAction: "none",

        cursor: isDragging.current ? "grabbing" : "grab",
      }}
    >
      {/* ===================================
          🌌 ORBIT SPHERE (ARRIBA)
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

          opacity: { xs: 0.85, md: 0.55 },
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
          ✨ SERVICES HERO
      =================================== */}
      <Box
        sx={{
          position: "relative",
          zIndex: 3,
          pt: { xs: "42vh", md: "42vh" },
          px: { xs: 2, md: 3 },
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        <ServicesHero />
      </Box>

      {/* ===================================
          🟣 SERVICES ORBIT (CARDS)
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
        {/*Las cards reciben el mismo impulseRef */}
        <ServicesOrbit impulseRef={orbitImpulse} />
      </Box>
    </Box>
  );
}
