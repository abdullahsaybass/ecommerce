import React from 'react'

const Slide3 = (props) => {
  return (
    <div className='product-slider3-container'>
        <div className='product-slider3-wrapper'>
                {props.images}
                <h2>{props.title}</h2>
                <p>{props.p1}<span>{props.p2}s</span>{props.p3}</p>
            <div className='slider3-ratings'>
                {props.rating}
            </div>
            <div>
                <h3>{props.price}<span>{props.currency}</span></h3>
                <h5>{props.strikeprice}</h5>
            </div>
            {props.button}
        </div>
    </div>
  )
}

export default Slide3