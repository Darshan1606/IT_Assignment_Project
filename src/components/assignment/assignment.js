import React from "react";
import "./assignment.css";
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";

import Sidebar from "./Sidebar";

const Assignment = () => {
  let { path } = useRouteMatch();
  return (
    <div className="d-flex">
      <Sidebar />
      <Switch>
        <div>
          <Route path={`${path}/:asign`}>
            <TestWhich />
          </Route>
        </div>
      </Switch>
    </div>
  );
};

const TestWhich = ({ txt }) => {
  let { asign } = useParams();
  return (
    <div>
      <h1 style={{ marginLeft: "1rem" }}>
        
      </h1>
    </div>
  );
};

export default Assignment;
