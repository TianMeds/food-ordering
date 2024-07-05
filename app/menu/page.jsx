import React from 'react'
import MenuPart from '../_components/MenuPart';
import LandingHeader from '../_components/LandingHeader'
import Footer from '../_components/Footer';

const page = () => {
  return (
    <div className='mt-20'>
      <LandingHeader/>
      <MenuPart/>
      <Footer/>
    </div>
  )
}

export default page