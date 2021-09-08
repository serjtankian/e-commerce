import React from "react";
import { Route, Router, Switch, Redirect } from "react-router-dom";
import Footer from "./components/Footer";
import ListOfProducts from "./components/ListOfProducts";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={ListOfProducts} />
        <Route path="/products/:id/" component={ProductDetail} />
        <Redirect from="/" to="/home" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
