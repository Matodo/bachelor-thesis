import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
  TextInput,
  DeleteButton,
} from "react-admin";

const templateFilters = [
  <TextInput source="templateName" label="Search" alwaysOn />,
];

export const TemplateList = (props: any) => (
  <List filters={templateFilters} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="templateName" label="Template Name" />
      <EditButton />
      <ShowButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
