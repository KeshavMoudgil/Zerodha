import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='container mt-5 mb-5'>
      <div className='row  text-center'>
        <img src='media/homeHero.png' alt='hero Image'></img>
        <h1> Invest In Everything </h1>
        <p>Online Platform to invest in mutualFunds , Stocks and many more</p>
        <Link to='/signup'>
        <button  style={{width:"20%",margin:"0 auto"}}
         type='button' className='mt-3 mb-5 btn btn-primary'>Signup</button>
        </Link>
        
      </div> 
    </div>
  )
}

export default Hero
