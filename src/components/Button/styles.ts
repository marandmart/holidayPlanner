import styled from "styled-components";

interface StyledButtonProps {
  $variation: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) =>
    props.$variation === "primary"
      ? "#ff5300"
      : props.$variation === "secondary"
        ? "#0ab6eb"
        : props.$variation === "terciary"
          ? "#67b91a"
          : undefined};
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  padding: 12px 24px;
  border-radius: 4px;
  border: none;
  &:hover {
    background-color: ${(props) =>
      props.$variation === "primary"
        ? "#c44d11"
        : props.$variation === "secondary"
          ? "#0b97c2"
          : props.$variation === "terciary"
            ? "#549616"
            : undefined};
    cursor: pointer;
  }
  &:active {
    background-color: ${(props) =>
      props.$variation === "primary"
        ? "#642100"
        : props.$variation === "secondary"
          ? "#096480"
          : props.$variation === "terciary"
            ? "#30580b"
            : undefined};
  }
`;
