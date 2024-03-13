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
  display: flex;
  max-width: 1060px;
  margin: 32px auto;
  gap: 40px calc(10% / 2);
  flex-wrap: wrap;
  width: 100%;
  article {
    width: 30%;
  }

  @media (max-width: 768px) {
    gap: 20px 10%;
    article {
      width: 45%;
    }
  }

  @media (max-width: 576px) {
    gap: 20px 0;
    article {
      width: 100%;
    }
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
