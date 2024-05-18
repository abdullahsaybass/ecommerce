import React from 'react'


const Mensproducts = (props) => {
  return (
    <div>
        <section className='mens-product'>
                <div className='men-product-container'>
                  <div className='mens-wrapper'>
                    <div className='men-product-part-1'>
                        <div>
                            {props.icon1}
                            {props.icon2}
                            {props.icon3}
                        </div> 
                        <div className='rating'>
                            {props.rating}
                        </div>
                            <h1>{props.title}</h1>
                            <p>{props.para}</p>
                            <h2>{props.price}<span>{props.currency}</span></h2>
                    </div>
                    <div className='mens-products-part-2'>
                        {props.cart}
                    </div>
                    <div className='mens-products-part-3'>
                    {props.images}
                    </div>
                  </div>
                </div>
            </section>
    </div>
  )
}

export default Mensproducts