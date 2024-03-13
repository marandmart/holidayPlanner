import { StyledInput, StyledLabel } from "./styles";

type ChangeEventHandler = (value: string) => void;

interface InputFieldProps {
  value?: string;
  onChange?: ChangeEventHandler;
  placeholder?: string;
  label?: string;
  type?: "text" | "date";
  required?: boolean;
}

const InputField = ({
  value,
  onChange,
  placeholder = "Write some text",
  label,
  type = "text",
  required = false,
}: InputFieldProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target?.value;

    if (onChange) {
      onChange(value);
    }
  };

  const pattern = type === "date" ? "dd-mm-yyyy" : undefined;

  return (
    <StyledLabel>
      {label}
      <StyledInput
        name={label}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={handleChange}
        pattern={pattern}
        required={required}
      />
    </StyledLabel>
  );
};

export default InputField;
