import React from "react";

const Universe = () => {
  return (
    <div className="container mt-5 mb-5 text-center">
      <h1>The Zerodha Universe</h1>
      <p>
        Extend your trading and investment experience even further with our
        partner platforms.
      </p>
      <div className="row mt-4">
        <div className="col-4">
          <img style={{ width: "45%" }} src="media/zerodhaFundhouse.png"></img>
          <p className="mt-3">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4">
          <img style={{ width: "60%" }} src="media/sensibullLogo.svg"></img>
          <p className="mt-4">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4">
          <img style={{ width: "35%" }} src="media/dittoLogo.png"></img>
          <p className="mt-3">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <img style={{ width: "33%" }} src="media/streakLogo.png"></img>
          <p className="mt-3">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col">
          <img style={{ width: "35%" }} src="media/smallcaseLogo.png"></img>
          <p className="mt-4">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
      </div>
      <button  style={{width:"20%",margin:"0 auto"}} type='button' className='mt-5 mb-5 btn btn-primary'>Signup</button>
    </div>
  );
};

export default Universe;
