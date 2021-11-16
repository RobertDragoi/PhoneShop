import React, { useContext } from "react";
import UserContext from "../UserState/userContext";
import "./Profile.scss";
const Profile = () => {
  const convertDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toDateString();
  };
  const userContext = useContext(UserContext);
  const { user } = userContext;
  return (
    <div class="container">
      <div class="row">
        <div className="col-2"></div>
        <div className="col-8">
          <div className="profile-container">
            <div className="profile-container-row-left">
              <div>Name</div>
              <div>Age</div>
              <div>Address</div>
              <div>Date of registration</div>
            </div>
            <div className="profile-container-row">
              <div>{user.name}</div>
              <div>{user.age}</div>
              <div>{user.address}</div>
              <div>{convertDate(user.date)}</div>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default Profile;
