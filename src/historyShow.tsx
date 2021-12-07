import * as React from "react";
import { Show, SimpleShowLayout, TextField, RichTextField } from "react-admin";

const HistoryName = ({ record }: any) => {
  return <span>{record ? `${record.customerName}` : ""}</span>;
};

export const HistoryShow = (props: any) => (
  <Show title={<HistoryName />} {...props}>
    <SimpleShowLayout>
      <h1>History of Steps</h1>
      <TextField style={{ width: 500 }} source="id" label="History ID" />
      <TextField
        style={{ width: 500 }}
        source="customerID"
        label="Customer ID"
      />
      <TextField
        style={{ width: 500 }}
        source="customerName"
        label="Customer Name"
      />
      <RichTextField source="stepsHistory" label="History of Steps" />
    </SimpleShowLayout>
  </Show>
);
