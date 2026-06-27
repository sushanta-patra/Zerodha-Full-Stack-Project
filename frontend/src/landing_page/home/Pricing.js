import React from "react";

function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row mb-5">
        <div className="col">
          <h3 className="pb-3">Unbeatable pricing</h3>
          <p className=" text-muted">
            We pioneered the concept of discount broking and price
            <br /> transparency in India. Flat fees and no hidden charges.
            <div className="mt-3 fs-6">
              <a href="#" style={{ textDecoration: "none" }}>
                   <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </p>
        </div>
        <div className="col">
          <div className="row">
            <div className="col border text-center p-3">
              <h2>₹0</h2>
              <p className="text-muted">
                Free equity delivery and <br /> direct mutual funds
              </p>
            </div>
            <div className="col border text-center p-3">
              <h2>₹20</h2>
              <p className="text-muted">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-3"></div>
    </div>
  );
}

export default Pricing;
