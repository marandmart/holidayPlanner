import { styled } from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1060px;
  margin: 32px auto;
  button:first-child {
    align-self: flex-start;
    margin-bottom: 16px;
  }
  button {
    max-width: fit-content;
    align-self: center;
    margin-top: 16px;
  }
`;
