import * as React from "react";
import { Show, SimpleShowLayout, TextField } from "react-admin";
import RichTextField from "ra-input-rich-text";

const TemplateName = ({ record }: any) => {
  return <span>{record ? `${record.customerName}` : ""}</span>;
};

export const TemplateShow = (props: any) => (
  <Show title={<TemplateName />} {...props}>
    <SimpleShowLayout>
      <h1>Customer</h1>
      <TextField style={{ width: 500 }} source="id" label="Template ID" />
      <TextField
        style={{ width: 500 }}
        source="templateName"
        label="Template Name"
      />
      <RichTextField source="template" />
    </SimpleShowLayout>
  </Show>
);
