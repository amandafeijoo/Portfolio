import React from "react";
import styled from "styled-components";
import { Box, Typography, Button } from "@mui/material";
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
  width: 90%;
  border: 2px solid rgba(200, 162, 200, 0.5);
`;

const InfoItem = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 10px;
`;

const InfoText = styled(Typography)`
  margin-left: 10px;
`;

const ProfileInfoBox = () => {
  return (
    <InfoBox>
      <InfoItem>
        <LocationOnIcon style={{ marginRight: "8px" }} />
        <InfoText>Åfjord, Norway</InfoText>
      </InfoItem>
      <InfoItem>
        <CakeIcon style={{ marginRight: "8px" }} />
        <InfoText>Age: 37</InfoText>
      </InfoItem>
      <InfoItem>
        <FlagIcon style={{ marginRight: "8px" }} />
        <InfoText>Nationality: Spanish</InfoText>
      </InfoItem>
      <InfoItem>
        <FavoriteIcon style={{ marginRight: "8px" }} />
        <InfoText>
          Interests: Gym, Travel, Coding, Design, Painting, Music
        </InfoText>
      </InfoItem>
      <InfoItem>
        <SchoolIcon style={{ marginRight: "8px" }} />
        <InfoText>Study: Universidad Europea Madrid</InfoText>
      </InfoItem>
      <InfoItem>
        <WorkIcon style={{ marginRight: "8px" }} />
        <InfoText>Employment: Fosen Fjord Hotell</InfoText>
      </InfoItem>
    </InfoBox>
  );
};

export default ProfileInfoBox;
