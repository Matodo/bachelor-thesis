import RichTextInput from "ra-input-rich-text";
import * as React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

export const TemplateCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <h1>Template</h1>
      <TextInput style={{ width: 500 }} disabled source="id" />
      <TextInput
        style={{ width: 500 }}
        source="templateName"
        label="Template Name"
      />
      <RichTextInput source="template" />
    </SimpleForm>
  </Create>
);
