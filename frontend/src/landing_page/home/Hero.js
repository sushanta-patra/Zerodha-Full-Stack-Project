import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row justify-content-center text-center">
        <img
          src="media/images/homeHero.png"
          alt="hero page"
          style={{ width: "70%" }} className='p-5'
        />
        <h3 className="mb-3 text-muted fs-2">Invest in everything</h3>
        <p className='text-muted fs-5'>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more
        </p>
        <button className="btn btn-primary mt-4 fw-medium fs-4 py-1 rounded-1 mb-5" style={{ width: "20%" }}>
          Signup for Free
        </button>
      </div>
    </div>
  );
}

export default Hero;
