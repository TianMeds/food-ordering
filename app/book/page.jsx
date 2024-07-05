import React from 'react'
import BookPart from '../_components/BookPart'
import LandingHeader from '../_components/LandingHeader'
import Footer from '../_components/Footer';

const BookPage = () => {
  return (
    <div className='mt-20'>
        <LandingHeader/>
        <BookPart/>
        <Footer/>
    </div>
  )
}

export default BookPage