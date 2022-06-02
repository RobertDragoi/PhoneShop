import React from "react";
import { Link } from "react-router-dom";
import { OrderItem } from "../OrderItem";
import "./Profile.scss";

export const ProfileOrders = ({ userOrders }) => {
  return (
    <div>
      {userOrders &&
        userOrders?.map((order, index) => (
          <div key={`order_${index}`} className="profile-container">
            <div className="profile-container-item">
              <Link className="profile-title" to={`/summary/${order._id}`}>
                <profile className="profile-title-left">
                  Comanda numărul
                </profile>
                <p className="profile-title-right">{order._id}</p>
              </Link>

              {order?.products?.map((product, index2) => (
                <OrderItem
                  product={product}
                  index={index}
                  prefix={`profile_order_${index}_item`}
                />
              ))}
              <div className="row my-3 text-center text-capitalize">
                <div className="col-10 mx-auto col-lg-2">
                  <strong> Total comandă: {order.price} Lei</strong>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                  <p> Nume : {order.billingInfo.name}</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                  <p> Telefon : {order.billingInfo.phone}</p>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                  <p> Adresă : {order.billingInfo.address} </p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
