import React from 'react';
import { List, Datagrid, EditButton, DeleteButton, ReferenceField, TextField, EmailField } from 'react-admin';

export const ServiceList = props => (
   <List {...props}>
       <Datagrid rowClick="edit">
           <ReferenceField source="userId" reference="users"><TextField source="name" /></ReferenceField>
           <TextField source="id" />
           <TextField source="title" />
           <TextField source="body" />
           <EditButton basePath="/services" />
           <DeleteButton basePath="/services" />
       </Datagrid>
   </List>
);