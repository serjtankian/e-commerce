import React from "react";
import { Route, Router, Switch, Redirect } from "react-router-dom";
import ListOfProducts from "./components/ListOfProducts";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={ListOfProducts} />
        <Redirect from="/" to="/home" />
      </Switch>
    </>
  );
}

export default App;
