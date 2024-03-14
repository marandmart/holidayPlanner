import { useState } from "react";
import { validateForm } from "../utils/functions";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const useTravelForm = () => {
  const [errors, setErrors] = useState<string[]>([]);

  const goTo = useNavigate();

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    contextFn: Function,
    id?: String
  ) => {
    e.preventDefault();
    setErrors([]);

    const { data, submitErrors } = validateForm(e);

    const { title, description, startDate, endDate, locations, participants } =
      data;

    if (submitErrors.length > 0) {
      setErrors(submitErrors);
      return;
    } else {
      const [dayS, monthS, yearS] = startDate!.toString().split("/");
      const formattedStartDate = `${yearS}-${monthS}-${dayS}`;

      const [dayE, monthE, yearE] = endDate!.toString().split("/");
      const formattedEndDate = `${yearE}-${monthE}-${dayE}`;

      contextFn({
        id: id || uuidv4(),
        title,
        description,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
        locations,
        participants,
      });
      goTo("/");
    }
  };

  return {
    errors,
    handleSubmit,
  };
};

export default useTravelForm;
