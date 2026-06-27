import React from "react";

function Education() {
  return (
    <div lassName="container">
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center">
          <img
            className="mb-5 pb-5"
            src="media/images/education.svg"
            alt="Education"
            style={{width:"70%"}}
          />
        </div>
        <div className="col m-5">
          <h3 className="m-3 pb-3">Free and open market education</h3>
          <p className="m-3 text-muted">
            Varsity, the largest online stock market education book in the world
            <br /> covering everything from the basics to advanced trading.
            <div className="mt-3 fs-6">
              <a href="#" style={{ textDecoration: "none" }}>
                Varsity <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </p>
          <p className="m-3 text-muted">
            TradingQ&A, the most active trading and investment community in
            <br />
            India for all your market related queries.
            <div className="mt-3 fs-6">
              <a href="#" style={{ textDecoration: "none" }}>
                TradingQ&A <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
