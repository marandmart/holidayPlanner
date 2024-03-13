import { ITravelPlan } from "../../interfaces/ITravelPlan";
import { formatDate } from "../../utils/functions";
import { Description, Info, Title } from "./styles";

const PrintCard = ({
  title,
  description,
  startDate,
  endDate,
  locations,
  participants,
}: ITravelPlan) => {
  return (
    <>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Info>Start date: {formatDate(startDate)}</Info>
      <Info>End date: {formatDate(endDate)}</Info>
      <Info>Locations: {locations}</Info>
      <Info>Participants: {participants}</Info>
    </>
  );
};

export default PrintCard;
