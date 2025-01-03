import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { Box } from "@mui/material";

const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Circle = styled(Box)`
  ${({ size, top, left, opacity, transform, backgroundColor }) => css`
    width: ${size}px;
    height: ${size}px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(200, 162, 200, 0.6);
    background-color: ${backgroundColor};
    position: absolute;
    top: ${top}px;
    left: ${left}px;
    transition: transform 0.5s ease, opacity 0.5s ease;
    opacity: ${opacity};
    transform: ${transform};
    animation: ${float} 3s ease-in-out infinite;
  `}
`;

const Circles = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const largeCircleStart = { top: 200, left: 50 };
  const mediumCircleStart = { top: 450, left: 600 };
  const smallCircleStart = { top: 400, left: 750 };

  const targetTop = window.innerHeight * 1.18;
  const targetLeft = window.innerWidth / 2;

  const isIpadPro =
    window.innerWidth === 1024 &&
    window.innerHeight === 1366 &&
    window.devicePixelRatio === 2;

  const isIPadMini =
    window.innerWidth === 768 &&
    window.innerHeight === 1024 &&
    window.devicePixelRatio === 2;

  const isIPadAir =
    window.innerWidth === 820 &&
    window.innerHeight === 1180 &&
    window.devicePixelRatio === 2;

  const isIPhone14Pro =
    window.innerWidth === 413 &&
    window.innerHeight === 895 &&
    window.devicePixelRatio === 2;

  const isMobile = window.innerWidth < 768;

  console.log(`window.innerWidth: ${window.innerWidth}`);
  console.log(`window.innerHeight: ${window.innerHeight}`);
  console.log(`window.devicePixelRatio: ${window.devicePixelRatio}`);
  console.log(`isIpadPro: ${isIpadPro}`);
  console.log(`isIPadMini: ${isIPadMini}`);
  console.log(`isIPadAir: ${isIPadAir}`);
  console.log(`isIPhone14Pro: ${isIPhone14Pro}`);
  console.log(`isMobile: ${isMobile}`);

  if (isIpadPro) {
    largeCircleStart.top += 150;
    mediumCircleStart.top += 100;
    smallCircleStart.top += 100;
  } else if (isIPadMini) {
    largeCircleStart.top += 140;
    mediumCircleStart.top += 80;
    smallCircleStart.top += 80;

    largeCircleStart.left -= 50; 
    mediumCircleStart.left -= 280; 
    smallCircleStart.left -= 350; 
  } else if (isIPadAir) {
    largeCircleStart.top += 130;
    mediumCircleStart.top += 200;
    smallCircleStart.top += 600;

    largeCircleStart.left -= 50; 
    mediumCircleStart.left -= 280; 
    smallCircleStart.left -= 350; 
  } else if (isIPhone14Pro) {
    largeCircleStart.top += 120;
    mediumCircleStart.top += 90;
    smallCircleStart.top += 90;

    largeCircleStart.left -= 30; 
    mediumCircleStart.left -= 250; 
    smallCircleStart.left -= 300; 
  } else if (isMobile) {
    largeCircleStart.top += 130;
    mediumCircleStart.top += 120;
    smallCircleStart.top += 100;

    largeCircleStart.left -= 20; 
    mediumCircleStart.left -= 350; 
    smallCircleStart.left -= 770; 
  } else {
    // Default case for other devices
    largeCircleStart.top += 100;
    mediumCircleStart.top += 100;
    smallCircleStart.top += 100;

    largeCircleStart.left -= 50; 
    mediumCircleStart.left -= 200; 
    smallCircleStart.left -= 300; 
  }

  const getCircleStyle = (
    initialTop,
    initialLeft,
    offsetX = 0,
    offsetY = 0
  ) => {
    const progress = Math.min(scrollY / 210, 1);
    const top = initialTop - (initialTop - (targetTop + offsetY)) * progress;
    const left =
      initialLeft - (initialLeft - (targetLeft + offsetX)) * progress;
    const opacity = scrollY > initialTop - window.innerHeight ? 1 : 0;
    const transform =
      progress < 1 ? `translateY(${scrollY * 0.5}px)` : `translateY(0)`;

    const adjustedTop =
      progress === 1 && initialTop === largeCircleStart.top ? top + 43 : top;

    return { top: adjustedTop, left, opacity, transform };
  };

  const isTablet = window.innerWidth >= 768 && window.innerWidth <= 1024;

  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  const isIPad =
    /iPad/.test(userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  return (
  <>
    <Circle
      size={
        isIPhone14Pro
          ? 320
          : isIPadAir
          ? 550
          : isIPadMini
          ? 500
          : isTablet
          ? 700
          : isMobile
          ? 300
          : 400
      }
      backgroundColor="rgba(200, 162, 200, 0.6)"
      {...getCircleStyle(
        largeCircleStart.top,
        largeCircleStart.left,
        isIPhone14Pro
          ? -160
          : isIPadAir
          ? -355
          : isIPadMini
          ? -301
          : isTablet
          ? -438
          : isMobile
          ? -144
          : -482,
        isIPhone14Pro
          ? -280
          : isIPadAir
          ? 150
          : isIPadMini
          ? -280
          : isTablet
          ? -202
          : isMobile
          ? -270
          : -190
      )}
    />
    <Circle
      size={
        isIPhone14Pro
          ? 260
          : isIPadAir
          ? 400
          : isIPadMini
          ? 430
          : isTablet
          ? 600
          : isMobile
          ? 245
          : 350
      }
      backgroundColor="rgba(180, 140, 180, 0.4)"
      {...getCircleStyle(
        mediumCircleStart.top,
        mediumCircleStart.left,
        isIPhone14Pro
          ? -130
          : isIPadAir
          ? -280
          : isIPadMini
          ? -265
          : isTablet
          ? -386
          : isMobile
          ? -118
          : -456,
        isIPhone14Pro
          ? -200
          : isIPadAir
          ? 270
          : isIPadMini
          ? -195
          : isTablet
          ? -110
          : isMobile
          ? -200
          : -125
      )}
    />
    <Circle
      size={
        isIPhone14Pro
          ? 130
          : isIPadAir
          ? 250
          : isIPadMini
          ? 230
          : isTablet
          ? 370
          : isMobile
          ? 120
          : 200
      }
      backgroundColor="rgba(160, 120, 160, 0.3)"
      {...getCircleStyle(
        smallCircleStart.top,
        smallCircleStart.left,
        isIPhone14Pro
          ? -60
          : isIPadAir
          ? -201
          : isIPadMini
          ? -165
          : isTablet
          ? -267
          : isMobile
          ? -52
          : -380,
        isIPhone14Pro
          ? -190 // Ajuste para bajar más el círculo pequeño
          : isIPadAir
          ? 333
          : isIPadMini
          ? -100
          : isTablet
          ? 2
          : isMobile
          ? -148
          : -50
      )}
    />
  </>
);
};

export default Circles;