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
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    devicePixelRatio: window.devicePixelRatio,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { width, height, devicePixelRatio } = windowDimensions;

  const largeCircleStart = { top: 250, left: 90 };
  const mediumCircleStart = { top: 450, left: 520 };
  const smallCircleStart = { top: 300, left: 700 };

  const targetTop = height * 1.18;
  const targetLeft = width / 2 + 20;
  const isIPadPro =
    (width === 1024 && height === 1366 && devicePixelRatio === 2) ||
    (width === 834 && height === 1194 && devicePixelRatio === 2) ||
    (width === 820 && height === 1180 && devicePixelRatio === 2);

  const isIPadMini = width === 768 && height === 1024 && devicePixelRatio === 2;

  const isIPadAir = width === 820 && height === 1180 && devicePixelRatio === 2;

  const isIPhone14Pro =
    width === 430 && height === 932 && devicePixelRatio === 3;

  const isMobile = width < 768;

  if (isIPadPro) {
    largeCircleStart.top += 150;
    mediumCircleStart.top += 240;
    smallCircleStart.top += 100;

    largeCircleStart.left -= 20;
    mediumCircleStart.left -= 400;
    smallCircleStart.left -= 240;
  } else if (isIPadMini) {
    largeCircleStart.top += 20;
    mediumCircleStart.top += 10;
    smallCircleStart.top += 20;

    largeCircleStart.left -= 20;
    mediumCircleStart.left -= 410;
    smallCircleStart.left -= 355;
  } else if (isIPadAir) {
    largeCircleStart.top += 130;
    mediumCircleStart.top += 100;
    smallCircleStart.top += 600;

    largeCircleStart.left -= 50;
    mediumCircleStart.left -= 400;
    smallCircleStart.left -= 350;
  } else if (isIPhone14Pro) {
    largeCircleStart.top += 200;
    mediumCircleStart.top += 180;
    smallCircleStart.top += 180;

    largeCircleStart.left -= 30;
    mediumCircleStart.left -= 250;
    smallCircleStart.left -= 300;
  } else if (isMobile) {
    largeCircleStart.top += -30;
    mediumCircleStart.top += -10;
    smallCircleStart.top += 150;

    largeCircleStart.left -= 20;
    mediumCircleStart.left -= 380;
    smallCircleStart.left -= 640;
  } else {
    // Default case for other devices
    largeCircleStart.top -= 100;
    mediumCircleStart.top -= 100;
    smallCircleStart.top -= 100;

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
    const opacity = scrollY > initialTop - height ? 1 : 0;
    const transform =
      progress < 1 ? `translateY(${scrollY * 0.5}px)` : `translateY(0)`;

    // Desplazamiento vertical personalizado
    let offsetTop = 0;
    let offsetLeft = 0;

    if (progress === 1) {
      if (initialTop === largeCircleStart.top) {
        offsetTop = 62;
        offsetLeft = -16; // muevelo 30px a la izquierda
      } else if (initialTop === mediumCircleStart.top) {
        offsetTop = 20;
        offsetLeft = -16;
      } else if (initialTop === smallCircleStart.top) {
        offsetTop = 20;
        offsetLeft = -15;
      }
    }

    const adjustedTop = top + offsetTop;
    const adjustedLeft = left + offsetLeft;

    return { top: adjustedTop, left: adjustedLeft, opacity, transform };
  };

  const isTablet = width >= 768 && width <= 1024;

  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  const isIPad =
    /iPad/.test(userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  return (
    <>
      <Circle
        size={
          isIPhone14Pro
            ? 520
            : isIPadPro
            ? 720
            : isIPadAir
            ? 530
            : isIPadMini
            ? 520
            : isTablet
            ? 500
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
            : isIPadPro
            ? -445
            : isIPadAir
            ? -355
            : isIPadMini
            ? -317
            : isTablet
            ? -318
            : isMobile
            ? -139
            : -482,
          isIPhone14Pro
            ? -530
            : isIPadPro
            ? -350
            : isIPadAir
            ? -5
            : isIPadMini
            ? -340
            : isTablet
            ? -339
            : isMobile
            ? -238
            : -240
        )}
      />
      <Circle
        size={
          isIPhone14Pro
            ? 260
            : isIPadPro
            ? 520
            : isIPadAir
            ? 400
            : isIPadMini
            ? 432
            : isTablet
            ? 400
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
            : isIPadPro
            ? -345
            : isIPadAir
            ? -290
            : isIPadMini
            ? -272
            : isTablet
            ? -268
            : isMobile
            ? -110 //centrar el de enmedio
            : -456,
          isIPhone14Pro
            ? -250
            : isIPadPro
            ? -200
            : isIPadAir
            ? 105
            : isIPadMini
            ? -250
            : isTablet
            ? -240
            : isMobile
            ? -167 // bajar el de enmedio
            : -175
        )}
      />
      <Circle
        size={
          isIPhone14Pro
            ? 130
            : isIPadPro
            ? 300
            : isIPadAir
            ? 250
            : isIPadMini
            ? 230
            : isTablet
            ? 270
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
            : isIPadPro
            ? -230
            : isIPadAir
            ? -212
            : isIPadMini
            ? -165
            : isTablet
            ? -201
            : isMobile
            ? -47
            : -380,
          isIPhone14Pro
            ? -240
            : isIPadPro
            ? -100
            : isIPadAir
            ? 175
            : isIPadMini
            ? -150
            : isTablet
            ? -170
            : isMobile
            ? -106
            : -100
        )}
      />
    </>
  );
};

export default Circles;
