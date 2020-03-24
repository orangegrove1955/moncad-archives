import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from "./Menu";
import Gallery from "./Gallery";
import Landing from "./Landing";
import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Cheer">Cheer</Link>
          </li>
          <li>
            <Link to="/Dance">Dance</Link>
          </li>
        </ul>
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
