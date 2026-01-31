import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { MdPerson, MdEmail, MdMessage, MdReply, MdInfo } from "react-icons/md";

import {
  PageWrap,
  PolicyCard,
  SectionTitle,
  ListItemRow,
} from "./PrivacyPolicy.styles";

const Item = ({ icon, text }) => (
  <ListItemRow>
    <span>{icon}</span>
    <Typography>{text}</Typography>
  </ListItemRow>
);

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrap>
      <PolicyCard>
        {/* =====================
            HEADER
        ===================== */}
        <Typography variant="h4" sx={{ mb: 2 }}>
          Privacy Policy
        </Typography>

        <Typography sx={{ opacity: 0.6, mb: 4 }}>
          Last updated: January 31, 2026
        </Typography>

        <Typography sx={{ mb: 4 }}>
          This Privacy Policy explains how personal information is collected,
          used, and protected when you interact with this website or submit a
          project inquiry through its forms.
        </Typography>

        {/* =====================
            INFORMATION COLLECTION
        ===================== */}
        <SectionTitle>Information Collection</SectionTitle>
        <Typography sx={{ mb: 2 }}>
          When you submit a form on this website, the following personal data
          may be collected:
        </Typography>

        <Item icon={<MdPerson />} text="Your name" />
        <Item icon={<MdEmail />} text="Your email address" />
        <Item icon={<MdMessage />} text="Project details or message content" />
        <Item
          icon={<MdInfo />}
          text="Type of project and budget range (if provided)"
        />

        {/* =====================
            USE OF INFORMATION
        ===================== */}
        <SectionTitle>Use of Information</SectionTitle>

        <Item
          icon={<MdReply />}
          text="Respond to inquiries or project requests"
        />
        <Item
          icon={<MdInfo />}
          text="Prepare proposals, estimates, or timelines based on your request"
        />

        <Typography sx={{ mt: 2, mb: 3 }}>
          Your information is used solely for communication related to your
          inquiry and potential collaboration.
        </Typography>

        {/* =====================
            DATA SHARING
        ===================== */}
        <SectionTitle>Data Sharing</SectionTitle>
        <Typography sx={{ mb: 3 }}>
          Your personal data is never sold, rented, or shared with third
          parties, except when required by law or strictly necessary to respond
          to your request.
        </Typography>

        {/* =====================
            DATA RETENTION
        ===================== */}
        <SectionTitle>Data Retention</SectionTitle>
        <Typography sx={{ mb: 3 }}>
          Personal data is retained only for as long as necessary to respond to
          your inquiry or manage a potential project. You may request deletion
          of your data at any time.
        </Typography>

        {/* =====================
    EXTERNAL LINKS
===================== */}
        <SectionTitle>External Links</SectionTitle>
        <Typography sx={{ mb: 3 }}>
          This website contains links to external platforms such as GitHub,
          Instagram, Facebook and LinkedIn. Clicking on these links may redirect
          you to third-party websites that are governed by their own privacy
          policies and terms.
        </Typography>

        <Typography sx={{ mb: 3 }}>
          I do not control and am not responsible for the content, privacy
          practices or data handling of these external platforms. I encourage
          you to review their privacy policies before sharing any personal
          information.
        </Typography>

        {/* =====================
            SECURITY
        ===================== */}
        <SectionTitle>Security</SectionTitle>
        <Typography sx={{ mb: 3 }}>
          Reasonable technical and organizational measures are taken to protect
          your personal data. However, no method of transmission or storage is
          completely secure.
        </Typography>

        {/* =====================
            YOUR RIGHTS
        ===================== */}
        <SectionTitle>Your Rights</SectionTitle>
        <Typography sx={{ mb: 3 }}>
          You have the right to request access, correction, or deletion of your
          personal data at any time.
        </Typography>

        {/* =====================
            CONTACT
        ===================== */}
        <SectionTitle>Contact</SectionTitle>
        <Typography>
          If you have any questions about this Privacy Policy or how your data
          is handled, please contact:
          <br />
          <strong>amandaflores@webcode-art.com</strong>
        </Typography>
      </PolicyCard>
    </PageWrap>
  );
}
