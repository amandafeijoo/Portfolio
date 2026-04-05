import React from "react";
import { CardsSection, CardsInner, Grid } from "./WhatIDoLayout.styles";
import WhatIDoCard from "./WhatIDoCard/WhatIDoCard";

export default function WhatIDoDesktopGrid({
  items,
  targetRef,
  onMouseMove,
  onMouseLeave,
}) {
  return (
    <CardsSection>
      <CardsInner>
        <Grid>
          <WhatIDoCard
            item={items[0]}
            isFirst
            targetRef={targetRef}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          />

          {items.slice(1).map((item) => (
            <WhatIDoCard
              key={item.title}
              item={item}
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseLeave}
            />
          ))}
        </Grid>
      </CardsInner>
    </CardsSection>
  );
}
