import styled from "styled-components";

interface StyledButtonProps {
  $variation: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) =>
    props.$variation === "primary"
      ? "#2563EB"
      : props.$variation === "secondary"
        ? "#0ab6eb"
        : null};
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding: 12px 24px;
  border-radius: 4px;
  border: none;
  &:hover {
    background-color: ${(props) =>
      props.$variation === "primary"
        ? "#1E40AF"
        : props.$variation === "secondary"
          ? "#0b97c2"
          : null};
    cursor: pointer;
  }
  &:active {
    background-color: ${(props) =>
      props.$variation === "primary"
        ? "#5699F0"
        : props.$variation === "secondary"
          ? "#096480"
          : null};
  }
`;
