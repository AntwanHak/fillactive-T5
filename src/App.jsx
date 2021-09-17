import React from "react";
import { CssBaseline } from "@material-ui/core";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import Login from "./login";

import { Route, Switch } from "react-router-dom";
import ActivityTab from "./pages/activity";
import EventTab from "./pages/event";
import ProfilePage from "./pages/profile";

import MainNavigation from "./components/layout/MainNavigation";

const App = () => {
  return (
    <>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <ProfilePage />
        </Route>
        <Route path="/event">
          <EventTab />
        </Route>
        <Route path="/activity">
          <ActivityTab />
        </Route>
      </Switch>
    </>
  );
};
export default App;
