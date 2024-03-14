import { ITravelPlan } from "../interfaces/ITravelPlan";

export const formatDateForViewing = (date: string) => {
  const newDate = new Date(date);
  const day = newDate.getDate() + 1;
  const month = newDate.getMonth() + 1;
  return `${day < 10 ? `0${day}` : day}/${month < 10 ? `0${month}` : month}/${newDate.getFullYear()}`;
};

export const formatDateForDatePicker = (value: string) => {
  const parts = value.split("-");
  const year = parseInt(parts[0]);
  const month = parseInt(parts[1]) - 1;
  const day = parseInt(parts[2]);
  return new Date(year, month, day);
};

const checkErrors = ({
  title,
  description,
  startDate,
  endDate,
  locations,
}: Partial<ITravelPlan>): string[] => {
  let errors: string[] = [];

  if (!title) errors = [...errors, "No title written"];
  if (!description) errors = [...errors, "No description written"];
  if (!startDate) errors = [...errors, "No start date written"];
  if (!endDate) errors = [...errors, "No end date written"];
  if (!locations) errors = [...errors, "No locations written"];

  return errors;
};

export const validateForm = (e: React.FormEvent<HTMLFormElement>) => {
  const formData = new FormData(e.currentTarget);
  const title = formData.get("title")?.toString();
  const description = formData.get("description")?.toString();
  const startDate = formData.get("startDate")?.toString();
  const endDate = formData.get("endDate")?.toString();
  const locations = formData.get("locations")?.toString();
  const participants = formData.get("participants")?.toString();

  const data = {
    title,
    description,
    startDate,
    endDate,
    locations,
    participants,
  };

  const submitErrors = checkErrors(data);

  return { data, submitErrors };
};
