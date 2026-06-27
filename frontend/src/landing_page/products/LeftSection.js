import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesc,
  tryDemo,
  learnMore,
  googlePay,
  appStore,
}) {
  return (
    <div className='container ps-3'>
        <div className='row'>
            <div className='col'>
                <img src={imageURL}/>
            </div>
            <div className='col text-muted m-5 px-3' style={{lineHeight:'2rem'}}>
                <h3 className='ps-5 pb-3'>{productName}</h3>
                <p className='ps-5'>{productDesc}</p>
                <div className='ps-5 mb-4'>
                    <a style={{textDecoration:'none'}}  href={tryDemo}>Try demo <i class="fa-solid fa-arrow-right"></i></a>
                    <a style={{textDecoration:'none'}} className='p-5 mb-5' href={learnMore}>Learn more <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='ps-5'>
                    <a href={googlePay}><img src='media/images/googlePlayBadge.svg'/></a>
                    <a className='ps-3' href={appStore}><img src='media/images/appstoreBadge.svg'/></a>
                </div>
            </div>
        </div>
    </div>
);
}
export default LeftSection;
