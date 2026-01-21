import React from "react";
import {
  ButtonContainer,
  DownloadButton,
  ContactButton,
} from "./styles/AboutButtons.styles";
import DownloadIcon from "@mui/icons-material/Download";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const AboutButtons = ({ onContactClick }) => (
  <ButtonContainer>
    <DownloadButton href="/CV_webdeveloper.pdf" download>
      <div style={{ display: "flex", alignItems: "center" }}>
        <DownloadIcon style={{ marginRight: "8px", fontSize: "16px" }} />
        Access My CV
      </div>
    </DownloadButton>
    <ContactButton onClick={onContactClick}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ContactMailIcon style={{ marginRight: "8px", fontSize: "16px" }} />
        Let’s Create
      </div>
    </ContactButton>
  </ButtonContainer>
);

export default AboutButtons;
