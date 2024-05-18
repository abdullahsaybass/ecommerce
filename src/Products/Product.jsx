import React from 'react'
import '../Products/Style.css'

const Product = (props) => {


    
  return (
    <section className='shoes-section'>
        <div className='shoe-container'>
                {/* <Header />
                <Nav /> */}
            <div className='shoe-wrapper'>
                <div>
                    <div className='shoe-image-container'>
                        <div style={{width: '545px'}} >
                        {props.sliderImage}
                        </div>
                    </div>
                    <div>
                        
                    <div className='shoe-content-container' >
                        {props.rating}
                        {props.ratingIcon}
                        <p>{props.ratingTitle}</p>
                    </div>
                    <div>
                        <h1>{props.title}</h1>
                        <h2>{props.title2}</h2>
                    </div>
                    <div>
                        <div>
                            <h5>{props.productTitle}</h5>
                            <p>{props.size}</p>
                        </div>
                        <div>
                            <h5>{props.category}</h5>
                            <p>{props.categoryName}</p>
                        </div>
                    </div>

                        <p>{props.para}</p>
                    <div>
                        <h5>{props.colorTitle}<span>{props.colorTitleSpan}</span></h5>
                        <div className='cement'></div>
                        <div className='yellow'></div>
                        <div className='green'></div>
                    </div>
                    <div>
                        {props.sizeIcon}
                        <p>{props.sizePara}</p>
                    </div>
                        <p>{props.quantitypara}</p>
                    <div>
                        <p>{props.minus}</p>
                        <p>{props.number}</p>
                        <p>{props.plus}</p>
                    </div>
                    <div>
                        <h1>{props.price}<span>{props.priceSpan}</span></h1>
                        {props.cartButton}
                    </div>
                        {props.buyButton}
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Product