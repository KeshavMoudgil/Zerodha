import React from 'react'

const RightSection = ({ProductName,ProductDescription,imageUrl,linkName}) => {
  return (
    <div className='container mt-5 mb-5 '>
      <div className='row'>
        <div className='col mt-5 p-5'>
          <h1>{ProductName}</h1>
          <p>{ProductDescription}</p>
          <a href='' style={{textDecoration:"none"}}>{linkName} →</a>
        </div>
        <div className='col mb-5'>
          <img src={imageUrl}></img>
        </div>
      </div>
      
    </div>
  )
}

export default RightSection
