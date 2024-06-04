import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PARK_TITLE_FIELD } from "./ParkTitle";

export const ParkShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Location" source="location" />
        <TextField label="Name" source="name" />
        <TextField label="Number of Courts" source="numberOfCourts" />
        <TextField label="Number of Players" source="numberOfPlayers" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Event" target="parkId" label="Events">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Date" source="date" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="Organizer" source="organizer" />
            <ReferenceField label="Park" source="park.id" reference="Park">
              <TextField source={PARK_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
