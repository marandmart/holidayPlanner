import { StyleSheet } from "@react-pdf/renderer";

export const pageStyles = StyleSheet.create({
  page: {
    flexDirection: "column",
    background: "#FFFFFF",
    padding: 20,
  },
  section: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    backgroundColor: "#F9F9F9",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333333",
  },
  description: {
    fontSize: 12,
    marginBottom: 8,
    color: "#666666",
  },
  text: {
    fontSize: 12,
    color: "#333333",
  },
  label: {
    fontWeight: "bold",
    color: "#555555",
  },
});
