import { styled } from "styled-components";

export const CardContainer = styled.article`
  overflow: visible;
  position: relative;
`;

export const CardContentContainer = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 400px;
  width: 100%;
  box-sizing: border-box;
  &:hover {
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
  }
  overflow-y: scroll;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  color: #333;
`;

export const Description = styled.p`
  margin-bottom: 15px;
  color: #666;
`;

export const Info = styled.p`
  margin-bottom: 8px;
  color: #777;

  &:last-child {
    margin-bottom: 0;
  }
`;

interface StyledCircleButtonProps {
  $edit?: boolean;
  $delete?: boolean;
}

export const StyledCircleButton = styled.button<StyledCircleButtonProps>`
  position: absolute;
  top: -10px;
  right: ${(props) => (props.$delete ? "-10px" : undefined)};
  left: ${(props) => (props.$edit ? "-10px" : undefined)};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$delete ? "#f00" : props.$edit ? "#add8e6" : "#90ee90"};
  color: #fff;
  font-weight: bold;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 4px;
  z-index: 1;
`;
