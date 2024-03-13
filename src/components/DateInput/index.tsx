import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { StyledDateContainer, StyledSpan } from "./styles";

interface DateInputProps {
  type: "single" | "ranged";
  name?: string;
  label?: string;
  previousStartDate?: string;
  previousEndDate?: string;
}

const DateInput = ({
  type,
  name = "selected",
  label,
  previousStartDate,
  previousEndDate,
}: DateInputProps) => {
  const [startDate, setStartDate] = useState<Date | null>(
    previousStartDate ? new Date(previousStartDate) : new Date()
  );
  const [endDate, setEndDate] = useState<Date | null>(
    previousEndDate ? new Date(previousEndDate) : null
  );
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <StyledDateContainer>
      {type === "ranged" && (
        <>
          <StyledSpan>Data de ida: </StyledSpan>
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={startDate}
            startDate={startDate}
            selectsStart
            name="startDate"
            endDate={endDate}
            onChange={(date) => {
              if (date) setStartDate(date);
            }}
          />
          <StyledSpan>Data de volta: </StyledSpan>
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={endDate}
            startDate={startDate}
            name="endDate"
            selectsEnd
            endDate={endDate}
            minDate={startDate}
            onChange={(date) => {
              if (date) setEndDate(date);
            }}
          />
        </>
      )}
      {type === "single" && (
        <>
          <StyledSpan>{label}</StyledSpan>
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={selectedDate}
            name={name}
            onChange={(date) => {
              if (date) setSelectedDate(date);
            }}
          />
        </>
      )}
    </StyledDateContainer>
  );
};

export default DateInput;
