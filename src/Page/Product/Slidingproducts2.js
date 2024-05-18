import React from 'react'
import Rating from '@mui/material/Rating';
import '../Product/Slidingproducts2s.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Addtocart from "../Buttons/Addtocart";
import metrorace from '../Product/images/mensprooductimg/metro-race-slider2.avif'
import omaxsports from '../Product/images/mensprooductimg/omax-sports-slider2.avif'
import titanium from '../Product/images/mensprooductimg/titanium-sports-slider2.avif'
import vaccumlace from '../Product/images/mensprooductimg/vaccum-lace-slider2.avif'
import Slidingproj from '../Product/Slidingproj'
import greenshoe from '../Product/images/mensprooductimg/green-shoe-slider2.avif'
import barley from '../Product/images/mensprooductimg/Barley-slider2.avif'
import europlace from '../Product/images/mensprooductimg/europa-lace-slider2.avif'



const Slidingproducts2 = () => {
  const productData = [
    {
      id:1,
      title: "Barley Textured Panelled Low-...",
      p1:"Elevate your fashion game with",
      p2:"our exquisite collection of shoes.",
      p3: "Crafted with precision",
      sizename: "AVAILABLE",
      sizez:"SIZE",
      size : 32,
      size2 : 34,
      size3 : 36,
      price : "688.00",
      currency : "USD",
      rating:  <Rating name="no-value" value={null} />,
      cart: <Addtocart />,
      images: <img src ={barley} alt='barley-slider2' />,
    },
    {
      id:2,
      title: "Wynk Textured Low-...",
      p1:"Our shoes are not just footwear;",
      p2:"they are an extension of your",
      p3: "personality. With an eclectic mi..",
      sizename: "AVAILABLE",
      sizez:"SIZE",
      size : 32,
      size2 : 34,
      size3 : 36,
      price : "600.00",
      currency : "USD",
      rating:  <Rating name="no-value" value={null} />,
      cart: <Addtocart />,
      images: <img src ={greenshoe} alt='green-shoe-slider2' />,
    },
    {
      id:3,
      title: "Meteor Lace-Up Running Shoes...",
      p1:"As civilizations began to",
      p2:"develop, thong sandals",
      p3: "precursors to the modern flip-",
      sizename: "AVAILABLE",
      sizez:"SIZE",
      size : 32,
      size2 : 34,
      size3 : 36,
      price : "599.00",
      currency : "USD",
      rating:  <Rating name="no-value" value={null} />,
      cart: <Addtocart />,
      images: <img src ={metrorace} alt='metro-race-slider2' />,
    },
    {
      id:4,
      title: "Titanium Lace-Up Sports-...",
      p1:"In another building I was shown",
      p2:"his manufactory of shoes,which,",
      p3: "ke the other, is full of ingenuity,",
      sizename: "AVAILABLE",
      sizez:"SIZE",
      size : 32,
      size2 : 34,
      size3 : 36,
      price : "360.00",
      currency : "USD",
      rating:  <Rating name="no-value" value={null} />,
      cart: <Addtocart />,
      images: <img src ={titanium} alt='titanium-slider2' />,
    },
    {
      id:5,
      title: "Omax Lace-Up Sports Shoes-...",
      p1:"Our shoes are made for the",
      p2:" explorer in you. From rugged",
      p3: "hiking boots to waterproof trail",
      sizename: "AVAILABLE",
      sizez:"SIZE",
      size : 32,
      size2 : 34,
      size3 : 36,
      price : "500.00",
      currency : "USD",
      rating:  <Rating name="no-value" value={null} />,
      cart: <Addtocart />,
      images: <img src ={omaxsports} alt='omax-slider2' />,
    },
    {
      id:6,
      title: "Vacum Lace-Up Running Shoes",
      p1:"As each man performs but one ",
      p2:"step in the process, which,",
      p3: "implies no knowledge of what,",
      sizename: "AVAILABLE",
      sizez:"SIZE",
      size : 32,
      size2 : 34,
      size3 : 36,
      price : "900.00",
      currency : "USD",
      rating:  <Rating name="no-value" value={null} />,
      cart: <Addtocart />,
      images: <img src ={vaccumlace} alt='slider-product-image2' />,
    },
    {
      id:7,
      title: "Europa Lace-Up Running Shoes",
      p1:"The earliest known shoes are",
      p2:"sagebrush bark sandals dating",
      p3: "from approximately 7000 or ",
      sizename: "AVAILABLE",
      sizez:"SIZE",
      size : 32,
      size2 : 34,
      size3 : 36,
      price : "800.00",
      currency : "USD",
      rating:  <Rating name="no-value" value={null} />,
      cart: <Addtocart />,
      images: <img src ={europlace} alt='euro-palace-slider2' />,
    }
    
  ]
   const productsSlider = productData.map((data) => <Slidingproj title = {data.title} p1 ={data.p1} p2 ={data.p2} p3 ={data.p3}
   sizename = {data.sizename} sizez ={data.sizez} size = {data.size} size2 = {data.size2} size3 = {data.size3} rating = {data.rating}
   price = {data.price} currency = {data.currency}   cart = {data.cart} images = {data.images} />)
   const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      
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
      <div class="my-custom-slider">
         <Carousel responsive={responsive}>
          {productsSlider}
        </Carousel>
      </div>  

  )
}

export default Slidingproducts2