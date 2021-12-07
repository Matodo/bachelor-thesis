import * as React from "react";
import {
  TextField,
  BooleanField,
  NumberField,
  Show,
  SimpleShowLayout,
  DateField,
} from "react-admin";

const CustomerTitle = ({ record }: any) => {
  return <span>{record ? `${record.nameOfCustomer}` : ""}</span>;
};

export const CustomerShow = (props: any) => (
  <Show title={<CustomerTitle />} {...props}>
    <SimpleShowLayout>
      <h1>Customer Basic Information</h1>
      <TextField source="id" />
      <TextField source="nameOfCustomer" label="Customer Name" />
      <TextField
        source="firstNameOfRepresentative"
        label="Representative's Name"
      />
      <TextField
        source="lastNameOfRepresentative"
        label="Representative's Surname"
      />
      <TextField
        source="phoneNumberOfRepresentative"
        label="Representative's Phone Number"
      />
      <TextField
        source="emailOfRepresentative"
        label="Representative's Email"
      />
      <TextField source="webOfCustomer" label="Web Address" />
      <TextField source="addressOfCustomer" label="Customer Address" />
      <TextField source="typeOfOrganization" label="Type Of Organization" />
      <NumberField source="numberOfEmployees" label="Number Of Employees" />
      <NumberField source="annualSale" label="Annual Sale In Euro" />
      <NumberField source="totalPrice" label="Total Price In Euro" />
      <BooleanField source="paid" label="Paid" />
      <TextField source="nextSteps" label="Next Steps" />
      <DateField source="earliestDeadline" label="Closest Deadline" />
      <DateField source="deadline" label="Deadline" />
      <TextField source="importance" />
    </SimpleShowLayout>
  </Show>
);
