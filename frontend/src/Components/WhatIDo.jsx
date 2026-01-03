import React, { useRef, useLayoutEffect, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import {
  Section,
  IntroHero,
  IntroTextWrap,
  HeroTitle,
  HeroText,
  IntroMediaSlot,
  StickyLayer,
  FloatingCard,
  ScrollSpace,
  CardsSection,
  Grid,
  Card,
  CardImg,
  CardTitle,
  CardText,
  MobileCardText,
  PlaceholderMedia,
  Badge,
  TitleDivider,
  MobileOnlyDivider,
  DesktopOnlyDivider,
} from "./styles/WhatIDo.styles";
import FloatingHintMenu from "./FloatingHintMenu";

/* ===============================
   DATA
================================ */
const items = [
  {
    title: "Custom websites & landing pages",
    text: "I design unique websites tailored to your brand and goals not templates.",
    src: "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767053696/landingpage_zk0sea.png",
  },
  {
    title: "Full-stack development",
    text: "I build both what your visitors see and what they don’t see.",
    src: "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767054313/Beige_Grey_Neutral_Minimal_Paper_Daily_Motivation_Quote_Your_Story_v5mfn4.png",
  },
  {
    title: "Booking & payments",
    text: "I set up booking systems, contact forms, and secure online payments.",
    src: "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767054695/payment_c2tn0p.png",
  },
  {
    title: "Perfect on all devices",
    text: "Your website will look and work great on mobile, tablet, and desktop.",
    src: "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767050948/responsive_t95h1u.png",
  },
];

export default function WhatIDo() {
  /* ===============================
     BREAKPOINT
  ================================ */
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  /* ===============================
     REFS
  ================================ */
  const sectionRef = useRef(null);
  const startRef = useRef(null);
  const floatingRef = useRef(null);
  const targetRef = useRef(null);

  /* ===============================
     STATE
  ================================ */
  const [start, setStart] = useState({ x: 0, y: 0 });
  const [end, setEnd] = useState({ x: 0, y: 0 });
  const [endScale, setEndScale] = useState(1);

  /* ===============================
     SCROLL
  ================================ */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  /* ===============================
     MEASUREMENTS (DESKTOP ONLY)
  ================================ */
  useLayoutEffect(() => {
    if (isMobile) return;
    if (!startRef.current || !floatingRef.current || !targetRef.current) return;

    const s = startRef.current.getBoundingClientRect();
    const f = floatingRef.current.getBoundingClientRect();
    const t = targetRef.current.getBoundingClientRect();

    setStart({
      x: s.left - f.left,
      y: s.top - f.top,
    });

    setEnd({
      x: t.left - f.left - 24,
      y: t.top - f.top - 55,
    });

    setEndScale((t.width / f.width) * 0.9);
  }, [isMobile]);

  /* ===============================
     TRANSFORMS (DESKTOP ONLY)
  ================================ */
  const x = isMobile
    ? 0
    : useTransform(scrollYProgress, [0, 0.45], [start.x, end.x]);

  const y = isMobile
    ? 0
    : useTransform(scrollYProgress, [0, 0.45], [start.y, end.y]);

  const scale = isMobile
    ? 1
    : useTransform(scrollYProgress, [0, 0.45], [1, endScale]);

  /* ===============================
     RENDER
  ================================ */
  return (
    <Section ref={sectionRef}>
      {/* ================= FLOATING IMAGE (DESKTOP ONLY) ================= */}
      {!isMobile && (
        <StickyLayer>
          <FloatingCard ref={floatingRef} style={{ x, y, scale }}>
            <img src={items[0].src} alt={items[0].title} />
            <FloatingHintMenu scale={scale} />
          </FloatingCard>
        </StickyLayer>
      )}

      {/* ================= INTRO ================= */}
      <IntroHero>
        <IntroTextWrap>
          <Badge>What I Do</Badge>
          <TitleDivider />
          <HeroTitle>{items[0].title}</HeroTitle>
          <HeroText>{items[0].text}</HeroText>
          <TitleDivider />
        </IntroTextWrap>

        {!isMobile && <IntroMediaSlot ref={startRef} />}
      </IntroHero>

      <ScrollSpace />

      {/* ================= GRID ================= */}
      <CardsSection>
        <DesktopOnlyDivider style={{ marginBottom: "40px" }} />

        <Grid>
          {/* ===== PRIMER CARD ===== */}
          <Card>
            <CardImg ref={!isMobile ? targetRef : null}>
              {isMobile ? (
                <img src={items[0].src} alt={items[0].title} />
              ) : (
                <PlaceholderMedia />
              )}
            </CardImg>

            {!isMobile && (
              <>
                <CardTitle>{items[0].title}</CardTitle>
                <TitleDivider />
                <CardText>{items[0].text}</CardText>
              </>
            )}
          </Card>

          {/* ===== RESTO DE CARDS ===== */}
          {items.slice(1).map((item, i) => (
            <Card key={i}>
              {isMobile && (
                <MobileCardText>
                  <MobileOnlyDivider />
                  <HeroTitle>{item.title}</HeroTitle>
                  <HeroText>{item.text}</HeroText>
                </MobileCardText>
              )}

              <CardImg>
                <img src={item.src} alt={item.title} />
              </CardImg>

              {!isMobile && (
                <>
                  <CardTitle>{item.title}</CardTitle>
                  <TitleDivider />
                  <CardText>{item.text}</CardText>
                </>
              )}
            </Card>
          ))}
        </Grid>
      </CardsSection>
    </Section>
  );
}
