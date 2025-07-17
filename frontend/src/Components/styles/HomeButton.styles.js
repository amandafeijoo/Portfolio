import styled from "styled-components";

const StyledCtaButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 22px;
  background-color: rgba(200, 162, 200, 0.3);
  color: rgb(235, 210, 235);
  font-family: "Source Code Pro", monospace;
  font-size: 1.1rem;
  border-radius: 12px;
  border: 2px solid rgba(200, 162, 200, 0.7);
  text-decoration: none;
  box-sizing: border-box;
  transition: background-color 0.3s ease, box-shadow 0.3s ease,
    transform 0.3s ease;
  margin-top: 1.5rem;
  margin-bottom: 4rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(200, 162, 200, 0.5);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 18px;
  }
`;

export default StyledCtaButton;
