import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  ShowButton,
  BooleanField,
  TextInput,
  DeleteButton,
} from "react-admin";
import { DateField } from "react-admin";

const customerFilters = [
  <TextInput source="nameOfCustomer" label="Search" alwaysOn />,
];

export const CustomerList = (props: any) => (
  <List filters={customerFilters} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="nameOfCustomer" label="Customer Name" />
      <TextField source="phoneNumberOfRepresentative" label="Phone Number" />
      <EmailField source="emailOfRepresentative" label="Email" />
      <TextField source="nextSteps" label="Next Step" />
      <DateField source="earliestDeadline" label="Closest Deadline" />
      <DateField source="deadline" label="Deadline" />
      <TextField source="importance" label="Importance" />
      <BooleanField source="paid" label="Paid" />
      <EditButton />
      <ShowButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
