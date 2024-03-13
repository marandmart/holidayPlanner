import PlannerRoutes from "./routes";
import TravelPlansProvider from "./context";

function App() {
  return (
    <TravelPlansProvider>
      <PlannerRoutes />
    </TravelPlansProvider>
  );
}

export default App;
