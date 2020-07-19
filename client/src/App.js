import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import CreateProfile from "./screens/CreateProfile/createProfile";

function App() {
  return (
    <Switch>
      <Route exact path="/profile/create">
        <CreateProfile />
      </Route>
    </Switch>
  );
}

export default App;
