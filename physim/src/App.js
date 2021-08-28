import React from "react";
import SimFrame from "./components/SimFrame";
import MainView from "./components/MainView";

// import data of simulators
import dataSim from "../src/data/data.json";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/main" />
          <Route exact path="/main" component={MainView} />
          <Route
            forceRefresh={true}
            exact
            path={dataSim.sim01.path}
            component={() => (
              <SimFrame
                paneTitle={dataSim.sim01.title}
                url={dataSim.sim01.url}
                doc={dataSim.sim01.doc}
                act={dataSim.sim01.act}
                author={dataSim.sim01.author}
                email={dataSim.sim01.email}
              />
            )}
          />
          <Route
            forceRefresh={true}
            exact
            path={dataSim.sim02.path}
            component={() => (
              <SimFrame
                paneTitle={dataSim.sim02.title}
                url={dataSim.sim02.url}
                doc={dataSim.sim02.doc}
                act={dataSim.sim02.act}
                author={dataSim.sim02.author}
                email={dataSim.sim02.email}
              />
            )}
          />
          <Route
            forceRefresh={true}
            exact
            path={dataSim.sim03.path}
            component={() => (
              <SimFrame
                paneTitle={dataSim.sim03.title}
                url={dataSim.sim03.url}
                doc={dataSim.sim03.doc}
                act={dataSim.sim03.act}
                author={dataSim.sim03.author}
                email={dataSim.sim03.email}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}