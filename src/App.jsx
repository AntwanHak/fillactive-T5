import React from "react";
import { CssBaseline } from "@material-ui/core";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import Login from "./login";

import { Route, Switch } from "react-router-dom";
import ActivityTab from "./pages/AllActivity";
import EventTab from "./pages/event";
import ProfilePage from "./pages/profile";

import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Layout>
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
    </Layout>
  );
};
export default App;
