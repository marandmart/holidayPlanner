import { styled } from "styled-components";

export const StyledDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 8px 0;
  align-items: center;
  input {
    text-align: center;
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid black;
    max-width: 100px;
  }
`;

export const StyledSpan = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: bold;
`;
