import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const SummaryContainer = styled.div`
  opacity: 0;
  transform: scale(0.8) translateY(200px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  border: 1px solid rgba(200, 162, 200, 0.5);
  padding: 20px;
  text-align: center;
  width: 60%;
  margin-top: 100px;
  margin-bottom: 120px;

  &.visible {
    opacity: 1;
    transform: scale(1) translateY(0);
  }

  @media (max-width: 1024px) {
    padding: 15px; /* Tabletas */
    margin-top: -200px;
  }

  @media (max-width: 834px) and (min-width: 768px) {
    /* iPad Mini */
    max-width: 60%;
    padding: 30px; 
    margin-top: -100px; 
    margin-bottom: 140px;
  }

  @media (max-width: 1024px) and (min-width: 834px) {
    /* iPad Air */
    max-width: 70% !important; 
    padding: 20px !important; 
    margin-top: -200px !important; 
    margin-bottom: 300px !important; 
  }

  @media (max-width: 1366px) and (min-width: 1024px) {
    /* iPad Pro */
    max-width: 70% !important;
    padding: 20px !important; 
    margin-top: -80px !important; 
    margin-bottom: 100px !important; 
  }

  @media (max-width: 768px) {
    width: 100% !important;
    padding: 3px !important;
    margin-top: -80px !important;
    margin-bottom: 60px !important;
  }

  @media (max-width: 480px) {
    width: 70% !important;
    padding: 6px !important;
    margin-top: -280px !important; 
    margin-bottom: 80px !important;
  }
`;

const SummaryText = styled.p`
  text-align: justify;
  line-height: 1.6;
  margin: 10px 0;

  @media (max-width: 834px) and (min-width: 768px) {
    /* iPad Mini */
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }

  @media (min-width: 1025px) {
    font-size: 16px;
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
  z-index: 1;
  box-shadow: 0px 4px 20px rgba(128, 128, 128, 0.5),
    0px 4px 20px rgba(255, 255, 255, 0.5), 0px 4px 20px rgba(153, 102, 255, 0.5);
  transition: all 0.5s;
  border: 2px solid #99aaff;

  &.visible {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

const AboutSummary = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY / 7000;
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <SummaryContainer
      ref={ref}
      className={inView ? "visible" : ""}
      style={{ transform: `scale(${scale})` }}
    >
      <ProfileImage
        src="/images/perfil.jpg"
        alt="Perfil"
        className={inView ? "visible" : ""}
      />
      <h2>About Me</h2>
      <SummaryText>
        I am Amanda Flores, a Full-Stack Developer with advanced training in web
        and application development, complemented by a solid foundation in
        graphic design. I recently completed my Master’s Degree in Web
        Development and Applications online at Universidad Europea Madrid.
      </SummaryText>
    </SummaryContainer>
  );
};

export default AboutSummary;
