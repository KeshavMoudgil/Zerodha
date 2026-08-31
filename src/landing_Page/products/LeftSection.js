import React from 'react'

const LeftSection = ({ProductName,ProductDescription,ImageUrl,tryDemo,learnMore,googlePlay,appStore}) => {
  return (
    <div className='container mt-5 mb-5'>
       <div className='row'>
        <div className='col'>
          <img  src={ImageUrl}></img>
        </div>
        <div className='col p-5 ms-5'>
          <h1>{ProductName}</h1>
          <p>{ProductDescription}</p>
          <div>
            <a  href={tryDemo} style={{textDecoration:"none"}}>{tryDemo}</a>
            <a  style={{marginLeft:"50px", textDecoration:"none"}} href="">{learnMore}</a>
          </div>
          <div className='mt-3'>
            <a href={googlePlay}>
            <img src='media/googlePlayBadge.svg'></img>
          </a>
          <a style={{marginLeft:"50px"}} href={appStore}>
            <img src='media/appstoreBadge.svg'></img>
          </a>
          </div>

        </div>
       </div>
    </div>
  )
}

export default LeftSection
