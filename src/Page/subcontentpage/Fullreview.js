import React from 'react'
import '../subcontentpage/Allcatgoriescs.css'
import Abou from '../subcontentpage/About'

const Fullreview = () => {
  return (
    <section className='product-design-setion'>
            <div className='product-design-container'>
              <div>
                  <h2>ALL PRODUCTS</h2>
                  <h1>About <span>our shoes</span></h1>
              </div>
              <Abou />
            </div>
    </section>
  )
}

export default Fullreview