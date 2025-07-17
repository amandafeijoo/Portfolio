import styled from "styled-components";
import { Box, Typography } from "@mui/material";

export const FooterWrapper = styled(Box)`
  border-top: 2px solid rgba(200, 162, 200, 0.5);
  padding: 16px;
  margin-top: 40px;
  font-family: "Source Code Pro", monospace;

  @media (max-width: 768px) {
    padding: 8px;
    margin-top: 24px;
  }
`;

export const FooterText = styled(Typography)`
  color: #ffffff;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const FooterLink = styled(Typography)`
  font-size: 10px;
  color: #fbb6ce;
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.3s ease;

  &:hover {
    color: #f783ac;
  }

  @media (max-width: 768px) {
    font-size: 8px;
  }
`;

export const Dot = styled(Typography)`
  font-size: 10px;
  color: #fbb6ce;

  @media (max-width: 768px) {
    font-size: 8px;
  }
`;
