import React from 'react';
import { API_URL } from './config';
import { Admin, Resource, ListGuesser, EditGuesser} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { ServiceList } from './Components/ServiceList';
import { PostList, PostEdit, PostCreate } from './Components/Posts';
import authProvider from './Providers/authProvider';
import { restProvider, simpleRestProvider } from 'ra-data-simple-rest'


//connect the data provider to the REST endpoint
// const dataProvider = simpleRestProvider('http://localhost8080/')
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {
   return (
       <Admin dataProvider={dataProvider}>
         <Resource name="users" list={ListGuesser}/>
         <Resource name="posts" list={PostList} edit={EditGuesser} create={PostCreate}/>
       </Admin>
   );
}

export default App;
