import React from "react";
import { Route } from "react-router-dom";
import EditProfile from "./screens/EditProfile/editProfile";
import Home from "./screens/Home/Home";
import "./App.css";
import MyProfile from "./screens/MyProfile/myProfile";
import CreateProfile from "./screens/CreateProfile/createProfile";

function App() {
  return (
    <>
      <Route exact path="/profile/update/:id">
        <EditProfile />
      </Route>

      <Route exact path="/Home">
        <Home />
      </Route>
<<<<<<< HEAD
    <Route exact path="/profile/:id">
      <MyProfile />
    </Route>
     <Route exact path="/profile/create">
=======

      <Route exact path="/profile/:id">
        <MyProfile />
      </Route>

      <Route exact path="/create/profile">
>>>>>>> c6e69158efb1bc2317784b23edfcbfc98918b6e9
        <CreateProfile />
      </Route>
    </>
  );
}

export default App;
