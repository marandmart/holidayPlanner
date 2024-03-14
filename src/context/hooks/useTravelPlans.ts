import { useState } from "react";
import initialData from "../initialData.json";
import { ITravelPlan } from "../../interfaces/ITravelPlan";

enum SortOptions {
  title = "title",
  description = "description",
  startDate = "startDate",
  endDate = "endDate",
  locations = "locations",
}

export const useTravelPlans = () => {
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

  const orderTravelPlans = (property: SortOptions) => {
    setTravelPlans((prev) =>
      prev.sort((a, b) => {
        const propA = a[property] as string;
        const propB = b[property] as string;
        if (propA < propB) {
          return -1;
        }
        if (propA > propB) {
          return 1;
        }
        return 0;
      })
    );
  };

  return {
    travelPlans,
    addNewTravelPlan,
    removeTravelPlan,
    udpateTravelPlan,
    orderTravelPlans,
  };
};
