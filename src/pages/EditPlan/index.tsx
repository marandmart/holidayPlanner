import { useNavigate, useParams } from "react-router-dom";
import { TravelContext } from "../../context";
import { useContext, useEffect, useMemo, useState } from "react";
import Form from "../../components/Form";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import DateInput from "../../components/DateInput";
import { StyledMain, WarningDiv } from "../CreatePlan/styles";
import { formatDateForDatePicker } from "../../utils/functions";
import useTravelForm from "../../hooks/useTravelForm";

const EditPlan = () => {
  const { planId } = useParams();
  const goTo = useNavigate();

  if (!planId) goTo("/");

  const [currentId, setCurrentId] = useState<string>();
  const [titleInput, setTitleInput] = useState<string>();
  const [descriptionInput, setDescriptionInput] = useState<string>();
  const [locationsInput, setLocationsInput] = useState<string>();
  const [participantsInput, setParticipantsInput] = useState<string>();

  const { travelPlans: plans, udpateTravelPlan } = useContext(TravelContext);

  const { errors, handleSubmit } = useTravelForm();

  const {
    id,
    title,
    description,
    startDate,
    endDate,
    locations,
    participants,
  } =
    useMemo(() => plans.find((plan) => plan.id === planId), [planId, plans]) ||
    {};

  if (
    id &&
    title &&
    description &&
    startDate &&
    endDate &&
    locations &&
    participants
  ) {
    useEffect(() => {
      setCurrentId(id);
      setTitleInput(title);
      setDescriptionInput(description);
      setLocationsInput(locations);
      setParticipantsInput(participants);
    }, []);

    return (
      <StyledMain>
        <Button onClick={() => goTo("/")} variation="secondary">
          Go to Home
        </Button>
        {errors.length > 0 && <WarningDiv>{errors.join(", ")}</WarningDiv>}
        <Form onSubmit={(e) => handleSubmit(e, udpateTravelPlan, currentId)}>
          <InputField
            value={titleInput}
            onChange={(newText) => setTitleInput(newText)}
            label="title"
            required
          />
          <InputField
            value={descriptionInput}
            onChange={(newText) => setDescriptionInput(newText)}
            label="description"
            required
          />

          <InputField
            value={locationsInput}
            onChange={(newText) => setLocationsInput(newText)}
            label="locations"
            required
          />
          <InputField
            value={participantsInput}
            onChange={(newText) => setParticipantsInput(newText)}
            label="participants"
          />
          <DateInput
            type="ranged"
            previousStartDate={formatDateForDatePicker(startDate)}
            previousEndDate={formatDateForDatePicker(endDate)}
          />
          <Button type="submit">Finish Editing</Button>
        </Form>
      </StyledMain>
    );
  } else {
    return (
      <>
        <h1>There was a problem loading the data</h1>
        <Button onClick={() => goTo("/")} variation="secondary">
          Go back Home
        </Button>
      </>
    );
  }
};

export default EditPlan;
