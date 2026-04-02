import React, { useRef, useLayoutEffect, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { useTheme, useMediaQuery, Box } from "@mui/material";
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
  MetaLine,
  Divider,
  TitleDivider,
  CardIntro,
  HoverContent,
  CardBullets,
  CardLink,
} from "./WhatIDo.styles";

import FloatingHintMenu from "./FloatingHintMenu";
import MobileStack from "./MobileStack";

/* ===============================
   DATA
================================ */
const introCopy = {
  meta: "Design · Code · Strategy",
  titleLine1: "Digital experiences",
  highlight: "built around your business",
  text: `From elegant portfolio websites to more complex builds with bookings, payments, dashboards and custom features — each project is designed to fit your goals, your audience and the way your business works.`,
};

const items = [
  {
    title: "Custom websites",
    intro: "Tailored to your brand and goals.",
    text: "Tailored to your brand, goals and audience — never built from generic templates.",
    bullets: [
      "Custom layout design",
      "Brand-aligned visuals",
      "Strategic content flow",
      "Conversion-focused sections",
      "Responsive performance",
    ],
    cta: "View website examples",
    route: "/projects",
    src: "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767053696/landingpage_zk0sea.png",
    mobileSrc:
      "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1771589275/besoke_mo_1_lppd9b.png",
  },
  {
    title: "Full-stack systems",
    intro: "Built from interface to logic.",
    text: "Complete digital experiences built from the interface your audience sees to the systems working behind it.",
    bullets: [
      "Frontend development",
      "Backend architecture",
      "Database structure",
      "Authentication flows",
      "Custom integrations",
    ],
    cta: "Explore the stack",
    route: "/tech-stack",
    src: "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767054313/Beige_Grey_Neutral_Minimal_Paper_Daily_Motivation_Quote_Your_Story_v5mfn4.png",
    mobileSrc:
      "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1771589094/fullstack_mo_1_uucisx.png",
  },
  {
    title: "Bookings & payments",
    intro: "Designed around real client flows.",
    text: "Seamless booking and payment flows designed around how your business actually works.",
    bullets: [
      "Booking systems",
      "Stripe integration",
      "Confirmation emails",
      "Admin dashboard",
      "Custom client journeys",
    ],
    cta: "See booking example",
    route: "https://www.arrazolapsicologia.com/reserva",
    src: "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767054695/payment_c2tn0p.png",
    mobileSrc:
      "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1771663247/payments_bookimg_mo_x0obbu.png",
  },
  {
    title: "Responsive experiences",
    intro: "Balanced across every screen.",
    text: "Designed to feel clear, balanced and consistent across every screen.",
    bullets: [
      "Mobile-first thinking",
      "Tablet and desktop layouts",
      "Performance optimisation",
      "Accessible interactions",
    ],
    cta: "See responsive work",
    route: "/projects",
    src: "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767050948/responsive_t95h1u.png",
    mobileSrc:
      "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1771588769/responsive_mo_1_x2e75f.png",
  },
];

