import { Document, Page, Text, View } from "@react-pdf/renderer";
import { ITravelPlan } from "../../interfaces/ITravelPlan";
import { pageStyles } from "./styles";

interface PDFDocumentProps {
  data: ITravelPlan[];
}

const PDFDocument = ({ data }: PDFDocumentProps) => {
  const MAX_ITEMS_PER_PAGE = 3; // Maximum number of plans per page
  const pages = [];

  for (let i = 0; i < data.length; i += MAX_ITEMS_PER_PAGE) {
    const pageData = data.slice(i, i + MAX_ITEMS_PER_PAGE);
    pages.push(pageData);
  }

  return (
    <Document>
      {pages.map((page, index) => (
        <Page key={index} size="A4" style={pageStyles.page}>
          {page.map((plan) => (
            <View key={plan.id} style={pageStyles.section}>
              <Text style={pageStyles.title}>{plan.title}</Text>
              <Text style={pageStyles.description}>{plan.description}</Text>
              <Text style={pageStyles.label}>Start Date:</Text>
              <Text style={pageStyles.text}>{plan.startDate}</Text>
              <Text style={pageStyles.label}>End Date:</Text>
              <Text style={pageStyles.text}>{plan.endDate}</Text>
              <Text style={pageStyles.label}>Locations:</Text>
              <Text style={pageStyles.text}>{plan.locations}</Text>
              <Text style={pageStyles.label}>Participants:</Text>
              <Text style={pageStyles.text}>
                {plan.participants.join(", ")}
              </Text>
            </View>
          ))}
        </Page>
      ))}
    </Document>
  );
};

export default PDFDocument;
