import * as React from "react";
import {
  NumberField,
  RichTextField,
  Show,
  SimpleShowLayout,
  DateField,
  TextField,
} from "react-admin";

const CustomerTitle = ({ record }: any) => {
  return <span>{record ? `${record.customerName}` : ""}</span>;
};

export const QuestionsShow = (props: any) => (
  <Show title={<CustomerTitle />} {...props}>
    <SimpleShowLayout>
      <h1>Customer</h1>
      <TextField
        style={{ width: 500 }}
        source="customerName"
        label="Customer Name"
      />

      <TextField style={{ width: 500 }} source="id" label="Questionnaire ID" />
      <TextField
        style={{ width: 500 }}
        source="customerID"
        label="Customer ID"
      />
      <RichTextField
        source="goalDefinition"
        label="Precise And Specific Goal"
      />
      <RichTextField source="requirements" label="Requirements" />
      <RichTextField source="customerProblem" label="Problems" />
      <RichTextField source="targetGroup" label="Target Group" />
      <RichTextField source="timeFrame" label="Time Frame" />
      <DateField source="deadline" label="Final Deadline" />
      <NumberField source="budget" label="Budget" />
      <RichTextField
        source="competitiveAdvantage"
        label="Competitive Advantages"
      />
      <RichTextField
        source="portfolio"
        label="Portfolio Of Products And Services"
      />
      <h2>SWOT Analysis</h2>
      <RichTextField source="strengths" label="Strengths" />
      <RichTextField source="weaknesses" label="Weaknesses" />
      <RichTextField source="opportunities" label="Opportunities" />
      <RichTextField source="threats" label="Threats" />
      <br />
      <br />
      <RichTextField source="socialMedia" label="Social Media" />
      <RichTextField source="webPage" label="Web Page" />
      <RichTextField
        source="customerSurvey"
        label="Qualitative And Quantitative Research"
      />
      <NumberField source="estimatedPrice" label="Estimated Price" />
      <RichTextField source="toDo" label="To-Do List" />
      <RichTextField source="editionalNotes" label="Editional Notes" />
    </SimpleShowLayout>
  </Show>
);
