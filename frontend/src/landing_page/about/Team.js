import React from "react";
function Team() {
  return (
    <div className="conatainer p-3 m-3">
      <h1 className="text-center p-3">People</h1>
      <div className="row">
        <div className="col ">
          <div className="d-flex justify-content-center align-items-center pt-5">
            <img
                className=""
                src="media/images/sushantPatra.png"
                alt="people"
                style={{ width: "50%", borderRadius: "50%" }}
            />
          </div>
          <div className='text-center text-muted p-3'>
            <h5>Sushant Patra</h5>
            <p>Devloper,Entrepreneur</p>   
          </div>
        </div>
        <div className="col p-5 me-5" style={{lineHeight:'2rem'}}>
            <p className='pe-5'>
                Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p className='pe-5'>
                He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p className='pe-5'>
                Playing basketball is his zen.
            </p>
            <p className='pe-5'>
                Connect on <a href="#" style={{textDecoration:'none'}}>Homepage</a>/<a href="#" style={{textDecoration:'none'}}>TradingQnA</a>/<a href="#" style={{textDecoration:'none'}}>Twitter</a>
            </p>
        </div>
      </div>
    </div>
  );
}
export default Team;
