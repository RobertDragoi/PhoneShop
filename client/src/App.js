import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductList/ProductList";
import Details from "./components/Details/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Summary from "./components/Summary/Summary";
import PrivateRoute from "./components/PrivateRoute";
import { Provider } from "react-redux";
import store from "./state/store";
const App = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Redirect exact from="/" to="/shop" />
          <Route exact path="/shop" component={ProductList} />
          <Route path="/details/:id" component={Details} />
          <PrivateRoute exact path="/cart" component={Cart} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/profile/:id" component={Profile} />
          <PrivateRoute exact path="/summary" component={Summary} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    </Provider>
  );
};

export default App;
