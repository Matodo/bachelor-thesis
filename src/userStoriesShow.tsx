import * as React from "react";
import { Show, SimpleShowLayout, TextField, RichTextField } from "react-admin";

const UserStoriesName = ({ record }: any) => {
  return <span>{record ? `${record.customerName}` : ""}</span>;
};

export const UserStoriesShow = (props: any) => (
  <Show title={<UserStoriesName />} {...props}>
    <SimpleShowLayout>
      <h1>User Stories</h1>
      <TextField style={{ width: 500 }} source="id" label="User Stories ID" />
      <TextField
        style={{ width: 500 }}
        source="customerName"
        label="Customer Name"
      />
      <TextField
        style={{ width: 500 }}
        source="customerID"
        label="Customer ID"
      />
      <RichTextField source="userStories" label="User Stories" />
      <RichTextField source="estimates" label="Estimates" />
      <RichTextField source="pricing" label="Pricing" />
      <RichTextField source="risk" label="Risks" />
      <RichTextField source="timeline" label="Timelines" />
    </SimpleShowLayout>
  </Show>
);
