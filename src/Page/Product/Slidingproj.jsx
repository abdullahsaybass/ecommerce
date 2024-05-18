import React from 'react'
import '../Product/Slidingproducts2s.css'

const Slidingproj = (props) => {
  return (
    
        <section className='shoe-collection-container'>
        <div className='shoes-collection-product'>
            <div className='shoe-collection-title'>
                <h4>{props.title}</h4>
                <p>{props.p1} <span>{props.p2}</span> {props.p3}</p>
            </div>
            <div className='shoe-collection-size-available'>
                <h4>{props.sizename} <span>{props.sizez}</span></h4>
                <p>{props.size}</p>
                <p>{props.size2}</p>
                <p>{props.size3}</p>
            </div>
            <div className='shoe-collection-rating'>
                {props.rating}
            </div>
            <div className='shoe-collection-price'>
                <h4>{props.price} <span>{props.currency}</span></h4>
                {props.cart}
                {props.images}
            </div>
            </div>
          </section>
    
  )
}

export default Slidingproj