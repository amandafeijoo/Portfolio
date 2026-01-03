import Wave from "react-wavify";
import styled from "styled-components";

const WaveWrapper = styled.div`
  position: absolute;
  left: 50%;
  right: 0;
  top: 40%;

  width: 85vw;
  height: 300px;
    

  pointer-events: none;
  z-index: 1;
`;





const StyledWave = styled(Wave)`
  position: absolute;
  width: 120%;
  left: -50%;
  mix-blend-mode: soft-light;

`;


export default function AnimateWave() {
    return (
      <WaveWrapper>
    
{/* Wave superior (invertida) */}
<StyledWave
  fill="rgba(255,255,255,0.03)"
  options={{ height: 30, amplitude: 40, speed: 0.04, points: 5 }}
  style={{ transform: "scaleY(-1)" }}
/>

{/* Wave inferior */}
<StyledWave
  fill="rgba(255,255,255,0.03)"
  options={{ height: 80, amplitude: 40, speed: 0.04, points: 5 }}
  style={{ marginTop: -120 }}
/>

      </WaveWrapper>
    );
  }
  



