import React from "react";

function RightSection({
  imageURL,
  productName,
  productDesc,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col text-muted mt-3 pt-5" style={{ lineHeight: "2rem" }}>
          <div className='pt-5 mt-5'></div>  
          <h3 className="">{productName}</h3>
          <p className="me-5 pe-5">{productDesc}</p>
          <div className="">
            <a
              style={{ textDecoration: "none" }}
              className=""
              href={learnMore}
            >
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col">
          <img className="pb-b mb-5" src={imageURL} />
        </div>
      </div>
    </div>
  );
}
export default RightSection;
