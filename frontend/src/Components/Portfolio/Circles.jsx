// src/Components/Circles.jsx
import React, { useState, useEffect } from "react";
import { Circle } from "../styles/Circles.styles";
import useDeviceInfo from "../../utils/useDeviceInfo";

const Circles = () => {
  const [scrollY, setScrollY] = useState(0);
  const { width, height, devicePixelRatio } = useDeviceInfo();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMobile = width < 768;
  const isTablet = width >= 768 && width <= 1024;

  const isIPadPro =
    (width === 1024 && height === 1366 && devicePixelRatio === 2) ||
    (width === 834 && height === 1194 && devicePixelRatio === 2) ||
    (width === 820 && height === 1180 && devicePixelRatio === 2);

  const isIPadMini = width === 768 && height === 1024 && devicePixelRatio === 2;
  const isIPadAir = width === 820 && height === 1180 && devicePixelRatio === 2;
  const isIPhone14Pro =
    width === 430 && height === 932 && devicePixelRatio === 3;

  const largeStart = { top: 250, left: 90 };
  const mediumStart = { top: 450, left: 520 };
  const smallStart = { top: 300, left: 700 };

  // Modificaciones específicas por dispositivo
  if (isIPadPro) {
    largeStart.top += 150; largeStart.left -= 20;
    mediumStart.top += 240; mediumStart.left -= 400;
    smallStart.top += 100; smallStart.left -= 240;
  } else if (isIPadMini) {
    largeStart.top += 20; largeStart.left -= 20;
    mediumStart.top += 10; mediumStart.left -= 410;
    smallStart.top += 20; smallStart.left -= 355;
  } else if (isIPadAir) {
    largeStart.top += 130; largeStart.left -= 50;
    mediumStart.top += 100; mediumStart.left -= 400;
    smallStart.top += 600; smallStart.left -= 350;
  } else if (isIPhone14Pro) {
    largeStart.top += 200; largeStart.left -= 30;
    mediumStart.top += 180; mediumStart.left -= 250;
    smallStart.top += 180; smallStart.left -= 300;
  } else if (isMobile) {
    largeStart.top -= 30; largeStart.left -= 20;
    mediumStart.top -= 10; mediumStart.left -= 380;
    smallStart.top += 150; smallStart.left -= 640;
  } else {
    largeStart.top -= 100; largeStart.left -= 50;
    mediumStart.top -= 100; mediumStart.left -= 200;
    smallStart.top -= 100; smallStart.left -= 300;
  }

  const targetTop = height * 1.18;
  const targetLeft = width / 2 + 20;

  const getCircleStyle = (initTop, initLeft, offsetX = 0, offsetY = 0) => {
    const progress = Math.min(scrollY / 210, 1);
    const top = initTop - (initTop - (targetTop + offsetY)) * progress;
    const left = initLeft - (initLeft - (targetLeft + offsetX)) * progress;
    const opacity = scrollY > initTop - height ? 1 : 0;
    const transform = progress < 1 ? `translateY(${scrollY * 0.5}px)` : `translateY(0)`;

    let offsetTop = 0, offsetLeft = 0;
    if (progress === 1) {
      if (initTop === largeStart.top) {
        offsetTop = 62; offsetLeft = -16;
      } else if (initTop === mediumStart.top) {
        offsetTop = 20; offsetLeft = -16;
      } else if (initTop === smallStart.top) {
        offsetTop = 20; offsetLeft = -15;
      }
    }

    return {
      top: top + offsetTop,
      left: left + offsetLeft,
      opacity,
      transform,
    };
  };

  return (
    <>
      <Circle
        size={isIPhone14Pro ? 520 : isIPadPro ? 720 : isIPadAir ? 530 : isIPadMini ? 520 : isTablet ? 500 : isMobile ? 300 : 400}
        backgroundColor="rgba(200, 162, 200, 0.6)"
        {...getCircleStyle(largeStart.top, largeStart.left,
          isIPhone14Pro ? -160 : isIPadPro ? -445 : isIPadAir ? -355 : isIPadMini ? -317 : isTablet ? -318 : isMobile ? -139 : -482,
          isIPhone14Pro ? -530 : isIPadPro ? -350 : isIPadAir ? -5 : isIPadMini ? -340 : isTablet ? -339 : isMobile ? -238 : -240
        )}
      />
      <Circle
        size={isIPhone14Pro ? 260 : isIPadPro ? 520 : isIPadAir ? 400 : isIPadMini ? 432 : isTablet ? 400 : isMobile ? 245 : 350}
        backgroundColor="rgba(180, 140, 180, 0.4)"
        {...getCircleStyle(mediumStart.top, mediumStart.left,
          isIPhone14Pro ? -130 : isIPadPro ? -345 : isIPadAir ? -290 : isIPadMini ? -272 : isTablet ? -268 : isMobile ? -110 : -456,
          isIPhone14Pro ? -250 : isIPadPro ? -200 : isIPadAir ? 105 : isIPadMini ? -250 : isTablet ? -240 : isMobile ? -167 : -175
        )}
      />
      <Circle
        size={isIPhone14Pro ? 130 : isIPadPro ? 300 : isIPadAir ? 250 : isIPadMini ? 230 : isTablet ? 270 : isMobile ? 120 : 200}
        backgroundColor="rgba(160, 120, 160, 0.3)"
        {...getCircleStyle(smallStart.top, smallStart.left,
          isIPhone14Pro ? -60 : isIPadPro ? -230 : isIPadAir ? -212 : isIPadMini ? -165 : isTablet ? -201 : isMobile ? -47 : -380,
          isIPhone14Pro ? -240 : isIPadPro ? -100 : isIPadAir ? 175 : isIPadMini ? -150 : isTablet ? -170 : isMobile ? -106 : -100
        )}
      />
    </>
  );
};

export default Circles;

