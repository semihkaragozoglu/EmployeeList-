import React from "react";
import Layout from './components/Layout';
import ReadMe from "./components/ReadMe";
import { EmployeeList, EmployeeEdit, EmployeeInsert }  from "./components/index";

import { Router, Route, Switch } from "react-router-dom";
import { history } from "./helpers";
import "./App.css";

function App() {
  return (
    <Layout>
      <Router history={history}>
        <Switch>
          <Route path="/ReadMe" exact component={ReadMe} />
          <Route path="/" exact component={EmployeeList} />
          <Route path="/Employee" exact component={EmployeeInsert} />
          <Route path="/Employee/:id" exact component={EmployeeEdit} />
          {/* <Route path="/1" component={Home2} /> */}
          {/* <Route path="/About" component={About} /> */}
        </Switch>
      </Router>
    </Layout>
  );
}
export default App;
