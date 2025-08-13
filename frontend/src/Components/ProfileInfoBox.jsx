import React from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CakeIcon from "@mui/icons-material/Cake";
import FlagIcon from "@mui/icons-material/Flag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

const InfoBox = styled(Box)`
  background-color: rgba(192, 192, 192, 0.6);
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  text-align: left;
  color:#ffff;
  width: 90%;
  border: 2px solid rgba(200, 162, 200, 0.5);

  @media (max-width: 768px) {
    width: 90%;
    padding: 20px;
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
        <LocationOnIcon style={{ marginRight: "8px" }} />
        <InfoText>Trondheim, Norway</InfoText>
      </InfoItem>
      {/* <InfoItem>
        <CakeIcon style={{ marginRight: "8px" }} />
        <InfoText>Age: 37</InfoText>
      </InfoItem> */}
      <InfoItem>
        <FlagIcon style={{ marginRight: "8px" }} />
        <InfoText>Nationality: Spanish</InfoText>
      </InfoItem>
      <InfoItem>
        <FavoriteIcon style={{ marginRight: "8px" }} />
        <InfoText>
          Interests: Gym, Travel, Coding, Design, Painting, Music.
        </InfoText>
      </InfoItem>
      <InfoItem>
        <SchoolIcon style={{ marginRight: "8px" }} />
        <InfoText>Study: Universidad Europea Madrid</InfoText>
      </InfoItem>
      <InfoItem>
        <WorkIcon style={{ marginRight: "8px" }} />
        <InfoText>Employment: Britannia Hotel</InfoText>
      </InfoItem>
    </InfoBox>
  );
};

export default ProfileInfoBox;
