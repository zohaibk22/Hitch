import React from 'react'
import ProfileDetails from "./screens/MyProfile/myProfile"
import { Route, Switch } from 'react-router-dom'
import { profile } from 'console'

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/profiles" component={ProfileDetails} />
      </Switch>
    </div>
  )
}

export default App