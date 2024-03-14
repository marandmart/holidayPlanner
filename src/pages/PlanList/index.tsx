import { useContext, useState } from "react";
import { TravelContext } from "../../context";
import PlanCard from "../../components/PlanCard";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from "../../components/PDFDocument";
import { StyledButtonContainer, StyledMain, StyledPlanList } from "./styles";
import ReactDropdown, { Option } from "react-dropdown";
import "react-dropdown/style.css";

const PlanList = () => {
  const { travelPlans, removeTravelPlan, orderTravelPlans } =
    useContext(TravelContext);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const goTo = useNavigate();

  const handleDropdownChange = (selectValue: Option) => {
    if (selectValue) {
      setSelectedOption(selectValue.value);
      orderTravelPlans(selectValue.value);
    }
  };

  const removePlanCard = (id: string) => {
    removeTravelPlan(id);
  };

  const editPlan = (id: string) => {
    goTo(`/edit/${id}`);
  };

  const options = [
    { value: "title", label: "Title" },
    { value: "description", label: "Description" },
    { value: "startDate", label: "Start Date" },
    { value: "endDate", label: "End Date" },
    { value: "locations", label: "Locations" },
  ];

  return (
    <StyledMain>
      <h1>Holiday Plans</h1>
      <StyledButtonContainer $show={travelPlans.length > 0}>
        {travelPlans.length > 0 ? (
          <>
            <Button
              variation="secondary"
              onClick={() => setIsEditing((curr) => !curr)}
            >
              {isEditing ? "Stop Editing" : "Edit List"}
            </Button>
            <PDFDownloadLink
              document={<PDFDocument data={travelPlans} />}
              fileName="travel_plans.pdf"
            >
              {({ loading }) =>
                loading ? "Loading document..." : "Download PDF"
              }
            </PDFDownloadLink>
          </>
        ) : undefined}
        <Button onClick={() => goTo("/newPlan")}>+</Button>
      </StyledButtonContainer>
      <ReactDropdown
        options={options}
        onChange={handleDropdownChange}
        value={selectedOption}
        placeholder="Select an ordering option"
      />
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
