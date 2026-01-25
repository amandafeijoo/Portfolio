import OrbitStars from "./OrbitStars";
import ServicesOrbit from "./ServicesOrbit";
import ServicesHero from "./ServicesHero";
import { useCursor } from "../../Context/CursorContext";
import { useRef } from "react";

import {
  OrbitSectionWrapper,
  OrbitVisual,
  OrbitFadeMask,
  ServicesZone,
} from "./OrbitSection.styles";
export default function OrbitSection() {
  const orbitImpulse = useRef(0);
  const isDragging = useRef(false);
  const lastX = useRef(0);
  const { setCursorMode } = useCursor();

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

    orbitImpulse.current += delta * 0.003; //sensibilidad
  };

  return (
    <OrbitSectionWrapper
      onMouseEnter={() => setCursorMode("drag")}
      onMouseLeave={() => setCursorMode("default")}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {/* 🌌 BACKGROUND ESFERA */}
      <OrbitVisual>
        <OrbitStars impulseRef={orbitImpulse} />
        <OrbitFadeMask />
      </OrbitVisual>

      {/* ✨ WOW SERVICES CONTENT */}
      <ServicesHero />

      {/* 🟣 SERVICES ORBIT */}
      <ServicesZone>
        <ServicesOrbit impulseRef={orbitImpulse} />
      </ServicesZone>
    </OrbitSectionWrapper>
  );
}
