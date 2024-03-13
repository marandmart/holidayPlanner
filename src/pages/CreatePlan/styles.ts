import { styled } from "styled-components";

export const WarningDiv = styled.div`
  background-color: #e63737;
  color: #fdfeff;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #e63737;
  margin: 16px auto;
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1060px;
  margin: auto;
  padding: 0 30px;
  & > button:first-child {
    align-self: flex-start;
    margin: 32px 0 16px;
  }
  button {
    max-width: fit-content;
    align-self: center;
    margin-top: 16px;
  }
`;
