import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  Divider,
  CardIntro,
  HoverContent,
  CardBullets,
  CardLink,
  PlaceholderMedia,
  CardImg,
} from "./WhatIDoCard.styles";
import WhatIDoCardMedia from "../WhatIDoCardMedia";

export default function WhatIDoCard({
  item,
  isFirst = false,
  targetRef = null,
  onMouseMove,
  onMouseLeave,
}) {
  const isExternal = item.route?.startsWith("http");

  return (
    <Card onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      {isFirst ? (
        <CardImg ref={targetRef}>
          <PlaceholderMedia />
        </CardImg>
      ) : (
        <WhatIDoCardMedia item={item} />
      )}

      <CardTitle>{item.title}</CardTitle>
      <CardIntro>{item.intro}</CardIntro>
      <Divider />

      <HoverContent className="hover-content">
        <CardText>{item.text}</CardText>

        <CardBullets>
          {item.bullets.slice(0, 2).map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </CardBullets>

        <CardLink
          href={item.route}
          target={isExternal ? "_blank" : "_self"}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {item.cta} →
        </CardLink>
      </HoverContent>
    </Card>
  );
}