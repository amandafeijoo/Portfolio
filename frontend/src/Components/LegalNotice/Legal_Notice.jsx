import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import {
  MdPerson,
  MdEmail,
  MdBusiness,
  MdGavel,
  MdInfo,
  MdCopyright,
} from "react-icons/md";

import {
  PageWrap,
  PolicyCard,
  SectionTitle,
  ListItemRow,
} from "./Legal_Notice.styles";

const Item = ({ icon, text }) => (
  <ListItemRow>
    <span>{icon}</span>
    <Typography>{text}</Typography>
  </ListItemRow>
);

export default function LegalNotice() {
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
          Legal Notice
        </Typography>

        <Typography sx={{ opacity: 0.6, mb: 4 }}>
          Last updated: January 31, 2026
        </Typography>

        <Typography sx={{ mb: 4 }}>
          This Legal Notice provides information about the ownership, purpose,
          and legal framework of the Webcode-Art website.
        </Typography>

        {/* =====================
            WEBSITE OWNER
        ===================== */}
        <SectionTitle>Website Owner</SectionTitle>

        <Item
          icon={<MdPerson />}
          text="Website owned and maintained by Amanda Flores Feijoo."
        />
        <Item
          icon={<MdEmail />}
          text="Contact email: amandaflores@webcode-art.com"
        />
        <Item
          icon={<MdBusiness />}
          text="Webcode-Art is a freelance web development and design brand."
        />

        {/* =====================
            PURPOSE OF THE WEBSITE
        ===================== */}
        <SectionTitle>Purpose of the Website</SectionTitle>
        <Typography sx={{ mb: 3 }}>
          This website serves as the professional platform of Webcode-Art,
          presenting selected projects and information about web design and
          full-stack development services. It also provides a contact form for
          professional inquiries and potential collaborations.
        </Typography>

        {/* =====================
            PROFESSIONAL ACTIVITY
        ===================== */}
        <SectionTitle>Professional Activity</SectionTitle>
        <Typography sx={{ mb: 3 }}>
          Webcode-Art offers custom web development and design services.
          Commercial activity and invoicing will be carried out in accordance
          with applicable regulations once services are formally contracted.
        </Typography>

        <Typography sx={{ mb: 3 }}>
          At this stage, no products or services are sold directly through this
          website.
        </Typography>

        {/* =====================
            ACADEMIC PROJECTS DISCLAIMER
        ===================== */}
        <SectionTitle>Academic Projects Disclaimer</SectionTitle>
        <Typography sx={{ mb: 3 }}>
          Some projects presented on this website were developed within the
          academic framework of a Master’s Degree in Professional Web
          Development.
        </Typography>

        <Typography sx={{ mb: 3 }}>
          In those specific cases, real brand names, restaurant names, logos or
          publicly available information may appear and are used strictly for
          educational and non-commercial purposes. These projects are displayed
          exclusively as part of the professional portfolio.
        </Typography>

        {/* =====================
            INTELLECTUAL PROPERTY
        ===================== */}
        <SectionTitle>Intellectual Property</SectionTitle>

        <Item
          icon={<MdCopyright />}
          text="All content on this website is the intellectual property of Amanda Flores Feijoo, unless otherwise stated."
        />
        <Item
          icon={<MdInfo />}
          text="Reproduction, distribution or modification without prior authorization is prohibited."
        />

        {/* =====================
            LIMITATION OF LIABILITY
        ===================== */}
        <SectionTitle>Limitation of Liability</SectionTitle>
        <Typography sx={{ mb: 3 }}>
          The website owner is not responsible for the misuse of the content
          published on this website or for any damages resulting from its use.
        </Typography>

        <Typography sx={{ mb: 3 }}>
          External links may redirect to third-party websites. The website owner
          is not responsible for the content, legality or privacy practices of
          those external sites.
        </Typography>

        {/* =====================
            APPLICABLE LAW
        ===================== */}
        <SectionTitle>Applicable Law</SectionTitle>

        <Item
          icon={<MdGavel />}
          text="This Legal Notice is governed by applicable European and Norwegian legislation."
        />
      </PolicyCard>
    </PageWrap>
  );
}
