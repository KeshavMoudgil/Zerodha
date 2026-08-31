import React from 'react'

const Pricing = () => {
  return (
    <div className='container mt-5 mb-5'>
      <div className='row'>
        <div className='col-4'>
          <h1 className='mb-4'>Unbetable Pricing</h1>
          <p>we pinored the concept of discount broking and price transparency in India.Flat peice and no hidden charges .

            <div className='mt-3'>
              <a style={{textDecoration:"none"}} href='/'>see pricing <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            
          </p>
        </div>
        <div className='col-2'></div>
        <div className='col-6'>
          <div className='row text-center'>
            <div className='col p-3 border '>
              <h1>₹0</h1>
              <p>Free equity delivery and direct mutual Funds</p>
            </div>
            <div className='col p-3 border '>
              <h1>₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Pricing
