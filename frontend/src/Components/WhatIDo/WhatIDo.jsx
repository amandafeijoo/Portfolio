import React, { useRef } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import {
  Section,
  StickyLayer,
  FloatingCard,
  ScrollSpace,
} from "./WhatIDoLayout.styles";

import FloatingHintMenu from "./FloatingHintMenu/FloatingHintMenu";
import MobileStack from "./MobileStack";
import TravelLuxuryPreview from "./Cards/CustomWeb/TravelLuxuryPreview";

import { introCopy, items } from "./WhatIDo.data";
import { handleCardMouseMove, handleCardMouseLeave } from "./WhatIDo.helpers";
import useWhatIDoFloatingCard from "./useWhatIDoFloatingCard";
import WhatIDoIntro from "./WhatIDoIntro/WhatIDoIntro";
import WhatIDoDesktopGrid from "./WhatIDoDesktopGrid";

export default function WhatIDo({ scrollContainerRef }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = !isMobile;

  const sectionRef = useRef(null);
  const startRef = useRef(null);
  const floatingRef = useRef(null);
  const targetRef = useRef(null);

  const { x, y, scale } = useWhatIDoFloatingCard({
    isDesktop,
    scrollContainerRef,
    sectionRef,
    startRef,
    floatingRef,
    targetRef,
  });

  return (
    <Section ref={sectionRef}>
      {isDesktop && (
        <StickyLayer>
          <FloatingCard ref={floatingRef} style={{ x, y, scale }}>
            <TravelLuxuryPreview />
            <FloatingHintMenu scale={scale} />
          </FloatingCard>
        </StickyLayer>
      )}

      <WhatIDoIntro
        introCopy={introCopy}
        isDesktop={isDesktop}
        startRef={startRef}
      />

      {isDesktop && <ScrollSpace />}

      {isMobile ? (
        <MobileStack items={items} />
      ) : (
        <WhatIDoDesktopGrid
          items={items}
          targetRef={targetRef}
          onMouseMove={(e) => handleCardMouseMove(e, isDesktop)}
          onMouseLeave={(e) => handleCardMouseLeave(e, isDesktop)}
        />
      )}
    </Section>
  );
}
