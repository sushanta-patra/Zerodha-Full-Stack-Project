import React from "react";

function Hero() {
  return (
    <div className="bg-light">
      <div className="p-5 d-flex justify-content-between">
        <div className="px-5 ms-5">
          <h1 style={{ display: "inline" }}>Support Portal</h1>
        </div>
        <div className="px-5 me-4">
          <button className="btn btn-primary">My tickets</button>
        </div>
      </div>
      <div className="pb-5 mx-5 px-4">        
        <div class="input-group ps-5">
          <span className="input-group-text bg-white border-end-0">
            <i class="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            className="p-3 me-5 form-control border-start-0 ps-1"
            placeholder="Eg: How do I open my account, How do i activate F&O..."
          />
        </div>
      </div>
    </div>
  );
}
export default Hero;
