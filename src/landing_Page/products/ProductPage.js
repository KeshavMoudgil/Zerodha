import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'

const ProductPage = () => {
  return (
    <div>
      <Hero/>
      <LeftSection ProductName="Kite" ProductDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
      ImageUrl="media/Kite.png" tryDemo="Try Demo →" learnMore="Learn More →" googlePlay="" appStore=""/>
      <RightSection ProductName="Console" ProductDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."  imageUrl="media/console.png" linkName="Learn More"/>
      <LeftSection ProductName="Coin" ProductDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
      ImageUrl="media/coin.png" tryDemo="Coin →"  googlePlay="" appStore=""/>
      <RightSection ProductName="Kite Connect API" ProductDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."  imageUrl="media/kiteconnect.png" linkName="Kite Connect"/>
      <LeftSection ProductName="Varsity Mobile" ProductDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
      ImageUrl="media/varsity.png" googlePlay="" appStore=""/>
      <Universe/>
    </div>
  )
}

export default ProductPage
