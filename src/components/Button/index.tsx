import { StyledButton } from "./styles";

interface ButtonProps {
  children?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variation?: "primary" | "secondary";
}

const Button = ({
  children = "Button",
  type = "button",
  onClick,
  variation = "primary",
}: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} type={type} $variation={variation}>
      {children}
    </StyledButton>
  );
};

export default Button;
