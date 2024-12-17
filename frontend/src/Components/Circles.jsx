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

  const isMobile = window.innerWidth < 768;

  if (isIpadPro) {
    largeCircleStart.top += 150;
    mediumCircleStart.top += 100;
    smallCircleStart.top += 100;
  }

  if (isIPadMini) {
    largeCircleStart.top += 140;
    mediumCircleStart.top += 80;
    smallCircleStart.top += 80;

    largeCircleStart.left -= 50; 
    mediumCircleStart.left -= 280; 
    smallCircleStart.left -= 350; 
  }

  if (isIPadAir) {
    largeCircleStart.top += 130;
    mediumCircleStart.top += 200;
    smallCircleStart.top += 600;

    // Mover los círculos más a la izquierda
    largeCircleStart.left -= 50; 
    mediumCircleStart.left -= 280; 
    smallCircleStart.left -= 350; 
  }

  if (isMobile) {
    largeCircleStart.top += 130;
    mediumCircleStart.top += 120;
    smallCircleStart.top += 100;

    // Mover los círculos más a la izquierda para dispositivos móviles
    largeCircleStart.left -= 20; 
    mediumCircleStart.left -= 350; 
    smallCircleStart.left -= 770; 
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

    // Ajustar la posición del largeCircle cuando los círculos están juntos
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
          isIPadAir
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
          isIPadAir
            ? -355
            : isIPadMini
            ? -301
            : isTablet
            ? -438
            : isMobile
            ? -144
            : -482,
          isIPadAir
            ? 100
            : isIPadMini
            ? -330
            : isTablet
            ? -252
            : isMobile
            ? -320
            : -240
        )}
      />
      <Circle
        size={
          isIPadAir
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
          isIPadAir
            ? -280
            : isIPadMini
            ? -265
            : isTablet
            ? -386
            : isMobile
            ? -118
            : -456,
          isIPadAir
            ? 220
            : isIPadMini
            ? -245
            : isTablet
            ? -160
            : isMobile
            ? -250
            : -175
        )}
      />
      <Circle
        size={
          isIPadAir
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
          isIPadAir
            ? -201
            : isIPadMini
            ? -165
            : isTablet
            ? -267
            : isMobile
            ? -52
            : -380,
          isIPadAir
            ? 283
            : isIPadMini
            ? -150
            : isTablet
            ? -48
            : isMobile
            ? -198
            : -100
        )}
      />
    </>
  );
};

export default Circles;
