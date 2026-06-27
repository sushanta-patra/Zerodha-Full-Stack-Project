import React from "react";

function Universe() {
  return (
    <div className="container p-5 m-5">
      <h4 className='pb-5 my-5 text-center text-muted'>Want to know more about our technology stack? Check out the <a href="#"s style={{textDecoration:'none'}}>Zerodha.tech</a> blog. </h4>
      <div className="text-center">
        <h3 className="mb-3 text-muted fs-2">The Zerodha Universe</h3>
        <p className="text-muted pb-5 fs-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className='row ps-5 pe-5'>
        <div className='col'>
            <div className='mb-3 d-flex justify-content-center'>
                <img className='' src='media/images/zerodhaFundhouse.png' alt='' style={{width:'70%'}}/>
            </div>
            <p className='text-center text-muted' style={{fontSize:'.8rem'}}>
                Options trading platform that lets you<br/>
                create strategies, analyze positions, and examine <br/>
                data points like open interest, FII/DII, and more. 
            </p>
        </div>
        <div className='col'>
            <div className='mb-3 d-flex justify-content-center'>
                <img className='' src='media/images/sensibullLogo.svg' alt='' style={{width:'70%'}}/>
            </div>
            <p className='text-center text-muted' style={{fontSize:'.8rem'}}>
                Options trading platform that lets you <br/>
                create strategies, analyze positions, and examine <br/>
                data points like open interest, FII/DII, and more. 
            </p>
        </div>
        <div className='col'>
            <div className='mb-3 d-flex justify-content-center'>
                <img className='' src='media/images/goldenpiLogo.png' alt='' style={{width:'70%'}}/>
            </div>
            <p className='text-center text-muted' style={{fontSize:'.8rem'}}>
                Investment research platform  <br/>
                that offers detailed insights on stocks,  <br/>
                sectors, supply chains, and more. 
            </p>
        </div>
        <div className='w-100 p-4'>
        </div>
        <div className='col'>
            <div className='mb-3 d-flex justify-content-center'>
                <img className='' src='media/images/streakLogo.png' alt='' style={{width:'70%'}}/>
            </div>
            <p className='text-center text-muted' style={{fontSize:'.8rem'}}>
                Systematic trading platform <br/>
                that allows you to create and backtest <br/>
                strategies without coding. 
            </p>
        </div>
        <div className='col'>
            <div className='mb-3 d-flex justify-content-center'>
                <img className='' src='media/images/smallcaseLogo.png' alt='' style={{width:'70%'}}/>
            </div>
            <p className='text-center text-muted' style={{fontSize:'.8rem'}}>
                Thematic investing platform <br/>
                that helps you invest in diversified <br/>
                baskets of stocks on ETFs. 
            </p>
        </div>
        <div className='col'>
            <div className='mb-3 d-flex justify-content-center'>
                <img className='' src='media/images/dittoLogo.png' alt='' style={{width:'70%'}}/>
            </div>
            <p className='text-center text-muted' style={{fontSize:'.8rem'}}>
                Personalized advice on life <br/>
                and health insurance. No spam <br/>
                and no mis-selling. 
            </p>
        </div>
      </div>
    </div>
  );
}
export default Universe;
