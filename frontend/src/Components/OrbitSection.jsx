import OrbitStars from "./OrbitStars";
import ServicesOrbit from "./ServicesOrbit";
import { useCursor } from "../Context/CursorContext";
import { useRef } from "react";

import {
  OrbitSectionWrapper,
  OrbitVisual,
  OrbitFadeMask,
  HeroTextWrap,
  HeroTitle,
  TextHalo,
  HeroDash,
  HeroSubtitle,
  ServicesZone,
  ServicesHeader,
  ServicesLabel,
  ServicesDivider,
  DragHint,
} from "./styles/OrbitSection.styles";

export default function OrbitSection() {
  const orbitImpulse = useRef(0);
  const { setCursorMode } = useCursor();

  return (
    <OrbitSectionWrapper
      onMouseEnter={() => setCursorMode("drag")}
      onMouseLeave={() => setCursorMode("default")}
    >
      {/* 🌌 ESFERA (FONDO) */}
      <OrbitVisual>
        <OrbitStars impulseRef={orbitImpulse} />
        <OrbitFadeMask />
      </OrbitVisual>
      {/* ✨ TEXTO BRILLANTE */}
      <HeroTextWrap
        initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.25,
        }}
      >
        <HeroTitle
          animate={{
            textShadow: [
              `
      0 0 1px rgba(255,255,255,0.35),
      0 0 8px rgba(255,255,255,0.20),
      0 0 24px rgba(201,169,106,0.18),
      0 0 50px rgba(201,169,106,0.14)
      `,
              `
      0 0 1px rgba(255,255,255,0.45),
      0 0 12px rgba(255,255,255,0.30),
      0 0 32px rgba(201,169,106,0.28),
      0 0 80px rgba(201,169,106,0.22)
      `,
              `
      0 0 1px rgba(255,255,255,0.35),
      0 0 8px rgba(255,255,255,0.20),
      0 0 24px rgba(201,169,106,0.18),
      0 0 50px rgba(201,169,106,0.14)
      `,
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Webcode
          <HeroDash>–</HeroDash>
          art
        </HeroTitle>

        <HeroSubtitle>
          Web design and development with intention.
          <br />
          Every detail matters.
        </HeroSubtitle>
        <ServicesHeader
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <ServicesLabel>SERVICES</ServicesLabel>

          <ServicesDivider />

          <DragHint
            animate={{ x: [0, -6, 0, 6, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span>↔</span>
            Drag to explore
          </DragHint>
        </ServicesHeader>
      </HeroTextWrap>
      {/* 🟣 SERVICES (ZONA INFERIOR) */}
      <ServicesZone>
        <ServicesOrbit impulseRef={orbitImpulse} />
      </ServicesZone>
    </OrbitSectionWrapper>
  );
}
