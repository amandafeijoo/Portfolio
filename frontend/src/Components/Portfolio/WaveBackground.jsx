import React from "react";
import Wavify from "react-wavify";
import { WaveBackground as WaveWrapper } from "./styles/Projects.styles";

const WaveBackground = () => {
  const waveStyle = { position: "absolute", left: 0, width: "100%", height: "50%" };

  return (
    <WaveWrapper>
      <Wavify
        fill="rgba(255, 105, 180, 0.5)"
        paused={false}
        options={{ height: 80, amplitude: 30, speed: 0.15, points: 3 }}
        style={{ ...waveStyle, top: 0 }}
      />
      <Wavify
        fill="rgba(152, 224, 152, 0.5)"
        paused={false}
        options={{ height: 200, amplitude: 100, speed: 0.15, points: 3 }}
        style={{ ...waveStyle, top: 0 }}
      />
      <Wavify
        fill="rgba(153, 170, 255, 0.5)"
        paused={false}
        options={{ height: 200, amplitude: 100, speed: 0.15, points: 3 }}
        style={{ ...waveStyle, top: 0 }}
      />
      <Wavify
        fill="rgba(255, 105, 180, 0.5)"
        paused={false}
        options={{ height: 200, amplitude: 30, speed: 0.15, points: 3 }}
        style={{ ...waveStyle, bottom: 0, transform: "rotate(180deg)" }}
      />
      <Wavify
        fill="rgba(152, 224, 152, 0.5)"
        paused={false}
        options={{ height: 100, amplitude: 100, speed: 0.15, points: 3 }}
        style={{ ...waveStyle, bottom: 0, transform: "rotate(180deg)" }}
      />
      <Wavify
        fill="rgba(153, 170, 255, 0.5)"
        paused={false}
        options={{ height: 200, amplitude: 100, speed: 0.15, points: 3 }}
        style={{ ...waveStyle, bottom: 0, transform: "rotate(180deg)" }}
      />
    </WaveWrapper>
  );
};

export default WaveBackground;
