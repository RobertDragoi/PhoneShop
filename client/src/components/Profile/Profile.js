import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getUserOrdersOperation } from "../../state/operations/orderOperations";
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
        <div className="col-2"></div>
        <div className="col-8">
          <div className="profile-container">
            <div className="profile-container-row-left">
              <div>Nume</div>
              <div>Vârstă</div>
              <div>Adresă</div>
              <div>Data înregistrării</div>
            </div>
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
          {loading ? (
            <div className="d-flex align-items-center justify-content-center mt-5">
              <div
                className="spinner-border"
                style={{ width: "12rem", height: "12rem" }}
                role="status"
              >
                <span className="sr-only">Se încarcă..</span>
              </div>
            </div>
          ) : (
            <div>
              {userOrders &&
                userOrders?.map((order, index) => (
                  <div key={`order_${index}`} className="profile-container">
                    <div className="profile-container-item">
                      <div className="product-list-title">
                        <h4 className="product-list-title-left">
                          Comanda numărul
                        </h4>
                        <h4 className="product-list-title-right">
                          {order._id}
                        </h4>
                      </div>
                      {order?.products.map((product, index2) => (
                        <div
                          key={`order_${index}_item${index2}`}
                          className="row my-2 text-center text-capitalize"
                        >
                          <div className="col-10 mx-auto col-lg-2">
                            <img
                              alt="img"
                              src={`${process.env.PUBLIC_URL}/${product.product.img}`}
                              style={{ width: "5rem", heigth: "5rem" }}
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
          )}
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default Profile;
