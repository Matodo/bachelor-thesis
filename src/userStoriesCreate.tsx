import RichTextInput from "ra-input-rich-text";
import * as React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

export const UserStoriesCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <h1>User Stories</h1>
      <TextInput style={{ width: 500 }} disabled source="id" />
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
  </Create>
);
