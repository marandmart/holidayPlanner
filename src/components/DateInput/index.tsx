import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { StyledDateContainer, StyledSpan } from "./styles";

interface DateInputProps {
  type: "single" | "ranged";
  name?: string;
  label?: string;
  previousStartDate?: Date;
  previousEndDate?: Date;
}

const DateInput = ({
  type,
  name = "selected",
  label,
  previousStartDate,
  previousEndDate,
}: DateInputProps) => {
  const [startDate, setStartDate] = useState<Date | null>(
    previousStartDate ? previousStartDate : new Date()
  );
  const [endDate, setEndDate] = useState<Date | null>(
    previousEndDate ? previousEndDate : null
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
            todayButton="TODAY"
            showMonthDropdown
            showYearDropdown
            showIcon
            scrollableYearDropdown
            minDate={new Date()}
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
            showIcon
            showMonthDropdown
            showYearDropdown
            scrollableYearDropdown
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
            showMonthDropdown
            showYearDropdown
            scrollableYearDropdown
            showIcon
            onChange={(date) => {
              if (date) setSelectedDate(date);
            }}
            minDate={new Date()}
          />
        </>
      )}
    </StyledDateContainer>
  );
};

export default DateInput;
