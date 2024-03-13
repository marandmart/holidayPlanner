import { FormEventHandler, ReactElement } from "react";
import styled from "styled-components";

interface FormProps {
  onSubmit?: FormEventHandler<HTMLFormElement>;
  children: ReactElement[];
}

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Form = ({ onSubmit, children }: FormProps) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

export default Form;
