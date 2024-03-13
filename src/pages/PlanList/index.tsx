import { useContext, useState } from "react";
import { TravelContext } from "../../context";
import PlanCard from "../../components/PlanCard";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from "../../components/PDFDocument";
import { StyledButtonContainer, StyledMain, StyledPlanList } from "./styles";

const PlanList = () => {
  const { travelPlans, removeTravelPlan } = useContext(TravelContext);
  const [isEditing, setIsEditing] = useState(false);
  const goTo = useNavigate();

  const removePlanCard = (id: string) => {
    removeTravelPlan(id);
  };

  const editPlan = (id: string) => {
    goTo(`/edit/${id}`);
  };

  return (
    <StyledMain>
      <h1>Holiday Plans</h1>
      <StyledButtonContainer $show={travelPlans.length > 0}>
        {travelPlans.length > 0 ? (
          <>
            <Button onClick={() => setIsEditing((curr) => !curr)}>
              {isEditing ? "Stop Editing" : "Edit List"}
            </Button>
            <PDFDownloadLink
              document={<PDFDocument data={travelPlans} />}
              fileName="example.pdf"
            >
              {({ loading }) =>
                loading ? "Loading document..." : "Download PDF"
              }
            </PDFDownloadLink>
          </>
        ) : undefined}
        <Button variation="terciary" onClick={() => goTo("/newPlan")}>
          Create New Plan
        </Button>
      </StyledButtonContainer>
      <StyledPlanList>
        {travelPlans.map((plan) => (
          <PlanCard
            key={plan.id}
            editingMode={isEditing}
            handleDeleteButton={removePlanCard}
            handleEditButton={editPlan}
            {...plan}
          />
        ))}
      </StyledPlanList>
    </StyledMain>
  );
};

export default PlanList;
