import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlanList from "../pages/PlanList";
import CreatePlan from "../pages/CreatePlan";
import Page404 from "../pages/Page404";
import EditPlan from "../pages/EditPlan";

const PlannerRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlanList />} />
        <Route path="newPlan" element={<CreatePlan />} />
        <Route path="edit/:planId" element={<EditPlan />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PlannerRoutes;
