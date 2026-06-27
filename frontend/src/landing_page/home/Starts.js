import React from "react";

function Starts() {
  return (
    <div className="container m-5 pt-5">
      <div className="row">
        <div className="col text-muted mx-5">
          <h3>Trust with confidence</h3>
          <h4 className="mt-5">Customer-first always</h4>
          <p>
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h4 className="mt-5">No spam or gimmicks</h4>
          <p>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
            <a href="#" style={{ textDecoration: "none" }}>
              Our philosophies.
            </a>
          </p>
          <h4 className="mt-5">The Zerodha universe</h4>
          <p>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h4 className="mt-5">Do better with money</h4>
          <p>
            With initiatives like{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Nudge
            </a>{" "}
            and{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Kill Switch
            </a>
            ,we don't just facilitate transactions, but actively help you do
            better with your money.
          </p>
        </div>
        <div className="col mx-5">
          <img
            src="media/images/ecosystem.png"
            alt="Starts"
            style={{ width: "140%" }}
          />
          <div className="d-flex justify-content-around fs-6">
            <a href="#" style={{ textDecoration: "none" }}>
              Explore our products   <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              Try Kite demo  <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="row p-3 m-5"></div>
    </div>
  );
}

export default Starts;
