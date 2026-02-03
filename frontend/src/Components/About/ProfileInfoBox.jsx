import React from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PublicIcon from "@mui/icons-material/Public";
import SchoolIcon from "@mui/icons-material/School";
import BrushIcon from "@mui/icons-material/Brush";
import CodeIcon from "@mui/icons-material/Code";
import StarIcon from "@mui/icons-material/Star";

/* =========================
   INFO BOX
========================= */
const InfoBox = styled(Box)`
  background: rgba(18, 19, 20, 0.78);
  backdrop-filter: blur(8px);

  border-radius: 18px;
  border: 1px solid rgba(201, 184, 138, 0.45);

  padding: clamp(16px, 3vw, 22px);
  margin: 24px auto 0;

  width: min(100%, 420px);

  color: #f4f2ed;

  box-shadow: 0 0 20px rgba(201, 184, 138, 0.12),
    0 0 50px rgba(201, 184, 138, 0.05);
`;

/* =========================
   INFO ITEM
========================= */
const InfoItem = styled(Box)`
  display: flex;
  align-items: flex-start;
  gap: 10px;

  margin-bottom: 10px;

  svg {
    color: #c9b88a;
    font-size: 1.05rem;
    margin-top: 2px;
    flex-shrink: 0;
  }
`;

/* =========================
   TEXT
========================= */
const InfoText = styled(Typography)`
  font-size: clamp(0.82rem, 2.5vw, 0.95rem);
  line-height: 1.6;
  color: #b8b4aa;

  strong {
    color: #f4f2ed;
    font-weight: 500;
  }
`;

const ProfileInfoBox = () => {
  return (
    <InfoBox>
      <InfoItem>
        <StarIcon />
        <InfoText>
          Founder & Lead Developer at <strong>Webcode-Art</strong>
        </InfoText>
      </InfoItem>

      <InfoItem>
        <LocationOnIcon />
        <InfoText>Based in Trondheim, Norway</InfoText>
      </InfoItem>

      <InfoItem>
        <PublicIcon />
        <InfoText>Working with clients worldwide</InfoText>
      </InfoItem>

      <InfoItem>
        <SchoolIcon />
        <InfoText>Master’s Degree in Web Development</InfoText>
      </InfoItem>

      <InfoItem>
        <BrushIcon />
        <InfoText>Design-driven development approach</InfoText>
      </InfoItem>

      <InfoItem>
        <CodeIcon />
        <InfoText>Personal studio — not an agency</InfoText>
      </InfoItem>
    </InfoBox>
  );
};

export default ProfileInfoBox;
