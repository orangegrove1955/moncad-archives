import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./Menu";
import Gallery from "./Gallery";
import Landing from "./Landing";
import Sidebar from "./Sidebar";
import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <Sidebar />
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Cheer">
            <Menu key={"cheer"} name={"Cheer"}></Menu>
          </Route>
          <Route path="/Cheer/:year/:comp/:team" component={Gallery} />
          <Route exact path="/Dance">
            <Menu key={"dance"} name={"Dance"}></Menu>
          </Route>
          <Route path="/Dance/:year/:comp/:team" component={Gallery} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
