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

const UserStoriesFilters = [
  <TextInput source="customerName" label="Search" alwaysOn />,
];

export const UserStoriesList = (props: any) => (
  <List filters={UserStoriesFilters} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="customerName" label="Customer Name" />
      <EditButton />
      <ShowButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
