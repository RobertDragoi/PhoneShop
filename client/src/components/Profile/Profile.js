import React, { useContext, useEffect } from "react";
import UserContext from "../UserState/userContext";
import OrderContext from "../OrderState/orderContext";
import "./Profile.scss";
const Profile = () => {
  const convertDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toDateString();
  };
  const userContext = useContext(UserContext);
  const orderContext = useContext(OrderContext);
  const { user } = userContext;
  const { userOrders, getUserOrders } = orderContext;
  useEffect(() => {
    const getUserOrdersAPI = async (id) => {
      await getUserOrders(id);
    };
    getUserOrdersAPI(user?._id);
  }, [user?._id]);

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
              <div>{user?.name}</div>
              <div>{user?.age}</div>
              <div>{user?.address}</div>
              <div>{convertDate(user?.date)}</div>
            </div>
          </div>
          {userOrders.map((order) => (
            <div className="profile-container">
              <div className="profile-container-item">
                {order.products.map((product) => (
                  <div className="row my-2 text-center text-capitalize">
                    <div className="col-10 mx-auto col-lg-2">
                      <img
                        alt="img"
                        src={product.product.img}
                        style={{ width: "5rem", heigth: "5rem" }}
                        className="img-fluid"
                      ></img>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                      {product.product.title}
                    </div>

                    <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                      <div className="d-flex justify-content-center">
                        <div className="col-10 mx-auto col-lg-2">
                          <strong> Bucăți : {product.count} </strong>
                        </div>
                      </div>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                      <strong> Total produs : {product.total} Lei</strong>
                    </div>
                  </div>
                ))}
                <div className="col-10 mx-auto col-lg-2">
                  <strong> Total : {order.price} Lei</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default Profile;
