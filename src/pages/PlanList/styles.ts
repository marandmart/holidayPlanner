import { css, styled } from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1060px;
  margin: auto;
  padding: 0 40px;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    h1 {
      text-align: center;
    }
  }
`;

export const StyledPlanList = styled.section`
  display: grid;
  max-width: 1060px;
  margin: 32px auto;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

interface StyledButtonContainerProps {
  $show: boolean;
}

export const StyledButtonContainer = styled.section<StyledButtonContainerProps>`
  ${(props) =>
    props.$show
      ? css`
          display: flex;
          justify-content: space-between;
          align-items: center;
        `
      : css`
          display: flex;
          justify-content: end;
        `}

  @media (max-width: 576px) {
    ${(props) =>
      props.$show
        ? css`
            display: grid;
            gap: 20px;
            grid-template-areas:
              "editBtn newPlanBtn"
              "pdflink pdflink";
            grid-template-columns: 1fr 1fr;
            a {
              grid-area: pdflink;
              text-align: center;
            }
            & > button:first-child {
              grid-area: editBtn;
            }
            & > button:last-child {
              grid-area: newPlanBtn;
            }
          `
        : css`
            display: flex;
            justify-content: center;
          `}
  }
`;
