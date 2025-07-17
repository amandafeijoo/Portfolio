import { keyframes } from "@mui/system";
import styled from "styled-components";


export const borderAnimation = keyframes`
  0% { border-color: #7799ff; }
  25% { border-color: #ff7799; }
  50% { border-color: #99ff77; }
  75% { border-color: #ff99ff; }
  100% { border-color: #7799ff; }
`;

export const ProjectVideo = styled.video`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  border: 3px solid #99aaff;
  object-fit: cover;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto 20px;
  }

  @media (max-width: 480px) {
    width: 95%;
    margin: 0 auto 15px;
    margin-top: 10px;
  }
`;

export const cardStyles = {
  maxWidth: 450,
  height: "100%",
  margin: {
    xs: "20px auto",
    sm: "40px auto",
    md: "60px auto",
  },
  fontFamily: "'Source Code Pro', monospace",
  backgroundColor: "rgba(30, 58, 138, 0.12)",
  border: "2px solid rgba(200, 162, 200, 0.5)",
  borderRadius: "16px",
  boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.5)",
  transition: "all 0.3s ease",
  overflow: "hidden",
  "&:hover": {
    transform: "scale(1.05)",
  },
  "@media (max-width: 480px)": {
    "&:hover": {
      transform: "none",
    },
  },
};

export const buttonStyles = {
  fontFamily: "'Source Code Pro', monospace",
  padding: "12px 22px",
  backgroundColor: "rgba(200, 162, 200, 0.5)",
  borderRadius: "12px",
  color: "#d8bfd8",
  display: "flex",
  textDecoration: "none",
  boxSizing: "border-box",
  transition: "background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(200, 162, 200, 0.3)",
  },
  "& svg": {
    color: "white",
    marginRight: "8px",
  },
};

export const titleStyles = {
  fontFamily: "'Source Code Pro', monospace",
  textAlign: "center",
  color: "#6A0DAD",
  marginTop: "-40px",
  borderBottom: "2px solid",
  animation: `${borderAnimation} 5s infinite`,
};

export const subtitleStyles = {
  fontFamily: "'Source Code Pro', monospace",
  color: "#333",
  marginBottom: "10px",
  whiteSpace: "pre-line",
};

export const commentStyles = {
  color: "#333",
  backgroundColor: "rgba(30, 58, 138, 0.12)",
  marginBottom: "10px",
  fontStyle: "italic",
  whiteSpace: "pre-line",
};

export const descriptionStyles = {
  fontFamily: "'Source Code Pro', monospace",
  textAlign: "justify",
  border: "1px solid rgba(200, 162, 200, 0.5)",
  borderRadius: "10px",
  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
  padding: "10px",
};

export const techStackStyles = {
  marginTop: "20px",
  fontFamily: "'Source Code Pro', monospace",
  fontWeight: "bold",
  whiteSpace: "pre-line",
};

