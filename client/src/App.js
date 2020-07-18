import React from 'react';
import { Route } from 'react-router-dom'
import EditProfile from './screens/EditProfile/editProfile'
import './App.css';

function App() {
  return (
    <Route exact path="/profile/update/:id">
      <EditProfile />
    </Route>
  );
}

export default App;
