import React from 'react'
import AboutPart from '../_components/AboutPart'
import LandingHeader from '../_components/LandingHeader'
import Footer from '../_components/Footer';

const AboutPage = () => {
  return (
    <div className="mt-20">
        <LandingHeader/>
        <AboutPart/>
        <Footer/>
    </div>
  )
}

export default AboutPage