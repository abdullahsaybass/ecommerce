import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Rating from '@mui/material/Rating';
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import productimg1 from '../Assests/product-img1.webp';
import './Product.css';
import sliderproduct2 from '../Assests/silder-product-img2.webp';
import sliderproduct3 from '../Assests/slider-product-image-3.webp';
import sliderproduct4 from '../Assests/slider-product-image-4.webp';
import sliderproduct5 from '../Assests/slider-product-image-5.webp';
import sliderproduct6 from '../Assests/slider-product-image-6.webp';
import Slidingproduct from './Slidingproduct';

const Slideproducts = () => {

  const productData = [
    {
      id:1,
      title: "Wynk Textured Low-...",
      sizename: "AVAILABLE",
      sizez:"SIZE",
      size : 32,
      size2 : 34,
      size3 : 36,
      price : "600.00",
      currency : "USD",
      strikePrice : "800.00 USD",
      icon1: <CiHeart style ={{fontSize: '18px',verticalAlign: 'middle', color: 'black'}}/>,
      icon2: <IoEyeOutline style ={{fontSize: '18px',verticalAlign: 'middle', color: 'black'}} />,
      icon3:<TbArrowsDoubleNeSw  style ={{fontSize: '18px',verticalAlign: 'middle', color: 'black'}}/>,
      rating:  <Rating name="no-value" value={null} />,
      cart: <button>ADD TO CART <CiShoppingCart style={{ fontSize: '20px',verticalAlign: 'middle' }}/></button>,
      images: <img src ={productimg1} alt='slider-product-image2' />,
    },
    {
      id:2,
      title: "Laced Jogers For Men...",
      sizename: "AVAILABLE",
      sizez:"SIZE",
      size : 32,
      size2 : 34,
      size3 : 36,
      price : "800.00",
      currency : "USD",
      strikePrice : "800.00 USD",
      icon1: <CiHeart style ={{fontSize: '18px',verticalAlign: 'middle', color: 'black'}}/>,
      icon2: <IoEyeOutline style ={{fontSize: '18px',verticalAlign: 'middle', color: 'black'}} />,
      icon3:<TbArrowsDoubleNeSw  style ={{fontSize: '18px',verticalAlign: 'middle', color: 'black'}}/>,
      rating:  <Rating name="no-value" value={null} />,
      cart: <button>ADD TO CART <CiShoppingCart style={{ fontSize: '20px',verticalAlign: 'middle' }}/></button>,
      images: <img src ={sliderproduct2} alt='slider-product-image2' />,
    },
    {
      id:3,
      title: "Sports Shoe For High...",
      sizename: "AVAILABLE",
      sizez:"SIZE",
      size : 32,
      size2 : 34,
      size3 : 36,
      price : "500.00",
      currency : "USD",
      strikePrice : "500.00 USD",
      icon1: <CiHeart style ={{fontSize: '18px',verticalAlign: 'middle', color: 'black' }}/>,
      icon2: <IoEyeOutline style ={{fontSize: '18px',verticalAlign: 'middle', color: 'black' }} />,
      icon3:<TbArrowsDoubleNeSw  style ={{fontSize: '18px',verticalAlign: 'middle', color: 'black'}}/>,
      rating:  <Rating name="no-value" value={null} />,
      cart: <button>ADD TO CART <CiShoppingCart style={{ fontSize: '20px',verticalAlign: 'middle' }}/></button>,
      images: <img src ={sliderproduct3} alt='slider-product-image2' />,
    },
    {
      id:4,
      title: "Literide Perforated...",
      sizename: "AVAILABLE",
      sizez:"SIZE",
      size : 32,
      size2 : 34,
      size3 : 36,
      price : "659.00",
      currency : "USD",
      strikePrice : "800.00 USD",
      icon1: <CiHeart style ={{fontSize: '18px',verticalAlign: 'middle', color: 'black'}}/>,
      icon2: <IoEyeOutline style ={{fontSize: '18px',verticalAlign: 'middle', color: 'black'}} />,
      icon3:<TbArrowsDoubleNeSw  style ={{fontSize: '18px',verticalAlign: 'middle', color: 'black'}}/>,
      rating:  <Rating name="no-value" value={null} />,
      cart: <button>ADD TO CART <CiShoppingCart style={{ fontSize: '20px',verticalAlign: 'middle' }}/></button>,
      images: <img src ={sliderproduct4} alt='slider-product-image2' />,
    },
    {
      id:5,
      title: "Titanium Lace-Up...",
      sizename: "AVAILABLE",
      sizez:"SIZE",
      size : 32,
      size2 : 34,
      size3 : 36,
      price : "360.00",
      currency : "USD",
      strikePrice : "800.00 USD",
      icon1: <CiHeart style ={{fontSize: '18px',verticalAlign: 'middle', color: 'black'}}/>,
      icon2: <IoEyeOutline style ={{fontSize: '18px',verticalAlign: 'middle', color: 'black'}} />,
      icon3:<TbArrowsDoubleNeSw  style ={{fontSize: '18px',verticalAlign: 'middle', color: 'black'}}/>,
      rating:  <Rating name="no-value" value={null} />,
      cart: <button>ADD TO CART <CiShoppingCart style={{ fontSize: '20px',verticalAlign: 'middle' }}/></button>,
      images: <img src ={sliderproduct5} alt='slider-product-image2' />,
    },
    {
      id:6,
      title: "Omax Lace-Up Sports...",
      sizename: "AVAILABLE",
      sizez:"SIZE",
      size : 32,
      size2 : 34,
      size3 : 36,
      price : "500.00",
      currency : "USD",
      strikePrice : "800.00 USD",
      icon1: <CiHeart style ={{fontSize: '18px',verticalAlign: 'middle', color: 'black'}}/>,
      icon2: <IoEyeOutline style ={{fontSize: '18px',verticalAlign: 'middle', color: 'black'}} />,
      icon3:<TbArrowsDoubleNeSw  style ={{fontSize: '18px',verticalAlign: 'middle', color: 'black'}}/>,
      rating:  <Rating name="no-value" value={null} />,
      cart: <button>ADD TO CART <CiShoppingCart style={{ fontSize: '20px',verticalAlign: 'middle' }}/></button>,
      images: <img src ={sliderproduct6} alt='slider-product-image2' />,
    } 
  ]
  const product = productData.map((item) => <Slidingproduct title = {item.title} sizename = {item.sizename} sizez ={item.sizez} size = {item.size} size2 = {item.size2} size3 = {item.size3}
  price = {item.price} currency = {item.currency} strikePrice = {item.strikePrice} icon1 = {item.icon1}
  icon2 = {item.icon2} icon3 = {item.icon3} rating = {item.rating} cart = {item.cart} images = {item.images}/>)

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
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
    <div className='Slideproducts'>
        <Carousel responsive={responsive}>
          {product}
        </Carousel>
    </div>
  )
}

export default Slideproducts