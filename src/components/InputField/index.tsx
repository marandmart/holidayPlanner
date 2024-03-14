import { StyledInput, StyledLabel, StyledTextArea } from "./styles";

type ChangeEventHandler = (value: string) => void;

interface InputFieldProps {
  value?: string;
  onChange?: ChangeEventHandler;
  placeholder?: string;
  label?: string;
  type?: "text" | "textarea";
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
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = e.target?.value;

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <>
      {type === "textarea" ? (
        <StyledLabel>
          {label}
          <StyledTextArea
            name={label}
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
            required={required}
          />
        </StyledLabel>
      ) : (
        <StyledLabel>
          {label}
          <StyledInput
            name={label}
            placeholder={placeholder}
            value={value}
            type={type}
            onChange={handleChange}
            required={required}
          />
        </StyledLabel>
      )}
    </>
  );
};

export default InputField;
