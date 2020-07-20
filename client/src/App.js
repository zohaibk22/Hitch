import React from 'react';
import { Route } from 'react-router-dom'
import EditProfile from './screens/EditProfile/editProfile'
import Home from './screens/Home/Home'
import './App.css';
import MyProfile from './screens/MyProfile/myProfile';

function App() {
  return (
    <>
      <Route exact path="/profile/update/:id">
        <EditProfile />
      </Route>
      <Route exact path="/Home">
        <Home />
      </Route>
    <Route exact path="/profile/:id">
      <MyProfile />
      </Route>
    </>
  );
}

export default App;