import * as React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
import RichTextInput from "ra-input-rich-text";

const UserStoriesName = ({ record }: any) => {
  return <span>{record ? `${record.nameOfCustomer}` : ""}</span>;
};

export const UserStoriesEdit = (props: any) => (
  <Edit title={<UserStoriesName />} {...props}>
    <SimpleForm>
      <h1>User Stories</h1>
      <TextInput
        disabled
        style={{ width: 500 }}
        source="id"
        label="User Stories ID"
      />

      <TextInput
        style={{ width: 500 }}
        source="customerName"
        label="Customer Name"
      />
      <TextInput source="customerID" />
      <RichTextInput source="userStories" />
      <RichTextInput source="estimates" />
      <RichTextInput source="pricing" />
      <RichTextInput source="risk" />
      <RichTextInput source="timeline" />
    </SimpleForm>
  </Edit>
);
