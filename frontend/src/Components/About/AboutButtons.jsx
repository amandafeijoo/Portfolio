import React from "react";
import {
  ButtonContainer,
  DownloadButton,
  ContactButton,
} from "./AboutButtons.styles";
import DownloadIcon from "@mui/icons-material/Download";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const AboutButtons = ({ onContactClick }) => (
  <ButtonContainer>
    <DownloadButton href="/CV_webdeveloper.pdf" download>
      <span className="icon">
        <DownloadIcon />
      </span>
      Access My CV
    </DownloadButton>

    <ContactButton onClick={onContactClick}>
      <span className="icon">
        <ContactMailIcon />
      </span>
      Let’s Create
    </ContactButton>
  </ButtonContainer>
);

export default AboutButtons;
