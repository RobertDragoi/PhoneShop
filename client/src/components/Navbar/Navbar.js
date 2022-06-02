import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import {
  loadUserOperation,
  logoutOperation,
  setMinutesOperation,
  setSecondsOperation
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
  const history = useHistory();
  const { user, isAuthenticated,minutes,seconds } = useSelector((state) => state.user);

  useEffect(() => {
    if (Cookies.get("auth-token")) {
      dispatch(loadUserOperation());
    }
  }, [dispatch]);
  useEffect(() => {
  
    let myInterval = setInterval(() => {
      if (seconds > 0) {
          dispatch(setSecondsOperation(seconds - 1));
      }
      if (seconds === 0 ) {
          if (minutes === 0) {
              dispatch(logoutOperation());
              clearInterval(myInterval)
          } else {
              dispatch(setMinutesOperation(minutes - 1));
              dispatch(setSecondsOperation(59));
          }
      } 
  }, 1000)
  return ()=> {
      clearInterval(myInterval);
    };
  });
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
        <div >
        { minutes === 0 && seconds === 0
            ? null
            : <p className="navbar-text"> Vei fi delogat în {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</p> 
        }
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
