import { useContext } from "react";
import { useState } from "react";
import Button from "../../components/Button";
import DateInput from "../../components/DateInput";
import Form from "../../components/Form";
import InputField from "../../components/InputField";
import { TravelContext } from "../../context";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { StyledMain, WarningDiv } from "./styles";
import { validateForm } from "../../utils/functions";

const CreatePlan = () => {
  const { addNewPlans } = useContext(TravelContext);

  const [errors, setErrors] = useState<string[]>([]);

  const goTo = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      const formattedStartDate = `${yearS}-${monthS}-${Number(dayS) + 1}`;

      const [dayE, monthE, yearE] = endDate!.toString().split("/");
      const formattedEndDate = `${yearE}-${monthE}-${Number(dayE) + 1}`;

      addNewPlans({
        id: uuidv4(),
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

  return (
    <StyledMain>
      <Button onClick={() => goTo("/")} variation="secondary">
        Go home
      </Button>

      {errors.length > 0 && <WarningDiv>{errors.join(", ")}</WarningDiv>}
      <Form onSubmit={handleSubmit}>
        <InputField label="title" placeholder="Give a title" required />
        <InputField
          label="description"
          placeholder="Write a description"
          required
        />
        <InputField label="locations" placeholder="Ex: Paris, Milan" required />
        <InputField
          label="participants"
          placeholder="Ex: John, Paul"
          required
        />
        <DateInput type="ranged" />
        <Button type="submit">Adicionar viagem</Button>
      </Form>
    </StyledMain>
  );
};

export default CreatePlan;
