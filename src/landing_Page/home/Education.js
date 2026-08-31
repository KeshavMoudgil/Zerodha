import React from 'react'

const Education = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6'>
          <img src='media/education.svg'></img>
          </div> 
        <div className='col-6'>
          <div className='mb-5'>
            <h1>Free and open source market education</h1>
          <p>Varsaty, the largest online stock market education in the world covering everything from basic to advanced trading. </p>
          <div className='mt-3'>
              <a style={{textDecoration:"none"}} href='/'>Versity<i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
          <p>Trading Q&A , the most active trading and investment in India for all of the individuals </p>
          <div className='mt-3'>
              <a style={{textDecoration:"none"}} href='/'>Trading Q&A <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Education
