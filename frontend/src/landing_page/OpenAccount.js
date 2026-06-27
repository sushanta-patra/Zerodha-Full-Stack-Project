import React from "react";
function OpenAccount() {
  return (
    <div className="container m-5">
      <div className="row justify-content-center text-center">
        <h3 className="mb-3 text-muted fs-4">Open a Zerodha account</h3>
        <p className="text-muted fs-5">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="btn btn-primary mt-4 fw-medium fs-4 py-1 rounded-1 mb-5"
          style={{ width: "20%" }}
        >
          Signup for Free
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
