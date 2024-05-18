import React from 'react'
import './Product.css';

const Slidingproduct = (props) => {
  return (
    <div>
        <div className='slider-products'>
            <div className='product-carousel'>
              <div className='product-container'>

                <div className='product-carousel-part-1'>
                  <div className='product-title-rating'>
                    <h3>{props.title}</h3>
                </div>

                  <div className='product-shoe-sizes'>
                      <h4>{props.sizename} <br />{props.sizez}:</h4>
                      <p>{props.size}</p>
                      <p>{props.size2}</p>
                      <p>{props.size3}</p>
                  </div>

                  <div className='product-price'>
                    <h3>{props.price} <span className='usd' >{props.currency}</span></h3>
                    <h4>{props.strikePrice}</h4>
                  </div>

                  <div className="product-show-symbol">
                    {props.icon1}
                    {props.icon2}
                    {props.icon3}
                </div>              
                </div>
                <div className='product-carousel-part-2'>
                  {props.cart}
                </div>
                <div className='product-carousel-part-3'>
                  {props.images}
                </div>
                <div className='product-carousel-part-4'>
                 {props.rating}
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Slidingproduct