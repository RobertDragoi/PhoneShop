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
import UserState from "./components/UserState/UserState";
import AlertState from "./components/AlertState/AlertState";
import ProductState from "./components/ProductsState/ProductState";
import OrderState from "./components/OrderState/OrderState";
const App = () => {
  return (
    <React.Fragment>
      <OrderState>
        <ProductState>
          <UserState>
            <AlertState>
              <Navbar />
              <Switch>
                <Redirect exact from="/" to="/shop" />
                <Route exact path="/shop" component={ProductList} />
                <Route path="/details/:id" component={Details} />
                <PrivateRoute exact path="/cart" component={Cart} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/profile" component={Profile} />
                <PrivateRoute exact path="/summary" component={Summary} />
                <Route component={Default} />
              </Switch>
            </AlertState>
          </UserState>
        </ProductState>
      </OrderState>
    </React.Fragment>
  );
};

export default App;
