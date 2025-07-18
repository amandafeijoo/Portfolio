import styled from "styled-components";

// Contenedor de los botones
export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  gap: 20px;
`;

// Botón base reutilizable
const BaseButton = styled.a`
  display: inline-block;
  padding: 12px 22px;
  font-size: 1em;
  color: #d8bfd8;
  background-color: rgba(200, 162, 200, 0.5);
  border: none;
  border-radius: 12px;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  box-sizing: border-box;

  &:hover {
    background-color: rgba(200, 162, 200, 0.3);
    color: #d8bfd8;
    margin-right: 5px;
  }

  & svg {
    color: white;
    margin-right: 8px;
  }
`;

// Botones derivados del BaseButton
export const DownloadButton = styled(BaseButton)``;
export const ContactButton = styled(BaseButton)``;
