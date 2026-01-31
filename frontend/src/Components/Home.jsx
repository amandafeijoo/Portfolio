import React, { lazy, Suspense } from "react";
import { useEffect } from "react";

/* =========================
   LAZY SECTIONS
========================= */
const HeroSection = lazy(() => import("./Hero/HeroSection"));
const WhatIDoHero = lazy(() => import("./WhatIDo/WhatIDoHero"));
const WhatIDo = lazy(() => import("./WhatIDo/WhatIDo"));
const FloatingHintMenu = lazy(() => import("./WhatIDo/FloatingHintMenu"));
const OrbitSection = lazy(() => import("./Services/OrbitSection"));
const ProcessSection = lazy(() => import("./Process/ProcessSection"));
const HeroWorkSection = lazy(() => import("./Hero_Work/HeroWorkSection"));
const HomeContactInvite = lazy(() =>
  import("./HomeContactInvite/HomeContactInvite")
);

/* =========================
   HERO SKELETON
========================= */
function HeroSkeleton() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        background:
          "radial-gradient(circle at 50% 42%, rgba(201,169,106,0.14), #000 68%)",
      }}
    />
  );
}

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <>
      {/* =========================
          HERO (SIEMPRE PRESENTE)
      ========================= */}
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection />
      </Suspense>

      {/* =========================
          CONTENIDO
      ========================= */}
      <Suspense fallback={null}>
        <WhatIDoHero />
        <WhatIDo />
        <FloatingHintMenu />
      </Suspense>

      <Suspense fallback={null}>
        <OrbitSection />
        <ProcessSection />
      </Suspense>

      {/* =========================
          WORK
      ========================= */}
      <Suspense fallback={null}>
        <HeroWorkSection />
      </Suspense>

      <Suspense fallback={null}>
        <HomeContactInvite />
      </Suspense>
    </>
  );
}
