import React, { lazy, Suspense, useEffect } from "react";
import styled from "styled-components";

/* =========================
   LAZY SECTIONS
========================= */
const HeroSection = lazy(() => import("./Hero/HeroSection"));
const WhatIDoHero = lazy(() => import("./WhatIDo/WhatIDoHero"));
const WhatIDo = lazy(() => import("./WhatIDo/WhatIDo"));
const FloatingHintMenu = lazy(() =>
  import("./WhatIDo/FloatingHintMenu/FloatingHintMenu")
);
import OrbitSection from "./Services_Hero/OrbitSection";
import ProcessScrollStory from "./Process/ProcessScrollStory";
const HeroWorkSection = lazy(() => import("./Hero_Work/HeroWorkSection"));
const HomeContactInvite = lazy(() =>
  import("./HomeContactInvite/HomeContactInvite")
);

/* =========================
   STICKY STACK
========================= */
const HEADER_HEIGHT = 0;

const StickyGroup = styled.section`
  position: relative;
  width: 100%;
  height: 200vh;
  background: #000;
`;

const StickySection = styled.section`
  position: sticky;
  top: ${HEADER_HEIGHT}px;
  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT}px);
  display: flex;
  align-items: stretch;
  justify-content: center;
  background: #000;
`;

const NormalSection = styled.section`
  position: relative;
  width: 100%;
  z-index: 3;
  background: #000;
`;

/* =========================
   FALLBACKS
========================= */
function HeroSkeleton() {
  return (
    <div
      style={{
        width: "100%",
        height: `calc(100vh - ${HEADER_HEIGHT}px)`,
        minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
        background:
          "radial-gradient(circle at 50% 42%, rgba(201,169,106,0.14), #000 68%)",
      }}
    />
  );
}

function SectionSkeleton() {
  return (
    <div
      style={{
        width: "100%",
        height: `calc(100vh - ${HEADER_HEIGHT}px)`,
        minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
        background: "#000",
      }}
    />
  );
}

/* =========================
   HOME
========================= */
export default function Home({ scrollContainerRef }) {
  useEffect(() => {
    if (scrollContainerRef?.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    }
  }, [scrollContainerRef]);

  return (
    <>
      {/* =========================
          STICKY GROUP 1
      ========================= */}
      <StickyGroup>
        <StickySection style={{ zIndex: 1 }}>
          <Suspense fallback={<HeroSkeleton />}>
            <HeroSection />
          </Suspense>
        </StickySection>

        <StickySection style={{ zIndex: 2 }}>
          <Suspense fallback={<SectionSkeleton />}>
            <WhatIDoHero />
          </Suspense>
        </StickySection>
      </StickyGroup>

      {/* =========================
          NORMAL CONTENT
      ========================= */}
      <NormalSection>
        <Suspense fallback={<SectionSkeleton />}>
          <WhatIDo scrollContainerRef={scrollContainerRef} />
          <FloatingHintMenu />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <OrbitSection />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <ProcessScrollStory scrollContainerRef={scrollContainerRef} />
        </Suspense>
      </NormalSection>

      {/* =========================
          STICKY GROUP 2
      ========================= */}
      <StickyGroup>
        <StickySection style={{ zIndex: 2 }}>
          <Suspense fallback={<SectionSkeleton />}>
            <HeroWorkSection />
          </Suspense>
        </StickySection>

        <StickySection style={{ zIndex: 3 }}>
          <Suspense fallback={<SectionSkeleton />}>
            <HomeContactInvite />
          </Suspense>
        </StickySection>
      </StickyGroup>
    </>
  );
}
