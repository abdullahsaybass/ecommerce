import React from 'react'
import logo from '../Assests/logo-img.png';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';

const Patners = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section className='product-patners-image'>
        <Carousel responsive={responsive}>
          <img src = {logo} alt = "logo-patners-img" />
          <img src = {logo} alt = "logo-patners-img" />
          <img src = {logo} alt = "logo-patners-img" />
          <img src = {logo} alt = "logo-patners-img" />
          <img src = {logo} alt = "logo-patners-img" />
        </Carousel>    
    </section>
  )
}

export default Patners