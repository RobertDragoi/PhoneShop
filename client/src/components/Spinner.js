import React from "react";
export function Spinner({}) {
  return (
    <div className="d-flex align-items-center justify-content-center mt-5">
      <div
        className="spinner-border"
        style={{
          width: "12rem",
          height: "12rem",
        }}
        role="status"
      >
        <span className="sr-only">Se încarcă..</span>
      </div>
    </div>
  );
}
