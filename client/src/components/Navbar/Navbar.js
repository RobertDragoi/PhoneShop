import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Button";
import UserContext from "../UserState/userContext";
import { faSignOutAlt, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.scss";
const Navbar = (props) => {
  const userContext = useContext(UserContext);
  const { isAuthenticated, user, Logout } = userContext;

  return (
    <div className="navbar-container">
      <div className="navbar-container-left">
        <div className="navbar-item">
          <Link to="/" className="navbar-link">
            Products
          </Link>
        </div>
        {isAuthenticated ? (
          <>
            <div className="navbar-item">
              <Link to="/profile" className="navbar-link">
                Hello {user && user.name}
              </Link>
            </div>
            <div className="navbar-item">
              <button className="navbar-button" onClick={Logout}>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </button>
            </div>
          </>
        ) : (
          <div className="navbar-item">
            <Link to="/api/register" className="navbar-link">
              Register
            </Link>
          </div>
        )}
      </div>

      {isAuthenticated ? (
        <div className="navbar-container-right">
          <Link to="/cart" className="ml-auto">
            <ButtonContainer>
              <FontAwesomeIcon icon={faCartPlus} />
              my cart
            </ButtonContainer>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
