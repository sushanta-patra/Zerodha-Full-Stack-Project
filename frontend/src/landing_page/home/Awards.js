import React from "react";

function Awards() {
  return (
    <div className="container m-5 pt-5">
      <div className="row justify-content-center">
        <div className="col p-3">
          <img
            src="media/images/largestBroker.svg"
            alt="Awards"
            style={{ width: "80%" }}
          />
        </div>
        <div className="col">
          <h1>Largest stock broker in India</h1>
          <p className="fs-6 text-muted">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in india daily by trading and investing in:
          </p>
          <div className="row my-5 text-muted">
                <div className="col">
                    <ul className="lh-lg">
                        <li>Futures and Options</li>
                        <li>Commodity derivatives</li>
                        <li>Currency derivatives</li>
                    </ul>
                </div>
                <div className="col">
                    <ul className="lh-lg">
                        <li>Stocks and IPOs</li>
                        <li>Direct mutual funds</li>
                        <li>Bonds and govt. securities</li>
                    </ul>
                </div> 
                <img className="m-3" src="media/images/pressLogos.png" alt="Press Logos" style={{width: "90%"}}/>       
          </div>
          <div>
          </div>
        </div>
        </div>
    </div>
  );
}

export default Awards;
