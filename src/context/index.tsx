import { ReactElement, createContext, useState } from "react";
import initialData from "./initialData.json";
import { ITravelPlan } from "../interfaces/ITravelPlan";

interface TravelContextProps {
  travelPlans: ITravelPlan[];
  addNewPlans: Function;
  removeTravelPlan: Function;
  udpateTravelPlan: Function;
}

export const TravelContext = createContext<TravelContextProps>({
  travelPlans: [],
  addNewPlans: () => {},
  removeTravelPlan: () => {},
  udpateTravelPlan: () => {},
});

interface TravelProviderProps {
  children: ReactElement;
}

const TravelPlansProvider = ({ children }: TravelProviderProps) => {
  const [travelPlans, setTravelPlans] = useState<ITravelPlan[]>(initialData);

  const addNewTravelPlan = (newPlan: ITravelPlan) => {
    setTravelPlans((prev) => [...prev, newPlan]);
  };

  const removeTravelPlan = (_id: string) => {
    setTravelPlans((prev) => prev.filter(({ id }) => id !== _id));
  };

  const udpateTravelPlan = (updatedPlan: ITravelPlan) => {
    setTravelPlans((prev) =>
      prev.map((plan) => (plan.id !== updatedPlan.id ? plan : updatedPlan))
    );
  };

  return (
    <TravelContext.Provider
      value={{
        travelPlans: travelPlans,
        addNewPlans: addNewTravelPlan,
        removeTravelPlan: removeTravelPlan,
        udpateTravelPlan: udpateTravelPlan,
      }}
    >
      {children}
    </TravelContext.Provider>
  );
};

export default TravelPlansProvider;
