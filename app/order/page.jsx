import React from 'react'
import LandingHeader from '../_components/LandingHeader'
import OrderPart from '../_components/OrderPart'
import Footer from '../_components/Footer';

const Order = () => {
  return (
    <div className='mt-10'>
        <LandingHeader/>
        <OrderPart/>
        <Footer/>
    </div>
  )
}

export default Order