import React from "react";
import routes from "./Routes";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Switch>
      {routes.map(({ path, exact, fetchInitialData, component: Comp }) => {        
        return (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={(prop) => {
                // console.log(prop)
              return <Comp {...prop} fetchInitialData={fetchInitialData} />
            }}
            />
          )
      })}
    </Switch>
  );
}
