import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="text-center p-5 m-5">
        <h3 className="mb-3 text-muted fs-2">Charges</h3>
        <p className="text-muted fs-5">List of all charges and taxes</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col py-5 mx-3">
            <img src="media/images/pricingEquity.svg" />
            <div className="text-center text-muted">
              <h3 className='py-3'>Free equity delivery</h3>
              <p>
                All equity delivery investments (NSE, BSE), are absolutely free
                — ₹ 0 brokerage.
              </p>
            </div>
          </div>
          <div className="col py-5 x-3">
            <img src="media/images/intradayTrades.svg" />
            <div className="text-center text-muted">
              <h3 className='py-3' >Intraday and F&O trades</h3>
              <p>
                Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
                intraday trades across equity, currency, and commodity trades.
                Flat ₹20 on all option trades.
              </p>
            </div>
          </div>
          <div className="col py-5 mx-3">
            <img src="media/images/pricingEquity.svg" />
            <div className="text-center text-muted">
              <h3 className='py-3'>Free direct MF</h3>
              <p>
                All direct mutual fund investments are absolutely free — ₹ 0
                commissions & DP charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
