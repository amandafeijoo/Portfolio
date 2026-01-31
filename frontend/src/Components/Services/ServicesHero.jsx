import React from "react";
import {
  HeroTextTop,
  ServicesLabel,
  HeroTitle,
  HeroDivider,
  HeroSubtitle,
  HeroRow,
  HeroPill,
  DragHint,
  Kicker,
} from "./OrbitSection.styles";

export default function ServicesHero() {
  return (
    <HeroTextTop>
      <Kicker>SERVICES</Kicker>

      <HeroTitle>
        Design-led development
        <br />
        for meaningful digital products.
      </HeroTitle>

      <HeroDivider />

      <HeroSubtitle>
        I design and build fast, scalable and elegant web platforms — focused on
        real business needs and long-term value.
      </HeroSubtitle>

      <HeroRow>
        <HeroPill>Design & Development</HeroPill>
        <HeroPill>Custom Solutions</HeroPill>
        <HeroPill>Ongoing Support</HeroPill>
        <DragHint>Drag to explore</DragHint>
      </HeroRow>
    </HeroTextTop>
  );
}
