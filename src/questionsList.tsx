import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
  TextInput,
  DeleteButton,
  NumberField,
} from "react-admin";

const questionsFilters = [
  <TextInput source="customerName" label="Search" alwaysOn />,
];

export const QuestionsList = (props: any) => (
  <List filters={questionsFilters} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="customerName" label="Customer Name" />
      <TextField source="customerID" label="Customer ID" />
      <NumberField source="budget" label="Customer Budget" />
      <EditButton />
      <ShowButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
