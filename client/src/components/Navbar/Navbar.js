import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import {
  loadUserOperation,
  logoutOperation,
} from "../../state/operations/userOperations";
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
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const history = useHistory();

  useEffect(() => {
    if (Cookies.get("token")) {
      dispatch(loadUserOperation());
    }
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
                <Link className="navbar-link" to={`/profile/${user?._id}`}>
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
                onClick={() => {
                  history.push("/shop");
                  dispatch(logoutOperation());
                }}
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
