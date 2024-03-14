import { useNavigate, useParams } from "react-router-dom";
import { TravelContext } from "../../context";
import { useContext, useEffect, useState } from "react";
import Form from "../../components/Form";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import DateInput from "../../components/DateInput";
import { StyledMain, WarningDiv } from "../CreatePlan/styles";
import { formatDateForDatePicker, validateForm } from "../../utils/functions";

const EditPlan = () => {
  const { planId } = useParams();
  const goTo = useNavigate();

  const [currentId, setCurrentId] = useState<string>();
  const [titleInput, setTitleInput] = useState<string>();
  const [descriptionInput, setDescriptionInput] = useState<string>();
  const [locationsInput, setLocationsInput] = useState<string>();
  const [participantsInput, setParticipantsInput] = useState<string>();
  const [errors, setErrors] = useState<string[]>([]);

  if (!planId) goTo("/");

  const { travelPlans: plans, udpateTravelPlan } = useContext(TravelContext);

  const onEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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

      udpateTravelPlan({
        id: currentId,
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

  const {
    id,
    title,
    description,
    startDate,
    endDate,
    locations,
    participants,
  } = plans.find((plan) => plan.id === planId) || {};

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
        <Form onSubmit={onEditSubmit}>
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
