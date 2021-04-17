import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Products from "./components/Products";
import Login from "./components/Login";
function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            exact={true}
            path="/"
            render={(e, props) => <Login {...e} data={props} />}
          />
          <Route
            exact={true}
            path="/products"
            render={(e, props) => <Products {...e} data={props} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
