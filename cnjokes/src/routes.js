import React from "react";
import { Route, Switch } from "react-router-dom";

import MainPage from './pages/MainPage';
import NotFoundPage from "./pages/NotFoundPage";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}

export default Routes;