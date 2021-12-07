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

const historyFilters = [
  <TextInput source="customerName" label="Search" alwaysOn />,
];

export const HistoryList = (props: any) => (
  <List filters={historyFilters} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="customerName" label="Customer Name" />
      <EditButton />
      <ShowButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
