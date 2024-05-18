import React from 'react'
import '../subcontentpage/Testproductss.css'

const Testingprod = (props) => {
  return (
    <section className='test-products-catgories'>
    <div className='test-products'>
        <div className='test-products-container'>
            <p>{props.title}</p>
            <h2>{props.titleHead}</h2>
            <h3>{props.model}</h3>
            <p>{props.para1}
            <span>{props.para2}</span> 
            {props.para3}</p>
            {props.button}         
        </div>
        <div className="shoe-wire-img">
            {props.img}
        </div>
    </div>
</section>
  )
}

export default Testingprod