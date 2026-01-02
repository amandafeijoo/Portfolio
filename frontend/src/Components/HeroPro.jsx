import React, { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import {
  HeroWrapper,
  ImagesLayer,
  CardImg,
  MainName,
  Slogan,
  ChangingWord,
  TitleDivider,
  ButtonRow,
  PrimaryButton,
  SecondaryButton,
  TextFocus,
  FocusHalo,
  FocusHaloWrapper,
} from "./styles/HeroPro.styles";
import { useAnimationFrame } from "framer-motion";

/* ============================
   🔥 COPY
===============================*/
const words = ["brands", "startups", "founders", "businesses"];

/* ============================
   🔥 CONFIG (NO TOCAR)
===============================*/
const NUM_GROUPS = 6;
const CARDS_PER_GROUP = 10;

const VISIBLE_CARDS = 6;
const SPEED = 0.00015; // cuanto más pequeño, más slow motion
const FLOW_INTERVAL = 900;
const GLOBAL_Y_OFFSET = -170; // prueba -80 / -120 / -160
const ORBIT_RADIUS = 190; // distancia del grupo al centro
const CARD_SPREAD = 0.65; // compactación interna (NO tocar mucho)

/* ============================
   🔥 MEDIA
===============================*/
const MEDIA = [
  "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767201787/Hero_1_fiic5l.png",
  "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767202108/hero_2_hfir1v.png",
  "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767202494/Hero_03_vvappf.png",
  "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767202959/Hero_4_tqmkuy.png",
  "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767203258/Hero_5_agyx4c.png",
  "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767279970/Hero_6_m4li1l.png",
  "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767280149/Hero_7_yngywn.png",
  "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767280378/Hero_8_tjp6ez.png",
  "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767281807/Hero_9_ckdi5f.png",
  "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767282290/Hero_10_ekqozo.png",
  "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767282700/Hero_11_zwz3wt.png",
  "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767282899/Hero_12_iiucoz.png",
  "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767283506/Hero_13_ezthaw.png",
  "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767284075/hero_14_dpxm2f.png",
  "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767284579/Hero_15_dpllin.png",
  "https://res.cloudinary.com/dp6jrgvoz/image/upload/v1767285335/Hero_16_fwqulk.png",
];

const isVideo = (src) =>
  src.endsWith(".mp4") || src.endsWith(".webm") || src.includes("/video/");

/* ============================
   🔥 UTILS
===============================*/
function shuffle(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ============================
   📱 DEVICE
===============================*/
function useDevice() {
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    const check = () => {
      if (window.innerWidth <= 768) setDevice("mobile");
      else if (window.innerWidth <= 1024) setDevice("tablet");
      else setDevice("desktop");
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return device;
}

function getSpacingScale(device) {
  if (device === "mobile") return 0.6;
  if (device === "tablet") return 0.8;
  return 1;
}

/* ============================
   🔥 GRAVITY WARP (COSMOS)
===============================*/
function gravityWarp(dist, radius = 180) {
  return 1 - Math.min(dist / radius, 1);
}

/* ============================
   🔥 POSICIÓN CARTAS (COSMOS)
===============================*/

function getCardPosition(groupIndex, offsetIndex, spacingScale) {
  const path = GROUP_PATHS[groupIndex];
  const point = path[offsetIndex];

  // posición base
  let x = point.x;
  let y = point.y;

  // escala base
  const t = offsetIndex / (path.length - 1);
  const scale = 0.65 * Math.pow(1 - t, 1.4) + 0.08;

  // 🔥 distancia al centro
  const dist = Math.sqrt(x * x + y * y);

  // 🔥 deformación tipo gravedad (aquí está el "jalón")
  const warp = gravityWarp(dist);

  // 🔥 el espacio se comprime hacia el centro
  x = x * (1 - warp * 0.35);
  y = y * (1 - warp * 0.35);

  return {
    x: x * spacingScale,
    y: y * spacingScale + GLOBAL_Y_OFFSET,
    scale: scale * (1 - warp * 0.4),
    rotate: (offsetIndex - 2.5) * 6,
  };
}

/* ============================
   🔥 GROUP PATHS
===============================*/
const GROUP_PATHS = [
  [
    { x: -440, y: -240 },
    { x: -360, y: -170 },
    { x: -270, y: -90 },
    { x: -170, y: -10 },
    { x: -80, y: 40 },
    { x: -20, y: 10 },
  ],
  [
    { x: -60, y: -400 },
    { x: 10, y: -310 },
    { x: 70, y: -220 },
    { x: 90, y: -130 },
    { x: 60, y: -40 },
    { x: 10, y: -10 },
  ],
  [
    { x: 440, y: -160 },
    { x: 360, y: -90 },
    { x: 290, y: -20 },
    { x: 220, y: 50 },
    { x: 140, y: 80 },
    { x: 30, y: 20 },
  ],
  [
    { x: 400, y: 260 },
    { x: 320, y: 190 },
    { x: 240, y: 130 },
    { x: 160, y: 80 },
    { x: 90, y: 40 },
    { x: 20, y: 30 },
  ],
  [
    { x: 60, y: 420 },
    { x: 10, y: 320 },
    { x: -30, y: 230 },
    { x: -50, y: 150 },
    { x: -30, y: 70 },
    { x: -10, y: 20 },
  ],
  [
    { x: -420, y: 240 },
    { x: -340, y: 180 },
    { x: -260, y: 120 },
    { x: -180, y: 70 },
    { x: -100, y: 40 },
    { x: -30, y: 20 },
  ],
];

/* ============================
   🔥 INIT STACKS
===============================*/
function createInitialStacks() {
  return Array.from({ length: NUM_GROUPS }, (_, g) => {
    const mediaQueue = shuffle(MEDIA);
    return {
      id: `group-${g}`,
      mediaQueue,
      cards: Array.from({ length: VISIBLE_CARDS }, (_, i) => ({
        id: crypto.randomUUID(),
        image: mediaQueue[i % mediaQueue.length],
        offsetIndex: i,
      })),
    };
  });
}

/* ============================
   🔥 COMPONENT
===============================*/
const HeroPro = () => {
  const device = useDevice();
  const spacingScale = getSpacingScale(device);

  const [wordIndex, setWordIndex] = useState(0);
  const [stacks, setStacks] = useState(createInitialStacks);
  const [flights, setFlights] = useState([]);

  const flowRef = useRef(0);

  useAnimationFrame((_, delta) => {
    flowRef.current += delta * SPEED;
  });
  useEffect(() => {
    const id = setInterval(() => {
      setStacks((prev) =>
        prev.map((stack, groupIndex) => {
          const falling = stack.cards[stack.cards.length - 1];
          const remaining = stack.cards.slice(0, -1);

          const [next, ...rest] = stack.mediaQueue;

          return {
            ...stack,
            mediaQueue: [...rest, next],
            cards: [
              { id: crypto.randomUUID(), image: next, offsetIndex: 0 },
              ...remaining,
            ].map((c, i) => ({ ...c, offsetIndex: i })),
          };
        })
      );
    }, FLOW_INTERVAL);

    return () => clearInterval(id);
  }, []);

  return (
    <HeroWrapper>
      <ImagesLayer>
        {stacks.map((stack, groupIndex) =>
          stack.cards
            .filter((c) => c.offsetIndex < VISIBLE_CARDS - 2) //antes -1 si quiero mas cartas
            .map((card) => {
              const { x, y, rotate, scale } = getCardPosition(
                groupIndex,
                card.offsetIndex,
                spacingScale
              );

              const t = card.offsetIndex / (VISIBLE_CARDS - 1);
              const opacity = Math.pow(1 - t, 1.6);
              const zIndex = 100 - card.offsetIndex;

              return (
                <CardImg
                  key={card.id}
                  src={card.image}
                  style={{ zIndex }}
                  initial={false}
                  animate={{ x, y, rotate, scale, opacity }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
              );
            })
        )}

        <AnimatePresence>
          {flights.map((f) => {
            const { x, y } = getCardPosition(
              f.groupIndex,
              VISIBLE_CARDS - 1,
              spacingScale
            );

            return (
              <CardImg
                key={f.id}
                src={f.image}
                initial={{ x, y, scale: 0.12, opacity: 1 }}
                animate={{ x: 0, y: 0, scale: 0.01, opacity: 0 }}
                transition={{ duration: 2.2, ease: [0.08, 0.9, 0.2, 1] }}
                onAnimationComplete={() =>
                  setFlights((prev) => prev.filter((i) => i.id !== f.id))
                }
              />
            );
          })}
        </AnimatePresence>
      </ImagesLayer>

      <TextFocus>
        <FocusHaloWrapper>
          <FocusHalo />
        </FocusHaloWrapper>
        <MainName>WEBCODE-ART</MainName>
        <Slogan>
          I design and build websites for{" "}
          <ChangingWord>{words[wordIndex]}</ChangingWord>
        </Slogan>
        <ButtonRow>
          <PrimaryButton>Start a Project</PrimaryButton>
          <SecondaryButton>View My Work</SecondaryButton>
        </ButtonRow>
      </TextFocus>
    </HeroWrapper>
  );
};

export default HeroPro;
