import React from 'react'
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import Rating from '@mui/material/Rating';
import { CiShoppingCart } from "react-icons/ci";
import mensimg1 from '../Product/images/mensprooductimg/mens-img1.webp';
import mensimg2 from '../Product/images/mensprooductimg/mens-img2.webp';
import mensimg3 from '../Product/images/mensprooductimg/mens-img3.webp';
import mensimg4 from '../Product/images/mensprooductimg/mens-img4.webp';
import './mensproduct.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Mensproducts from './Mensproducts';

const Menproduct = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
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

      const mensProductData = [
        {
          id:1,
          icon1: <CiHeart style ={{fontSize: '18px',verticalAlign: 'middle', color: 'black', backgroundColor:'#cdcdcd',borderRadius:'50px',marginLeft:'5px'}}/>,
          icon2: <IoEyeOutline style ={{fontSize: '18px',verticalAlign: 'middle', color: 'black',backgroundColor:'#cdcdcd',borderRadius:'50px',marginLeft:'5px'}} />,
          icon3: <TbArrowsDoubleNeSw  style ={{fontSize: '18px',verticalAlign: 'middle', color: 'black',backgroundColor:'#cdcdcd',borderRadius:'50px',marginLeft:'5px'}}/>,
          rating:  <Rating name="no-value" value={null} />,
          title: "Baraley Textured Panalled Low-...",
          para:"Sneakers 2023 Limited Edition",
          price : "698.00",
          currency : "USD",
          cart: <button>ADD TO CART <CiShoppingCart style={{ fontSize: '20px',verticalAlign: 'middle' }}/></button>,
          images: <img src ={mensimg1} alt='mens-img-1' />
        },
        {
          id:2,
          icon1: <CiHeart style ={{fontSize: '18px',verticalAlign: 'middle', color: 'black',backgroundColor:'#cdcdcd',borderRadius:'50px',marginLeft:'5px'}}/>,
          icon2: <IoEyeOutline style ={{fontSize: '18px',verticalAlign: 'middle', color: 'black',backgroundColor:'#cdcdcd',borderRadius:'50px',marginLeft:'5px'}} />,
          icon3:<TbArrowsDoubleNeSw  style ={{fontSize: '18px',verticalAlign: 'middle', color: 'black',backgroundColor:'#cdcdcd',borderRadius:'50px',marginLeft:'5px'}}/>,
          rating:  <Rating name="no-value" value={null} />,
          title: "COURT VISION Lace-up Sneakers-...",
          para:"Sneakers 2023 Limited Edition",
          price : "851.00",
          currency : "USD",
          cart: <button>ADD TO CART <CiShoppingCart style={{ fontSize: '20px',verticalAlign: 'middle' }}/></button>,
          images: <img src ={mensimg2} alt='mens-img-2' />
        },
        {
          id:3,
          icon1: <CiHeart style ={{fontSize: '18px',verticalAlign: 'middle', color: 'black',backgroundColor:'#cdcdcd',borderRadius:'50px',marginLeft:'5px'}}/>,
          icon2: <IoEyeOutline style ={{fontSize: '18px',verticalAlign: 'middle', color: 'black',backgroundColor:'#cdcdcd',borderRadius:'50px',marginLeft:'5px'}} />,
          icon3:<TbArrowsDoubleNeSw  style ={{fontSize: '18px',verticalAlign: 'middle', color: 'black',backgroundColor:'#cdcdcd',borderRadius:'50px',marginLeft:'5px'}}/>,
          rating:  <Rating name="no-value" value={null} />,
          title: "Omax Lace-up Sports Shoes",
          para:"Sneakers 2023 Limited Edition",
          price : "500.00",
          currency : "USD",
          cart: <button>ADD TO CART <CiShoppingCart style={{ fontSize: '20px',verticalAlign: 'middle' }}/></button>,
          images: <img src ={mensimg3} alt='mens-img-3' />
        },
        {
          id:4,
          icon1: <CiHeart style ={{fontSize: '18px',verticalAlign: 'middle', color: 'black',backgroundColor:'#cdcdcd',borderRadius:'50px',marginLeft:'5px'}}/>,
          icon2: <IoEyeOutline style ={{fontSize: '18px',verticalAlign: 'middle', color: 'black',backgroundColor:'#cdcdcd',borderRadius:'50px',marginLeft:'5px'}} />,
          icon3:<TbArrowsDoubleNeSw  style ={{fontSize: '18px',verticalAlign: 'middle', color: 'black',backgroundColor:'#cdcdcd',borderRadius:'50px',marginLeft:'5px'}}/>,
          rating:  <Rating name="no-value" value={null} />,
          title: "Europa Lace-Up Running Shoes-...",
          para:"Sneakers 2023 Limited Edition",
          price : "800.00",
          currency : "USD",
          cart: <button>ADD TO CART <CiShoppingCart style={{ fontSize: '20px',verticalAlign: 'middle' }}/></button>,
          images: <img src ={mensimg4} alt='mens-img-4' />
        }
      ]

      const menProduct = mensProductData.map((items) => <Mensproducts icon1={items.icon1} icon2={items.icon2} icon3={items.icon3}
      rating ={items.rating} title = {items.title} para = {items.para} price = {items.price} currency = {items.currency} cart ={items.cart}
      images ={items.images}/>)
  return (
    <div className='MensProduct'>
    <Carousel responsive={responsive}>
      {menProduct}
    </Carousel>
  </div>   
  )
}

export default Menproduct