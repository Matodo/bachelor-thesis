import * as React from "react";
import {
  NumberInput,
  Edit,
  SimpleForm,
  DateInput,
  TextInput,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const CustomerTitle = ({ record } : any) => {
  return <span>{record ? `${record.nameOfCustomer}` : ""}</span>;
};

export const QuestionsEdit = (props: any) => (
  <Edit title={<CustomerTitle />} {...props}>
    <SimpleForm>
      <h1>Customer</h1>
      <TextInput
        style={{ width: 500 }}
        source="customerName"
        label="Customer Name"
      />

      <TextInput style={{ width: 500 }} disabled source="id" />
      <TextInput
        style={{ width: 500 }}
        source="customerID"
        label="Customer ID"
      />

      <RichTextInput source="goalDefinition" label="Goal Definition" />

      <RichTextInput source="requirements" label="Requirements" />
      <RichTextInput source="customerProblem" label="Problems" />
      <RichTextInput source="targetGroup" label="Target Group" />
      <RichTextInput source="timeFrame" label="Time Frame" />
      <DateInput
        style={{ width: 500 }}
        source="deadline"
        label="Final Deadline"
      />
      <NumberInput style={{ width: 500 }} source="budget" label="Budget" />
      <RichTextInput
        source="competitiveAdvantage"
        label="Competitive Advantages"
      />
      <RichTextInput
        source="portfolio"
        label="Portfolio Of Products And Services"
      />
      <h2>SWOT Analysis</h2>
      <RichTextInput source="strengths" label="Strengths" />
      <RichTextInput source="weaknesses" label="Weaknesses" />
      <RichTextInput source="opportunities" label="Opportunities" />
      <RichTextInput source="threats" label="Threats" />
      <br />
      <br />
      <RichTextInput source="socialMedia" label="Social Media" />
      <RichTextInput source="webPage" label="Web Page" />
      <RichTextInput
        source="customerSurvey"
        label="Qualitative And Quantitative Research"
      />
      <NumberInput
        style={{ width: 500 }}
        source="estimatedPrice"
        label="Estimated Price"
      />
      <RichTextInput source="toDo" label="To-Do List" />
      <RichTextInput source="editionalNotes" label="Editional Notes" />
    </SimpleForm>
  </Edit>
);