export default function WhatIDo({ scrollContainerRef }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = !isMobile;

  const sectionRef = useRef(null);
  const startRef = useRef(null);
  const floatingRef = useRef(null);
  const targetRef = useRef(null);

  const [start, setStart] = useState({ x: 0, y: 0 });
  const [end, setEnd] = useState({ x: 0, y: 0 });
  const [endScale, setEndScale] = useState(1);

  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  useLayoutEffect(() => {
    if (!isDesktop) return;
    if (!startRef.current || !floatingRef.current || !targetRef.current) return;

    const s = startRef.current.getBoundingClientRect();
    const f = floatingRef.current.getBoundingClientRect();
    const t = targetRef.current.getBoundingClientRect();

    const offsetY = window.innerWidth > 1600 ? 60 : 40;
    const extraOffset = 120;

    setStart({
      x: s.left - f.left,
      y: s.top - f.top - offsetY + extraOffset,
    });

    setEnd({
      x: t.left - f.left - 50,
      y: t.top - f.top - 90 - offsetY * 0.3,
    });

    setEndScale((t.width / f.width) * 0.9);
  }, [isDesktop]);

  const x = useTransform(
    scrollYProgress,
    [0, 0.45],
    [start.x, end.x]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.45],
    [start.y, end.y]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.45],
    [1, endScale]
  );

  const handleMouseMove = (e) => {
    if (!isDesktop) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotateX = (mouseY / rect.height - 0.5) * -4;
    const rotateY = (mouseX / rect.width - 0.5) * 4;

    e.currentTarget.style.transform = `
      translateY(-14px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.018)
    `;
  };

  const handleMouseLeave = (e) => {
    if (!isDesktop) return;
    e.currentTarget.style.transform = "";
  };

  return (
    <Section ref={sectionRef}>
      {isDesktop && (
        <StickyLayer>
          <FloatingCard ref={floatingRef} style={{ x, y, scale }}>
            <img src={items[0].src} alt={items[0].title} />
            <FloatingHintMenu scale={scale} />
          </FloatingCard>
        </StickyLayer>
      )}

      <IntroHero style={{ position: "relative", overflow: "hidden" }}>
        <Box
          sx={{
            position: "absolute",
            top: { xs: "8%", md: "10%" },
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: "80%", sm: "70%", md: "58%" },
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(201,176,122,0.16), rgba(232,201,143,0.40), rgba(201,176,122,0.16), transparent)",
            opacity: 0.9,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: { xs: "12%", md: "14%" },
            transform: "translate(-50%, -50%)",
            width: { xs: 260, sm: 360, md: 460, lg: 560 },
            height: { xs: 100, sm: 120, md: 150, lg: 180 },
            borderRadius: "50%",
            background: `
              radial-gradient(
                ellipse at center,
                rgba(232, 201, 143, 0.12) 0%,
                rgba(201, 176, 122, 0.06) 34%,
                rgba(0,0,0,0) 76%
              )
            `,
            filter: "blur(28px)",
            opacity: 0.95,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: { xs: "17%", md: "18%" },
            transform: "translateX(-50%)",
            width: { xs: 110, sm: 150, md: 190, lg: 220 },
            height: { xs: 230, sm: 280, md: 340, lg: 400 },
            borderRadius: "50%",
            background: `
              radial-gradient(
                ellipse at center,
                rgba(232, 201, 143, 0.08) 0%,
                rgba(201, 176, 122, 0.035) 30%,
                rgba(201, 176, 122, 0.012) 54%,
                rgba(0,0,0,0) 76%
              )
            `,
            filter: "blur(26px)",
            opacity: 0.72,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: { xs: "34%", md: "36%" },
            transform: "translate(-50%, -50%)",
            width: { xs: 420, sm: 620, md: 820, lg: 980 },
            height: { xs: 320, sm: 380, md: 460, lg: 520 },
            borderRadius: "50%",
            background: `
              radial-gradient(
                ellipse at center,
                rgba(232, 201, 143, 0.08) 0%,
                rgba(232, 201, 143, 0.04) 24%,
                rgba(232, 201, 143, 0.016) 42%,
                rgba(0,0,0,0) 72%
              )
            `,
            filter: "blur(58px)",
            opacity: 0.82,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        <IntroTextWrap style={{ position: "relative", zIndex: 1 }}>
          <MetaLine>{introCopy.meta}</MetaLine>
          <TitleDivider />

          <HeroTitle>
            {introCopy.titleLine1}
            <br />
            <span className="highlight">{introCopy.highlight}</span>
          </HeroTitle>

          <HeroText>{introCopy.text}</HeroText>
        </IntroTextWrap>

        {isDesktop && (
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <IntroMediaSlot ref={startRef} />
          </Box>
        )}
      </IntroHero>

      {isDesktop && <ScrollSpace />}

      {isMobile ? (
        <MobileStack items={items} />
      ) : (
        <CardsSection>
          <Grid>
            <Card onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <CardImg ref={targetRef}>
                <PlaceholderMedia />
              </CardImg>

              <CardTitle>{items[0].title}</CardTitle>
              <CardIntro>{items[0].intro}</CardIntro>
              <Divider />

              <HoverContent className="hover-content">
                <CardText>{items[0].text}</CardText>

                <CardBullets>
                  {items[0].bullets.slice(0, 2).map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </CardBullets>

                <CardLink href={items[0].route}>{items[0].cta} →</CardLink>
              </HoverContent>
            </Card>

            {items.slice(1).map((item) => (
              <Card
                key={item.title}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <CardImg>
                  <img src={item.src} alt={item.title} />
                </CardImg>

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
                    target={item.route.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      item.route.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {item.cta} →
                  </CardLink>
                </HoverContent>
              </Card>
            ))}
          </Grid>
        </CardsSection>
      )}
    </Section>
  );
}
