import styled, { css } from "styled-components";
import { Typography } from "@mui/material";

export const AnimatedTypography = styled(Typography)`
  ${({ scale }) => css`
    transform: scale(${scale});
    transition: transform 0.1s ease-in-out;
  `}
`;
