import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import MyProfile from './screens/MyProfile/myProfile';

function App() {
  return (
    <Route exact path="/profile/:id">
      <MyProfile />
    </Route>
  );
}

export default App;