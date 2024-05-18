import React from 'react'

const Homeesubs = (props) => {
  return (
    <section>
        <div className='sneakers-section'>
          <div className="sneakkers-container"> 

              <div className='sneakers-part-1'>
                  {props.button}

                <div className="snakers-three-icon">
                    {props.icon1}
                    {props.icon2}
                    {props.icon3}
                </div>

                <div className='sneaker-img2'>
                  {props.img1}
                </div>

                  {props.rating}
                  <h1>{props.h1title} <br />{props.brt1}</h1>
                  <h4>{props.h4title}</h4>
                  <p>{props.ptitle}<br /> {props.brt2}<br /> {props.brt3}</p>

                <div className='snakers-shoe-images'>
                  {props.img2}
                  {props.img3}
                  {props.img3}
                </div>

                <div className='sneakers-symbols'>
                  <div className='addtion-icon1'>
                    {props.addicon1}
                  </div>
                  <div className='addtion-icon2'>
                  {props.addicon2}
                  </div>
                  <div className='addtion-icon3'>
                  {props.addicon3}
                  </div>
                </div>

                <div className='snakers-shoe-sizes'>
                    <h4>{props.h4title2} <br />{props.brt5}</h4>
                    <p>{props.ptitle2}</p>
                    <p>{props.ptitle3}</p>
                </div>

                <div className='sneakers-shoe-price'>
                  <h3>{props.h3title3}</h3>
                  {props.button2}
                </div>
              </div>
          </div>
        </div>
      </section>
  )
}

export default Homeesubs