import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const SummaryContainer = styled.div`
  opacity: 0;
  transform: scale(0.8) translateY(200px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  border: 1px solid rgba(200, 162, 200, 0.5);
  padding: 10px;
  text-align: center;
  width: 60%;
  margin-top:100px;
  margin-bottom: 120px;

  &.visible {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

const SummaryText = styled.p`
  text-align: justify;
  line-height: 1.6;
  margin: 10px 0;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
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
