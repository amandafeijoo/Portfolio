import React, { lazy, Suspense, useEffect } from "react";
import styled from "styled-components";

/* =========================
   LAZY SECTIONS
========================= */
const HeroSection = lazy(() => import("./Hero/HeroSection"));
const WhatIDoHero = lazy(() => import("./WhatIDo/WhatIDoHero"));
const WhatIDo = lazy(() => import("./WhatIDo/WhatIDo"));
const FloatingHintMenu = lazy(() => import("./WhatIDo/FloatingHintMenu"));
import OrbitSection from "./Services_Hero/OrbitSection";
const ProcessSection = lazy(() => import("./Process/ProcessSection"));
const HeroWorkSection = lazy(() => import("./Hero_Work/HeroWorkSection"));
const HomeContactInvite = lazy(() =>
  import("./HomeContactInvite/HomeContactInvite")
);

/* =========================
   STICKY STACK
========================= */
const HEADER_HEIGHT = 0;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StickySection = styled.section`
  position: sticky;
  top: ${HEADER_HEIGHT}px;
  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT}px);
  overflow: hidden;
  display: flex;
  align-items: stretch;
  justify-content: center;
  background: #000;
`;

const NormalSection = styled.div`
  width: 100%;
  position: relative;
  z-index: 3;
  background: #000;
`;

/* =========================
   HERO SKELETON
========================= */
function HeroSkeleton() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
        background:
          "radial-gradient(circle at 50% 42%, rgba(201,169,106,0.14), #000 68%)",
      }}
    />
  );
}

export default function Home({ scrollContainerRef }) {
  useEffect(() => {
    if (scrollContainerRef?.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [scrollContainerRef]);

  return (
    <>
      <Container>
        <StickySection style={{ zIndex: 1 }}>
          <Suspense fallback={<HeroSkeleton />}>
            <HeroSection />
          </Suspense>
        </StickySection>

        <StickySection style={{ zIndex: 2 }}>
          <Suspense fallback={null}>
            <WhatIDoHero />
          </Suspense>
        </StickySection>
      </Container>

      <NormalSection>
        <Suspense fallback={null}>
          <WhatIDo scrollContainerRef={scrollContainerRef} />{" "}
          <FloatingHintMenu />
        </Suspense>

        <Suspense fallback={null}>
        <OrbitSection />
        </Suspense>

        <Suspense fallback={null}>
          <ProcessSection />
        </Suspense>

        <Suspense fallback={null}>
          <HeroWorkSection />
        </Suspense>

        <Suspense fallback={null}>
          <HomeContactInvite />
        </Suspense>
      </NormalSection>
    </>
  );
}
