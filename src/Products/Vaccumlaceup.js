import React from 'react'
import Header from '../Header/Header'
import Nav from '../Header/Nav'
import {productData} from './Products'
import Footer from '../Footer/Footer'
import Productreview from '../productreview/Productreview'
import Fullreview from '../Page/subcontentpage/Fullreview'


const Vaccumlaceup = () => {
  return (
    <section className='Blucershoe-section'>
        <div className='Blucershoe-container'>
                <Header />
                <Nav />
            <div className='Blucershoe-wrapper'>
                <div>
                {productData[11]}
                </div>
            </div>
            <Productreview />
            <Fullreview />
            <Footer />
        </div>
        
    </section>
  )
}

export default Vaccumlaceup