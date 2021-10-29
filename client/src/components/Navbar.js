import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import UserContext from "./UserState/userContext";
const Navbar = (props) => {
  const userContext = useContext(UserContext);
  const { isAuthenticated, user, Logout } = userContext;

  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <Link to="/">
        <img src={logo} alt="store" className="navbar-brand"></img>
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            Products
          </Link>
        </li>
        {isAuthenticated ? (
          <Fragment>
            <Link to="/profile" className="nav-link">
              Hello {user && user.name}
            </Link>
            <button onClick={Logout}>
              <span className="mr-2">
                <i className="fa fa-sign-out" />
              </span>
            </button>
          </Fragment>
        ) : (
          <li className="nav-item ml-5">
            <Link to="/api/register" className="nav-link">
              Register
            </Link>
          </li>
        )}
      </ul>
      {isAuthenticated ? (
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      ) : null}
    </NavWrapper>
  );
};
const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize !important;
  }
`;
export default Navbar;
