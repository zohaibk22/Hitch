import React from "react";
import { Route } from "react-router-dom";
import EditProfile from "./screens/EditProfile/editProfile";
import Home from "./screens/Home/Home";
import "./App.css";
import MyProfile from "./screens/MyProfile/myProfile";
import CreateProfile from "./screens/CreateProfile/createProfile";
import Login from "./screens/LoginPage/Login";

function App() {
  return (
    <>
      <Route exact path="/profile/update/:id">
        <EditProfile />
      </Route>

      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/profile/:id">
        <MyProfile />
      </Route>

      <Route exact path="/create/profile">
        <CreateProfile />
      </Route>

      <Route exact path="/profile/signup/:id">
        <EditProfile />
      </Route>

      <Route path="/signin">
        <Login />
      </Route>
    </>
  );
}

export default App;
