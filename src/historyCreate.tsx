import * as React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import RichTextInput from "ra-input-rich-text";

const HistoryName = ({ record } : any) => {
  return <span>{record ? `${record.customerName}` : ""}</span>;
};

export const HistoryCreate = (props: any) => (
  <Create title={<HistoryName />} {...props}>
    <SimpleForm>
      <h1>History of Steps</h1>
      <TextInput style={{ width: 500 }} disabled source="id" />
      <TextInput
        style={{ width: 500 }}
        source="customerID"
        label="Customer ID"
      />
      <TextInput
        style={{ width: 500 }}
        source="customerName"
        label="Customer Name"
      />
      <RichTextInput source="stepsHistory" label="History of Steps" />
    </SimpleForm>
  </Create>
);
