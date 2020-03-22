import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from "./Menu";
import Gallery from "./Gallery";
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
          <li>
            <Link to="/images">Gallery</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Switch>
          <Route path="/images">
            <Gallery key={"gallery"} path={""}></Gallery>
          </Route>
          <Route path="/Cheer">
            <Menu key={"cheer"} name={"Cheer"}></Menu>
          </Route>
          <Route path="/Dance">
            <Menu key={"dance"} name={"Dance"}></Menu>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
