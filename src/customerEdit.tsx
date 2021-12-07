import * as React from "react";
import {
  NumberInput,
  Edit,
  SimpleForm,
  SelectInput,
  TextInput,
  RadioButtonGroupInput,
  BooleanInput,
  DateInput,
} from "react-admin";
import PaidIcon from "@material-ui/icons/MonetizationOn";

const CustomerTitle = ({ record }: any) => {
  return <span>{record ? `${record.nameOfCustomer}` : ""}</span>;
};

export const CustomerEdit = (props: any) => (
  <Edit title={<CustomerTitle />} {...props}>
    <SimpleForm>
      <h1>Customer Basic Information</h1>
      <TextInput style={{ width: 500 }} disabled source="id" />
      <TextInput
        style={{ width: 500 }}
        source="nameOfCustomer"
        label="Customer Name"
      />
      <TextInput
        style={{ width: 500 }}
        source="firstNameOfRepresentative"
        label="Representative's Name"
      />
      <TextInput
        style={{ width: 500 }}
        source="lastNameOfRepresentative"
        label="Representative's Surname"
      />
      <TextInput
        style={{ width: 500 }}
        source="phoneNumberOfRepresentative"
        label="Representative's Phone Number"
      />
      <TextInput
        style={{ width: 500 }}
        source="emailOfRepresentative"
        label="Representative's Email"
      />
      <TextInput
        style={{ width: 500 }}
        source="webOfCustomer"
        label="Web Address"
      />
      <TextInput
        style={{ width: 500 }}
        source="addressOfCustomer"
        label="Customer Address"
      />
      <SelectInput
        style={{ width: 500 }}
        allowEmpty
        source="typeOfOrganization"
        label="Type Of Organization"
        choices={[
          { id: "selfEmployed", name: "Self Employed" },
          { id: "solePropriotorship", name: "Sole Propriotorship" },
          { id: "partnership", name: "Partnership" },
          { id: "limitedPartnership", name: "Limited Partnership" },
          { id: "llc", name: "LLC" },
          { id: "nonProfit", name: "Non-Profit" },
          { id: "Co-op", name: "Co-op" },
        ]}
      />
      <NumberInput
        style={{ width: 500 }}
        source="numberOfEmployees"
        label="Number Of Employees"
        min={1}
        max={1000}
        step={1}
      />
      <NumberInput
        style={{ width: 500 }}
        source="annualSale"
        label="Annual Sale In Euro"
      />
      <NumberInput
        style={{ width: 500 }}
        source="totalPrice"
        label="Total Price In Euro"
      />
      <BooleanInput
        options={{
          checkedIcon: <PaidIcon />,
        }}
        source="paid"
        label="Paid"
      />

      <TextInput style={{ width: 500 }} source="nextSteps" label="Next Step" />
      <DateInput
        style={{ width: 500 }}
        source="earliestDeadline"
        label="Closest Deadline"
      />
      <DateInput style={{ width: 500 }} source="deadline" label="Deadline" />
      <RadioButtonGroupInput
        source="importance"
        choices={[
          { id: "weak", name: "Weak" },
          { id: "medium", name: "Medium" },
          { id: "strong", name: "Strong" },
        ]}
      />
    </SimpleForm>
  </Edit>
);
