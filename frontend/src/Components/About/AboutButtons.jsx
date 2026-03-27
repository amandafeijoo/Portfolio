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
    <DownloadButton href="/static/CV_DEVELOPER.pdf" download="CV_DEVELOPER.pdf">
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
