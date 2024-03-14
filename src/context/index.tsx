import { ReactElement, createContext } from "react";
import { ITravelPlan } from "../interfaces/ITravelPlan";
import { useTravelPlans } from "./hooks/useTravelPlans";

interface TravelContextProps {
  travelPlans: ITravelPlan[];
  addNewTravelPlan: Function;
  removeTravelPlan: Function;
  udpateTravelPlan: Function;
  orderTravelPlans: Function;
}

export const TravelContext = createContext<TravelContextProps>({
  travelPlans: [],
  addNewTravelPlan: () => {},
  removeTravelPlan: () => {},
  udpateTravelPlan: () => {},
  orderTravelPlans: () => {},
});

interface TravelProviderProps {
  children: ReactElement;
}

const TravelPlansProvider = ({ children }: TravelProviderProps) => {
  const {
    travelPlans,
    addNewTravelPlan,
    removeTravelPlan,
    udpateTravelPlan,
    orderTravelPlans,
  } = useTravelPlans();

  return (
    <TravelContext.Provider
      value={{
        travelPlans,
        addNewTravelPlan,
        removeTravelPlan,
        udpateTravelPlan,
        orderTravelPlans,
      }}
    >
      {children}
    </TravelContext.Provider>
  );
};

export default TravelPlansProvider;
