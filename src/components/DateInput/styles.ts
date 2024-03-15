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
    max-width: 120px;
  }
  .react-datepicker-wrapper .react-datepicker__input-container {
    display: flex;
    align-items: center;
  }
  .react-datepicker__header .react-datepicker__current-month {
    display: none;
  }
  .react-datepicker__header__dropdown {
    font-weight: bold;
    font-size: large;
  }
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__year-read-view--down-arrow {
    margin-top: 5px;
  }
  .react-datepicker__month-dropdown {
    top: 15px;
  }
`;

export const StyledSpan = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: bold;
`;
