import React, { useRef, useLayoutEffect, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { useTheme, useMediaQuery } from "@mui/material";
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
  PlaceholderMedia,
  Kicker,
  MetaLine,
  Divider,
  TitleDivider,
} from "./WhatIDo.styles";

import FloatingHintMenu from "./FloatingHintMenu";
import MobileStack from "./MobileStack";

/* ===============================
   DATA
================================ */
const introCopy = {
  meta: "Design · Code · Motion",
  titleLine1: "Designing digital experiences",
  highlight: "intentional",
  text: `I combine design, code and motion to build websites
that communicate clearly, move naturally and grow your business.`,
};

const items = [
  {
    title: "Bespoke websites",
    intro: "Websites designed around your brand — never templates.",
    text: "I design unique websites tailored to your brand and goals, not templates.",
    bullets: [
      "Custom layout design",
      "Brand-aligned typography",
      "Strategic user flow",
      "Conversion-focused sections",
      "Responsive & fast",
    ],
    cta: "Explore real projects",
    route: "/projects",
    src: "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767053696/landingpage_zk0sea.png",
    mobileSrc:
      "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1771589275/besoke_mo_1_lppd9b.png",
  },
  {
    title: "Full-stack development",
    intro: "Frontend + backend built together for performance.",
    text: "I build both what your visitors see and what they don’t see.",
    bullets: [
      "React frontend",
      "Django backend",
      "PostgreSQL database",
      "Authentication & security",
      "API integrations",
    ],
    cta: "Explore stack",
    route: "/tech-stack",
    src: "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767054313/Beige_Grey_Neutral_Minimal_Paper_Daily_Motivation_Quote_Your_Story_v5mfn4.png",
    mobileSrc:
      "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1771589094/fullstack_mo_1_uucisx.png",
  },
  {
    title: "Booking & payments",
    intro: "Booking systems + secure payments that run smoothly.",
    text: "I set up booking systems, contact forms, and secure online payments.",
    bullets: [
      "Booking calendar",
      "Stripe payments",
      "Confirmation emails",
      "Admin dashboard",
      "Smooth client flow",
    ],
    cta: "See booking systems in action",
    route: "https://www.arrazolapsicologia.com/reserva",
    src: "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767054695/payment_c2tn0p.png",
    mobileSrc:
      "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1771663247/payments_bookimg_mo_x0obbu.png",
  },
  {
    title: "Designed for every screen",
    intro: "Mobile-first, balanced, and beautifully responsive.",
    text: "From mobile to desktop, your site stays fast, readable, and beautifully balanced.",
    bullets: [
      "Mobile-first design",
      "Tablet + desktop optimized",
      "Performance tuning",
      "Accessibility best practices",
    ],
    cta: "See responsive preview",
    route: "/projects",
    src: "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767050948/responsive_t95h1u.png",
    mobileSrc:
      "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1771588769/responsive_mo_1_x2e75f.png",
  },
];

export default function WhatIDo() {
  /* ===============================
     BREAKPOINT
  ================================ */
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
      x: t.left - f.left - 34,
      y: t.top - f.top - 78,
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
     INTERACTION (DESKTOP ONLY)
  ================================ */
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -6;
    const rotateY = (x / rect.width - 0.5) * 6;

    e.currentTarget.style.transform = `
      translateY(-14px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.02)
    `;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "";
  };

  /* ===============================
     RENDER
  ================================ */
  return (
    <Section ref={sectionRef}>
      {/* ================= FLOATING CARD (DESKTOP ONLY) ================= */}
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
          <MetaLine>{introCopy.meta}</MetaLine>
          <TitleDivider />

          <HeroTitle>
            {introCopy.titleLine1}
            <br />
            that feel <span className="highlight">{introCopy.highlight}</span>
          </HeroTitle>

          <HeroText>
            {introCopy.text.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </HeroText>
        </IntroTextWrap>

        {!isMobile && <IntroMediaSlot ref={startRef} />}
      </IntroHero>

      <ScrollSpace />

      {/* ================= MOBILE / DESKTOP SWITCH ================= */}
      {isMobile ? (
        <MobileStack items={items} />
      ) : (
        <CardsSection>
          <Grid>
            {/* CARD 1 */}
            <Card onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <CardImg ref={targetRef}>
                <PlaceholderMedia />
              </CardImg>
              <CardTitle>{items[0].title}</CardTitle>
              <Divider />
              <CardText>{items[0].text}</CardText>
            </Card>

            {/* REST */}
            {items.slice(1).map((item, i) => (
              <Card
                key={i}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <CardImg>
                  <img src={item.src} alt={item.title} />
                </CardImg>
                <CardTitle>{item.title}</CardTitle>
                <Divider />
                <CardText>{item.text}</CardText>
              </Card>
            ))}
          </Grid>
        </CardsSection>
      )}
    </Section>
  );
}
