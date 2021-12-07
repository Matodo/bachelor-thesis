import * as React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
import RichTextInput from "ra-input-rich-text";

const TemplateName = ({ record }: any) => {
  return <span>{record ? `${record.nameOfCustomer}` : ""}</span>;
};

export const TemplateEdit = (props: any) => (
  <Edit title={<TemplateName />} {...props}>
    <SimpleForm>
      <h1>Template</h1>
      <TextInput
        disabled
        style={{ width: 500 }}
        source="id"
        label="Template ID"
      />

      <TextInput
        style={{ width: 500 }}
        source="templateName"
        label="Template ID"
      />
      <RichTextInput source="template" />
    </SimpleForm>
  </Edit>
);
