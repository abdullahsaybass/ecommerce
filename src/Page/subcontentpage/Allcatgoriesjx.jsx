import React from 'react'
import '../subcontentpage/Allcatgoriescs.css';


const Allcatgoriesjx = (props) => {
  return (
    <section className='all-catgories-products'>
        <div className='categories-products'>
            <div className='categories-products-container'>
                <p>{props.title}</p>
                <h2>{props.titleHead}</h2>
                <h3>{props.model}</h3>
                <p>{props.para1}
                <span>{props.para2}</span> 
                <span>{props.para3}</span>
                {props.para4}</p>
                {props.button}
                {props.img}
              
            </div>
        </div>
    </section>
  )
}

export default Allcatgoriesjx