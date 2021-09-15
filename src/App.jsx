import React from 'react';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import Footer from './components/Footer';
import ListOfProducts from './components/ListOfProducts';
import Navbar from './components/Navbar';
import ProductDetail from './components/ProductDetail';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';
import 'antd/dist/antd.css';
import Cart from './components/Cart';
import AddProductForm from './components/AddProductForm';
import EditGameForm from './components/EditGameForm';
import PurchaseConfirm from './components/PurchaseConfirm';
import OrdersHistory from './components/OrdersHistory';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={ListOfProducts} />
        <Route path="/search/" component={ListOfProducts} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/register" component={RegisterContainer} />
        <Route exact path="/orders" component={OrdersHistory} />
        <Route exact path="/products/:id/" component={ProductDetail} />

        <Route exact path="/purchaseConfirm" component={PurchaseConfirm} />
        <Route exact path="/:userId/:cartId" component={Cart} />
        <Route
          exact
          path="/create/videoGame/addNew"
          component={AddProductForm}
        />
        <Route exact path="/videoGame/edit/:id" component={EditGameForm} />
<<<<<<< HEAD


=======
>>>>>>> 5571425f4e96d7203ce03ccb4b1884da9caa70de
        <Redirect from="/" to="/home" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;