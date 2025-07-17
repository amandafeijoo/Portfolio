import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import {MdGavel,MdPublic,MdBusiness,MdLock,MdLanguage,} from "react-icons/md";
import {AnimatedBox,StyledTitle,StyledSubtitle,FloatingCircle,
} from "./styles/LegalNotice.styles";


const ListItem = ({ icon, text }) => (
  <li style={{ display: "flex", alignItems: "center", marginBottom: "6px" }}>
    <span style={{ marginRight: "8px", color: "#fbb6ce" }}>{icon}</span>
    <Typography sx={{ fontFamily: "'Source Code Pro', monospace" }}>
      {text}
    </Typography>
  </li>
);

const LegalNotice = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <AnimatedBox>
      <FloatingCircle
        style={{
          width: 300,
          height: 300,
          top: -20,
          right: -20,
          background: "rgba(255, 255, 255, 0.2)",
        }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <FloatingCircle
        style={{
          width: 400,
          height: 400,
          bottom: -30,
          left: -30,
          background: "rgba(255, 255, 255, 0.15)",
        }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <Typography
        variant="h4"
        sx={{ mb: 3, fontFamily: "'Source Code Pro', monospace" }}
      >
        Legal Notice
      </Typography>

      <StyledSubtitle
        sx={{ mb: 2, fontFamily: "'Source Code Pro', monospace" }}
      >
        This website is the professional portfolio of Amanda Flores Feijoo. Its
        main purpose is to showcase personal and academic projects and provide a
        contact form for professional inquiries.
      </StyledSubtitle>

      <StyledSubtitle
        sx={{ mb: 3, fontFamily: "'Source Code Pro', monospace" }}
      >
        Some of the projects presented here were created within the academic
        framework of the Master's program at Universidad Europea. In these
        cases, real brand names, logos, or public information might have been
        used strictly for educational purposes. These materials are not intended
        for commercial use or distribution.
      </StyledSubtitle>

      <StyledTitle
        variant="h6"
        sx={{ fontFamily: "'Source Code Pro', monospace" }}
      >
        Website Owner:
      </StyledTitle>
      <StyledSubtitle
        sx={{ mb: 2, fontFamily: "'Source Code Pro', monospace" }}
      >
        Amanda Flores Feijoo
        <br />
        Email: amandaflores@webcode-art.com
      </StyledSubtitle>

      <StyledTitle
        variant="h6"
        sx={{ fontFamily: "'Source Code Pro', monospace" }}
      >
        Domain and Hosting:
      </StyledTitle>
      <StyledSubtitle
        sx={{ mb: 2, fontFamily: "'Source Code Pro', monospace" }}
      >
        The domain is managed via Google Workspace. Code is hosted on
        Squarespace, frontend on Netlify, and backend on Render.
      </StyledSubtitle>

      <StyledTitle
        variant="h6"
        sx={{ fontFamily: "'Source Code Pro', monospace" }}
      >
        Purpose:
      </StyledTitle>
      <StyledSubtitle
        sx={{ mb: 2, fontFamily: "'Source Code Pro', monospace" }}
      >
        This website aims to present Amanda Flores Feijoo’s professional
        portfolio and offer a contact form for job opportunities or professional
        inquiries.
      </StyledSubtitle>

      <StyledTitle
        variant="h6"
        sx={{ fontFamily: "'Source Code Pro', monospace" }}
      >
        Educational Disclaimer:
      </StyledTitle>
      <StyledSubtitle
        sx={{ mb: 2, fontFamily: "'Source Code Pro', monospace" }}
      >
        Some projects on this website were developed as part of the Master's
        program at Universidad Europea. These projects may use brand names,
        logos, or public content for purely educational purposes. They are not
        intended for commercial use or distribution.
      </StyledSubtitle>

      <StyledTitle
        variant="h6"
        sx={{ fontFamily: "'Source Code Pro', monospace" }}
      >
        Intellectual Property:
      </StyledTitle>
      <StyledSubtitle
        sx={{ mb: 2, fontFamily: "'Source Code Pro', monospace" }}
      >
        All content on this website—including images, text, videos, logos, and
        graphic design—is the property of Amanda Flores Feijoo, unless otherwise
        stated. Reproduction in whole or in part is prohibited without prior
        authorization.
      </StyledSubtitle>

      <StyledTitle
        variant="h6"
        sx={{ fontFamily: "'Source Code Pro', monospace" }}
      >
        Limitation of Liability:
      </StyledTitle>
      <StyledSubtitle
        sx={{ mb: 2, fontFamily: "'Source Code Pro', monospace" }}
      >
        The owner is not responsible for improper use of the site by users or
        for any resulting damages. The owner also disclaims responsibility for
        the legality of third-party sites linked from this site.
      </StyledSubtitle>

      <StyledTitle
        variant="h6"
        sx={{ fontFamily: "'Source Code Pro', monospace" }}
      >
        Applicable Law:
      </StyledTitle>
      <StyledSubtitle
        sx={{ mb: 3, fontFamily: "'Source Code Pro', monospace" }}
      >
        This Legal Notice is governed by applicable Norwegian and European
        legislation regarding data protection and e-commerce.
      </StyledSubtitle>

      <ul>
        <ListItem
          icon={<MdBusiness />}
          text="Site owned and maintained by Amanda Flores Feijoo."
        />
        <ListItem
          icon={<MdPublic />}
          text="Domain managed via Google Workspace. Hosting provided by Netlify, Render, and Squarespace."
        />
        <ListItem
          icon={<MdLock />}
          text="This site does not collect personal data beyond the contact form submission."
        />
        <ListItem
          icon={<MdGavel />}
          text="All content is subject to Spanish, Norwegian and EU laws on intellectual property and data protection."
        />
        <ListItem
          icon={<MdLanguage />}
          text="For inquiries regarding copyright or legal concerns, contact amandaflores@webcode-art.com."
        />
      </ul>
    </AnimatedBox>
  );
};

export default LegalNotice;
