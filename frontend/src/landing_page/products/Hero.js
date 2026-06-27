import React from "react";

function Hero() {
  return (
    <div className="container p-5 m-5">
      <div className="row text-center">
        <h3 className="mb-3 text-muted fs-2">Zerodha Products</h3>
        <p className="text-muted fs-5">
          Sleek, modern, and intuitive trading platforms
        </p>
        <div>
          <p className='mb-5 pb-4'>
            Check out our{" "}
            <a className='mb-5' href="#" style={{ textDecoration: "none" }}>
              investment offerings <i class="fa-solid fa-arrow-right"></i>
            </a>
          </p>  
        </div>
      </div>
      <hr className='text-muted mt-5'/>
    </div>
  );
}
export default Hero;
