import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PlayerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Players"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Age" source="age" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Current Status" source="currentStatus" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Location" source="location" />
        <TextField label="Name" source="name" />
        <TextField label="Skill Level" source="skillLevel" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
