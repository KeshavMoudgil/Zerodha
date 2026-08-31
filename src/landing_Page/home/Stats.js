import React from 'react'

const Stats = () => {
  return (
    <div className='container mb-5 mt-5'>
      <div className='row'>
        <div className=' p-5 mt-5 col-6'>
          <h1 className='mb-5'>Trust With Confidence</h1>
          
          <h2>Customer First Always</h2>
          <p>That's why we have 1.3 crores customers trust Zerodha with 3.4+ crores for Investment</p>
          
          <h3>No Spam or gimmicks</h3>
          <p>High quality app that helps to work with your own pace without any spaming</p>
          
          <h4>Zerodha Universe</h4>
          <p>
            Not trust an app but with a whole EcoSystem. Our investments in 30+ fintech startups offers you tailored services according to your needs.
          </p>

          <h5>Do better with Money</h5>
          <p>
            with initiatives like Nudge and and Kill Switch, we don't just facilitate transactions, but actively helps you to dod better with your Money.
          </p>

        </div>
        <div className=' ml-5 col-6'>
          <img className='ml-5' style={{width:"90%"}} src='media/ecosystem.png'></img>
          
        <div className=' p-5 mt-4'>
          <a style={{textDecoration:"none"}} className='mx-5' href='/'>explore our products
           <i class="fa-solid fa-arrow-right"></i></a>
          <a style={{textDecoration:"none"}} className='mx-5' href='/'>try kite <i class="fa-solid fa-arrow-right"></i></a>
        </div>

        </div>
      </div>
     
    </div>
  )
}

export default Stats
