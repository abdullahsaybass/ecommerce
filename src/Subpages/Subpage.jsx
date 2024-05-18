import React from 'react'
import '../Subpages/Style.css'
import { HiArrowLongLeft } from "react-icons/hi2";

const Subpage = (props) => {
  return (
    <div className='half-width'>
      <section className='about-back-container'>
        <div className='about-back-wrapper'>
          <div>
            <div className='about-back-icon'>
              <HiArrowLongLeft />
            </div>
            <h2>Back to Home</h2>
          </div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
      </section>
    </div>
  )
}

export default Subpage