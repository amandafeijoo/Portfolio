import React from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PublicIcon from "@mui/icons-material/Public";
import SchoolIcon from "@mui/icons-material/School";
import BrushIcon from "@mui/icons-material/Brush";
import CodeIcon from "@mui/icons-material/Code";
import StarIcon from "@mui/icons-material/Star";

const InfoBox = styled(Box)`
  background-color: rgba(18, 19, 20, 0.78);
  padding: 20px;
  border-radius: 14px;
  margin-top: 20px;
  text-align: left;
  color: #f4f2ed;
  width: 90%;
  border: 1px solid rgba(201, 184, 138, 0.45);

  box-shadow: 0 0 20px rgba(201, 184, 138, 0.12),
    0 0 50px rgba(201, 184, 138, 0.05);

  backdrop-filter: blur(6px);

  @media (max-width: 768px) {
    width: 90%;
    padding: 18px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 50%;
    padding: 18px;
  }
`;

const InfoItem = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 10px;

  @media (max-width: 768px) {
    margin-left: 5px;
    margin-bottom: 8px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    margin-left: 10px;
    margin-bottom: 9px;
  }
`;

const InfoText = styled(Typography)`
  margin-left: 10px;
  color: #b8b4aa;

  strong {
    color: #f4f2ed;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    margin-left: 5px;
    font-size: 0.9em;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    margin-left: 8px;
    font-size: 1em;
  }
`;

const ProfileInfoBox = () => {
  return (
    <InfoBox>
      <InfoItem>
        <StarIcon style={{ marginRight: "8px", color: "#C9B88A" }} />
        <InfoText>
          Founder & Lead Developer at <strong>Webcode-Art</strong>
        </InfoText>
      </InfoItem>

      <InfoItem>
        <LocationOnIcon style={{ marginRight: "8px", color: "#C9B88A" }} />
        <InfoText>Based in Trondheim, Norway</InfoText>
      </InfoItem>

      <InfoItem>
        <PublicIcon style={{ marginRight: "8px", color: "#C9B88A" }} />
        <InfoText>Working with clients worldwide</InfoText>
      </InfoItem>

      <InfoItem>
        <SchoolIcon style={{ marginRight: "8px", color: "#C9B88A" }} />
        <InfoText>Master’s Degree in Web Development</InfoText>
      </InfoItem>

      <InfoItem>
        <BrushIcon style={{ marginRight: "8px", color: "#C9B88A" }} />
        <InfoText>Design-driven development approach</InfoText>
      </InfoItem>

      <InfoItem>
        <CodeIcon style={{ marginRight: "8px", color: "#C9B88A" }} />
        <InfoText>Personal studio — not an agency</InfoText>
      </InfoItem>
    </InfoBox>
  );
};

export default ProfileInfoBox;
