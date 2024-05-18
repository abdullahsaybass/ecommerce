import React from 'react'
import spritshoeimg from '../Assests/sprit-yoga-rose-image.avif'
import Rating from '@mui/material/Rating';
import Addtocartl from '../Buttons/Addtocartl';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Slide3 from './Slide3';
import lacedjogers from '../Assests/Laced-jogers-men.avif';
import sportshoe from '../Product/images/mensprooductimg/Sports-Shoe-High-quality.avif';
import metrorace from '../Product/images/mensprooductimg/metro-race-slider2.avif'
import vaccumlace from '../Product/images/mensprooductimg/vaccum-lace-slider2.avif'
import euroshoe from '../Product/images/mensprooductimg/europa-lace-slider2.avif'
import omaxlace from '../Product/images/mensprooductimg/omax-sports-slider2.avif'


const Slider3 = () => {
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

    const slider3Data = [
      {
        id : 1,
        images: <img src ={spritshoeimg} alt='sprit-yoga-rose-img' />,
        title : "Sprite Yoga Softy Set",
        p1: "In medieval times shoes could be",
        p2: "up to two feet long, with their toes",
        p3: "sometimes filled with hair, wool..",
        rating: <Rating name="no-value" value={null} />,
        price: "500.00 ",
        currency:"USD",
        strikeprice: "600.00 USD",
        button:<Addtocartl />,
      },
      {
        id : 2,
        images: <img src ={lacedjogers} alt='laced-jogers-for-men' />,
        title : "Laced Joggers for Men",
        p1: "empower you with every step ",
        p2: "up to two feet long, with their toes",
        p3: "With a focus on quality materials..",
        rating: <Rating name="no-value" value={null} />,
        price: "800.00 ",
        currency:"USD",
        strikeprice: "",
        button:<Addtocartl />,
      },
      {
        id : 3,
        images: <img src ={sportshoe} alt='sports-shoe-high-quality' />,
        title : "Sports Shoes of High Quality",
        p1: "Embrace classic sophistication",
        p2: "with our timeless shoe collection.",
        p3: "Inspired by the fashion icons of..",
        rating: <Rating name="no-value" value={null} />,
        price: "500.00 ",
        currency:"USD",
        strikeprice: "",
        button:<Addtocartl />,
      },
      {
        id : 4,
        images: <img src ={metrorace} alt='metro-race-shoes' />,
        title : "Meteor Lace-Up Running Shoes",
        p1: "As civilizations began to develop,",
        p2: "thong sandals (precursors to the",
        p3: "modern flip-flop) were worn. This..",
        rating: <Rating name="no-value" value={null} />,
        price: "599.00 ",
        currency:"USD",
        strikeprice: "",
        button:<Addtocartl />,
      },
      {
        id : 5,
        images: <img src ={omaxlace} alt='sprit-yoga-rose-img' />,
        title : "Omax Lace-Up Sports Shoes",
        p1: "Our shoes are made for the ",
        p2: "explorer in you. From rugged",
        p3: "hiking boots to waterproof trail..",
        rating: <Rating name="no-value" value={null} />,
        price: "500.00 ",
        currency:"USD",
        strikeprice: "",
        button:<Addtocartl />,
      },
      {
        id : 6,
        images: <img src ={vaccumlace} alt='vaccum-lace-up-shoe' />,
        title : "Vacum Lace-Up Running Shoes",
        p1: "As each man performs but one",
        p2: "step in the process, which implies",
        p3: "no knowledge of what is done by..",
        rating: <Rating name="no-value" value={null} />,
        price: "900.00 ",
        currency:"USD",
        strikeprice: "",
        button:<Addtocartl />,
      },
      {
        id : 7,
        images: <img src ={euroshoe} alt='europa-lace-up-shoe' />,
        title : "Europa Lace-Up Running Shoes",
        p1: "The earliest known shoes are",
        p2: "sagebrush bark sandals dating",
        p3: "from approximately 7000 or 8000..",
        rating: <Rating name="no-value" value={null} />,
        price: "800.00 ",
        currency:"USD",
        strikeprice: "",
        button:<Addtocartl />,
      },
    ]

    const sliding3Product = slider3Data.map((item) => <Slide3 images = {item.images} title ={item.title} p1 ={item.p1}
    p2 ={item.p2} p3 ={item.p3} rating = {item.rating} price = {item.price} currency = {item.currency} strikeprice ={item.strikeprice}
    button = {item.button}/>)
  return (
    <section className='product-slider-3-section'>
        <Carousel responsive={responsive}>
            {sliding3Product}
        </Carousel>    
    </section>
  )
}

export default Slider3