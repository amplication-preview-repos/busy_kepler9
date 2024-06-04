import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { EventTitle } from "../event/EventTitle";

export const ParkCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="events"
          reference="Event"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EventTitle} />
        </ReferenceArrayInput>
        <div />
        <TextInput label="Name" source="name" />
        <NumberInput
          step={1}
          label="Number of Courts"
          source="numberOfCourts"
        />
        <NumberInput
          step={1}
          label="Number of Players"
          source="numberOfPlayers"
        />
      </SimpleForm>
    </Create>
  );
};
