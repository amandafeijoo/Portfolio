// ContactInfoItem.jsx
import React from "react";
import { Typography } from "@mui/material";
import { ContactInfo, SmallSection } from "./styles/ContactSections.styles";

const ContactInfoItem = ({ label, link, display }) => (
  <SmallSection>
    <ContactInfo>
      <Typography variant="h5" component="h2" sx={{ fontFamily: "'Source Code Pro', monospace", fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem", lg: "1.2rem" }, color: "#ffc0cb" }}>
        {label}
      </Typography>
      <Typography variant="body1" component="p" sx={{ fontFamily: "'Source Code Pro', monospace", fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem", lg: "1rem" }, color: "#d8bfd8" }}>
        <a href={link} style={{ color: "#d8bfd8", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
          {display}
        </a>
      </Typography>
    </ContactInfo>
  </SmallSection>
);

export default ContactInfoItem;
