import React from "react";

export const CartColumns = () => {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase"></p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Nume</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Preț</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Cantitate</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Șterge</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Total produs</p>
        </div>
      </div>
    </div>
  );
};
