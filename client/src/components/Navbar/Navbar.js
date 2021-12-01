import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContext from "../UserState/userContext";
import {
  faSignOutAlt,
  faCartPlus,
  faAlignJustify,
  faUserAlt,
  faUserPlus,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.scss";
const Navbar = () => {
  const userContext = useContext(UserContext);
  const { isAuthenticated, Logout, LoadUser } = userContext;
  useEffect(() => {
    LoadUser();
    console.log("ver");
  }, []);
  return (
    <div className="navbar-container">
      <div className="navbar-container-left">
        <div className="navbar-item">
          <div className="navbar-item-icon">
            <FontAwesomeIcon color="white" icon={faAlignJustify} />
          </div>
          {isAuthenticated ? (
            <div className="navbar-item-content">
              <div className="navbar-item-content-item">
                <Link className="navbar-link" to="/profile">
                  <FontAwesomeIcon color="white" icon={faUserAlt} />
                  Profil
                </Link>
              </div>
              <div className="navbar-item-content-item">
                <Link className="navbar-link" to="/">
                  <FontAwesomeIcon color="white" icon={faWindowRestore} />
                  Produse
                </Link>
              </div>
              <div
                className="navbar-item-content-item"
                onClick={() => Logout()}
              >
                <div className="navbar-link">
                  <FontAwesomeIcon color="white" icon={faSignOutAlt} />
                  Delogare
                </div>
              </div>
            </div>
          ) : (
            <div className="navbar-item-content">
              <div className="navbar-item-content-item">
                <Link className="navbar-link" to="/register">
                  <FontAwesomeIcon color="white" icon={faUserPlus} />
                  Înregistrare
                </Link>
              </div>
              <div className="navbar-item-content-item">
                <Link className="navbar-link" to="/">
                  <FontAwesomeIcon color="white" icon={faWindowRestore} />
                  Produse
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      {isAuthenticated ? (
        <div className="navbar-container-right">
          <div className="navbar-item">
            <div className="navbar-item-icon">
              <Link to="/cart" className="navbar-link">
                <FontAwesomeIcon icon={faCartPlus} /> Coșul meu
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
