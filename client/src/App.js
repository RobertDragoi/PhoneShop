
import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Register from './components/Register';
import Login from './components/Login';
import UserState from './components/UserState/UserState';
import AlertState from './components/AlertState/AlertState';
import ProductState from './components/ProductsState/ProductState';
class App extends Component {
  state = {  }
  render() { 
    return ( 
        <React.Fragment>
          <ProductState>
          <UserState>
          <AlertState>
          <Navbar/>
          <Switch>
            <Redirect exact from="/" to="/shop" />
            <Route exact path="/shop" component={ProductList}/>
            <Route  path="/details/:id" component={Details}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/api/register" component={Register}/>
            <Route exact path="/api/login" component={Login}/>
            <Route component={Default}/>
          </Switch>
          
          </AlertState>
          </UserState>
          </ProductState>
        </React.Fragment>
       );
  }
}
 
export default App;
