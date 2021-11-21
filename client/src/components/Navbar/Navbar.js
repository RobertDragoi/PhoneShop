import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
            Produse
          </Link>
        </div>
        {isAuthenticated ? (
          <>
            <div className="navbar-item">
              <Link to="/profile" className="navbar-link">
                Salut {user && user.name}
              </Link>
            </div>
            <div className="navbar-item" onClick={() => Logout()}>
              <Link to="/register" className="navbar-link">
                <FontAwesomeIcon icon={faSignOutAlt} />
              </Link>
            </div>
          </>
        ) : (
          <div className="navbar-item">
            <Link to="/register" className="navbar-link">
              Înregistrează-te
            </Link>
          </div>
        )}
      </div>

      {isAuthenticated ? (
        <div className="navbar-container-right">
          <div className="navbar-item">
            <Link to="/cart" className="navbar-link">
              <FontAwesomeIcon icon={faCartPlus} /> Coșul meu
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
