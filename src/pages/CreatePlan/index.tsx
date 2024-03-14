import { useContext } from "react";
import Button from "../../components/Button";
import DateInput from "../../components/DateInput";
import Form from "../../components/Form";
import InputField from "../../components/InputField";
import { TravelContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { StyledMain, WarningDiv } from "./styles";
import useTravelForm from "../../hooks/useTravelForm";

const CreatePlan = () => {
  const { addNewTravelPlan } = useContext(TravelContext);

  const { errors, handleSubmit } = useTravelForm();
  const goTo = useNavigate();

  return (
    <StyledMain>
      <Button onClick={() => goTo("/")} variation="secondary">
        Go home
      </Button>

      {errors.length > 0 && <WarningDiv>{errors.join(", ")}</WarningDiv>}
      <Form onSubmit={(e) => handleSubmit(e, addNewTravelPlan)}>
        <InputField label="title" placeholder="Give a title" required />
        <InputField
          label="description"
          placeholder="Write a description"
          type="textarea"
          required
        />
        <InputField label="locations" placeholder="Ex: Paris, Milan" required />
        <InputField label="participants" placeholder="Ex: John, Paul" />
        <DateInput type="ranged" />
        <Button type="submit">Adicionar viagem</Button>
      </Form>
    </StyledMain>
  );
};

export default CreatePlan;
