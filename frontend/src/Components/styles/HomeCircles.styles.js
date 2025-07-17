import styled from "styled-components";
import { float } from "./animations";

const generateCircle = ({ width, height, top, left, bgColor = "transparent" }) => styled.div`
  position: absolute;
  border-radius: 50%;
  width: ${width}px;
  height: ${height}px;
  top: ${top};
  left: ${left};
  background-color: ${bgColor};
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(200, 162, 200, 0.9);
  animation: ${float} 4s ease-in-out infinite;
  z-index: 2;

  @media (max-width: 768px) {
    width: ${Math.floor(width * 0.5)}px;
    height: ${Math.floor(height * 0.5)}px;
  }

  @media (max-width: 480px) {
    width: ${Math.floor(width * 0.3)}px;
    height: ${Math.floor(height * 0.3)}px;
  }

  @media (max-width: 375px) {
    width: ${Math.floor(width * 0.25)}px;
    height: ${Math.floor(height * 0.25)}px;
  }
`;

export const Circle1 = generateCircle({ width: 550, height: 550, top: "30%", left: "52%", bgColor: "rgba(200, 162, 200, 0.5)" });
export const Circle2 = generateCircle({ width: 300, height: 300, top: "100%", left: "-10%" });
export const Circle3 = generateCircle({ width: 200, height: 200, top: "30%", left: "10%" });
export const Circle4 = generateCircle({ width: 400, height: 400, top: "60%", left: "70%" });
export const Circle5 = generateCircle({ width: 350, height: 350, top: "160%", left: "20%" });
export const Circle6 = generateCircle({ width: 250, height: 250, top: "220%", left: "90%" });
export const Circle7 = generateCircle({ width: 550, height: 550, top: "220%", left: "90%", bgColor: "rgba(200, 162, 200, 0.5)" });
export const Circle8 = generateCircle({ width: 250, height: 250, top: "260%", left: "-10%", bgColor: "rgba(200, 162, 200, 0.5)" });
export const Circle9 = generateCircle({ width: 550, height: 550, top: "260%", left: "-45%" });
export const Circle10 = generateCircle({ width: 550, height: 550, top: "360%", left: "-45%" });
export const Circle11 = generateCircle({ width: 250, height: 250, top: "370%", left: "-10%", bgColor: "rgba(200, 162, 200, 0.5)" });
export const Circle12 = generateCircle({ width: 250, height: 250, top: "420%", left: "90%" });
export const Circle13 = generateCircle({ width: 550, height: 550, top: "420%", left: "90%", bgColor: "rgba(200, 162, 200, 0.5)" });

  