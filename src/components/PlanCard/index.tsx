import { ITravelPlan } from "../../interfaces/ITravelPlan";
import { formatDateForViewing } from "../../utils/functions";
import Pencil from "./assets/pencil";
import {
  CardContainer,
  CardContentContainer,
  Description,
  Info,
  StyledCircleButton,
  Title,
} from "./styles";

interface PlanCardProps extends ITravelPlan {
  editingMode?: boolean;
  handleDeleteButton?: (id: string) => void;
  handleEditButton?: (id: string) => void;
}

const PlanCard = ({
  id,
  title,
  description,
  startDate,
  endDate,
  locations,
  participants,
  editingMode,
  handleDeleteButton,
  handleEditButton,
}: PlanCardProps) => {
  const handleDelete = () => {
    if (handleDeleteButton) {
      handleDeleteButton(id);
    }
  };

  const handleEdit = () => {
    if (handleEditButton) {
      handleEditButton(id);
    }
  };

  return (
    <CardContainer>
      {editingMode && (
        <>
          <StyledCircleButton onClick={handleEdit} $edit>
            <Pencil />
          </StyledCircleButton>
          <StyledCircleButton onClick={handleDelete} $delete>
            x
          </StyledCircleButton>
        </>
      )}
      <CardContentContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Info>Start date: {formatDateForViewing(startDate)}</Info>
        <Info>End date: {formatDateForViewing(endDate)}</Info>
        <Info>Locations: {locations}</Info>
        {!!participants && <Info>Participants: {participants}</Info>}
      </CardContentContainer>
    </CardContainer>
  );
};

export default PlanCard;
