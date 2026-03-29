import styled from "styled-components";

export const HomeWrapper = styled.main`
  width: 100%;
  overflow-x: hidden;
`;

export const HeroStickySection = styled.section`
  position: relative;
  height: 220vh;
  width: 100%;
`;

export const HeroStickyInner = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  z-index: 1;
  background: #000;
  outline: 2px solid red;
`;

export const WhatIDoOverlapSection = styled.section`
  position: relative;
  z-index: 3;
  margin-top: -18vh;
  background: #000;
  outline: 2px solid lime;

  border-top: 1px solid rgba(201, 184, 138, 0.18);

  @media (max-width: 768px) {
    margin-top: -8vh;
  }
`;