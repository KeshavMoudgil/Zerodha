import React from 'react'

const Awards = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6'>
          <img src='media/largestBroker.svg'></img>
        </div>
        <div className='col-6'>
          <h1>Largest Stock Broker In India</h1>
          <p>2+ million Zerodha clients contribute to over 15% of all retails order in India</p>
          <div className=' mt-5 d-flex justify-content-evenly'>
          <ul>

            <li>Future & Options</li>
            <li>Stocks & Ipo's</li>
            <li>Comodity Derivative</li>
          </ul>  
          <ul>
            <li>Currency Derivative</li>
             <li>Direct Multual Funds</li>
             <li>Bonds and Govt.Schemes</li>
          </ul>
        </div>

        <img className='mb-5 mt-2' style={{width:"90%"}} src='media\pressLogos.png'></img>
        </div>
        
      </div>
    </div>
  )
}

export default Awards
