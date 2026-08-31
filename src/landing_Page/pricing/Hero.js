import React from 'react'

const Hero = () => {
  return (
    <div className='container text-center mt-5'>
      <div className='row mt-5 mb-5 '>
        <h1>Charges</h1>
        <p>List of all charges and taxes</p>
        <div className='col-4'>
          <img src='media/pricing0.svg'></img>
          <h3>Free equity delivery</h3>
          <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className='col-4'>
          <img src='media/other-trades.svg'></img>
          <h3 >Intraday and F&O trades</h3>
          <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className='col-4'>
          <img src='media/pricing0.svg'></img>
          <h3>Free direct MF</h3>
          <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
          
        </div>
      </div>
     
    </div>
  )
}

export default Hero
