import React from "react";
import { Route, Switch } from "react-router-dom";

import { JokePage } from "./pages/JokePage";
import { NotFoundPage } from "./pages/NotFoundPage";

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={JokePage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}
