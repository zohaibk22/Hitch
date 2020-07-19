import React from 'react';
import { Route } from 'react-router-dom'
import EditProfile from './screens/EditProfile/editProfile'
import Home from './screens/Home/Home'
import './App.css';

function App() {
  return (
    <>
      <Route exact path="/profile/update/:id">
        <EditProfile />
      </Route>
      <Route exact path="/Home">
        <Home />
      </Route>
    </>
  );
}

export default App;
