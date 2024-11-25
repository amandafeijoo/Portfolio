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

  const largeCircleStart = { top: 600, left: -200 };
  const mediumCircleStart = { top: 500, left: 1200 };
  const smallCircleStart = { top: 500, left: 600 };

  const targetTop = window.innerHeight * 1.12;
  const targetLeft = window.innerWidth / 2;

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

    return { top, left, opacity, transform };
  };

  return (
    <>
      <Circle
        size={400}
        backgroundColor="rgba(200, 162, 200, 0.6)"
        {...getCircleStyle(
          largeCircleStart.top,
          largeCircleStart.left,
          -200,
          -200
        )}
      />
      <Circle
        size={350}
        backgroundColor="rgba(180, 140, 180, 0.4)"
        {...getCircleStyle(
          mediumCircleStart.top,
          mediumCircleStart.left,
          -175,
          -175
        )}
      />
      <Circle
        size={200}
        backgroundColor="rgba(160, 120, 160, 0.3)"
        {...getCircleStyle(
          smallCircleStart.top,
          smallCircleStart.left,
          -100,
          -100
        )}
      />
    </>
  );
};

export default Circles;
