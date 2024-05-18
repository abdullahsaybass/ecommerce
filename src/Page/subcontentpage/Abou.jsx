import React from 'react'

const Abou = ({isFirst,...props}) => {
    
  return (
   
      <div className='product-slider-container'>
      <div className={`carousel-item ${isFirst ? 'carousel-first-item' : ''}`}>
            <div className='product-slider-wrapper'>
                <div>
                    {props.firstImg}
                    <h3>{props.h3F}</h3>
                </div>
              
                <p>{props.pF}<span>{props.spanF}</span>{props.pS}</p>
    
                <div className='review-people'>
                  <div>
                    {props.secImg}
                    <h4>{props.h4F}<span>{props.spanS}</span></h4>
                  </div>
                  <div className='rating-orange'>
                    {props.rating}
                  </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Abou