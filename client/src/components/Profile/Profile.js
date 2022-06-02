import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getUserOrdersOperation } from "../../state/operations/orderOperations";
import { ProfileOrders } from "./ProfileOrders";
import { ProfilePlaceholder } from "./ProfilePlaceholder";
import { Spinner } from "../Spinner";
import "./Profile.scss";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const { userOrders, loading } = useSelector((state) => state.order);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrdersOperation(id));
  }, [id]);
  const convertDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toDateString();
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <div className="profile-container">
            <ProfilePlaceholder />
            <div className="profile-container-row">
              <div>{user?.name}</div>
              <div>{user?.age}</div>
              <div>{user?.address}</div>
              <div>{convertDate(user?.date)}</div>
            </div>
          </div>
          <div className="product-list-title">
            <h1 className="product-list-title-left">Comenzile</h1>
            <h1 className="product-list-title-right">mele</h1>
          </div>
          {loading ? <Spinner /> : <ProfileOrders userOrders={userOrders} />}
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};

export default Profile;
