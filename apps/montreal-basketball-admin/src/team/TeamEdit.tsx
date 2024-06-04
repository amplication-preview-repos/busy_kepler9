import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TeamEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Captain" source="captain" />
        <TextInput label="Members" source="members" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
