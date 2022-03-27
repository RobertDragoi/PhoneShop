import React from "react";
import { Link } from "react-router-dom";
import "./Profile.scss";

export function ProfileOrders({
  userOrders,  
}) {
  return (
    <div>
      {userOrders &&
        userOrders?.map((order, index) => (
          <div key={`order_${index}`} className="profile-container">
            <div className="profile-container-item">
              <Link className="profile-title" to={`/summary/${order._id}`}>
                <h4 className="profile-title-left">Comanda numărul</h4>
                <h4 className="profile-title-right">{order._id}</h4>
              </Link>

              {order?.products.map((product, index2) => (
                <div
                  key={`order_${index}_item${index2}`}
                  className="row my-2 text-center text-capitalize"
                >
                  <div className="col-10 mx-auto col-lg-2">
                    <img
                      alt="img"
                      src={`${process.env.PUBLIC_URL}/${product.product.img}`}
                      style={{
                        width: "5rem",
                        heigth: "5rem",
                      }}
                      className="img-fluid"
                    ></img>
                  </div>
                  <div className="col-10 mx-auto col-lg-2">
                    {product.product.title}
                  </div>

                  <div className="col-10 mx-auto col-lg-2">
                    <strong> Bucăți : {product.count} </strong>
                  </div>

                  <div className="col-10 mx-auto col-lg-2">
                    <strong> Total produs : {product.total} Lei</strong>
                  </div>
                </div>
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
}
