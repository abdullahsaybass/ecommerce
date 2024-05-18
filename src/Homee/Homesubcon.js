import React from 'react'
import { IoIosAdd } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import Rating from '@mui/material/Rating';
import sneakersmallimg1 from '../Page/Assests/sneakers-small-img.avif';
import sneakersmallimg2 from '../Page/Assests/sneakers-small-img2.avif';
import sneakersmallimg3 from '../Page/Assests/sneakers-small-img3.avif'
import { CiShoppingCart } from "react-icons/ci";
import sneakerimg2 from '../Page/Assests/Sneaker-img2.avif';
import './Homee.css'
import './Homeesubs';
import Homeesubs from './Homeesubs';

const homesub = () => {
    const homeeSubData = [
        {
            button: <button>sneakers</button>,
            icon1:<CiHeart style ={{fontSize: '20px',verticalAlign: 'middle',marginRight:'5px', color: '#534a37', backgroundColor: '#cdcdcd',borderRadius: '50px'}}/>,
            icon2:<IoEyeOutline style ={{fontSize: '20px',verticalAlign: 'middle',marginRight:'5px', color: '#534a37', backgroundColor: '#cdcdcd',borderRadius: '50px'}} />,
            icon3:<TbArrowsDoubleNeSw  style ={{fontSize: '20px',verticalAlign: 'middle',marginRight:'5px', color: '#534a37', backgroundColor: '#cdcdcd',borderRadius: '50px'}}/>,
            img1:<img src ={sneakerimg2} alt = 'snakerimg2' />,
            rating:<Rating name="half-rating-read" defaultValue={5} precision={5} readOnly />,
            h1title:"Barley Textured Panelled Low-Top",
            brt1:"Shoes",
            h4title:"SNEAKERS 2023 LIMITED EDITION",
            ptitle:"Elevate your fashion game with our exquisite collection of",
            brt2: "shoes. Crafted with precision and attention to detail,",
            brt3:"these shoes combine comfort and elegance to give...",
            img2:<img src = {sneakersmallimg1} alt="Logo"class="sneakers-small-image-1"/>,
            img3:<img src = {sneakersmallimg2} alt="Logo"class="neakers-small-image-2"/>,
            img4:<img src = {sneakersmallimg3} alt="Logo"class="neakers-small-image-3"/>,
            addicon1:<IoIosAdd className="sneaker-icon" />,
            addicon2:<IoIosAdd className="sneaker-icon" />,
            addicon3:<IoIosAdd className="sneaker-icon" />,
            h4title2:"AVAILABLE",
            brt4: "SIZES:",
            ptitle2:"32",
            ptitle3:"34",
            h3title3:"780.00 USD",
            button2:<button>ADD TO CART <CiShoppingCart style={{ fontSize: '20px',verticalAlign: 'middle' }}/></button>,
        },
    ]

    const homeData = homeeSubData.map((items) => <Homeesubs button ={items.button} icon1 = {items.icon1} icon2 = {items.icon2}
    icon3 = {items.icon3} img1={items.img1} rating={items.rating} h1title={items.h1title} brt1 ={items.brt1}h4title={items.h4title} ptitle={items.ptitle} brt2 ={items.brt2} brt3 ={items.brt3}
    img2 = {items.img2} img3 = {items.img3} img4 = {items.img4} addicon1 = {items.addicon1} addicon2={items.addicon2} addicon3={items.addicon3}
    h4title2={items.h4title2} brt4 ={items.brt4} ptitle2={items.ptitle2} ptitle3={items.ptitle3} h3title3={items.h3title3} button2={items.button2}
    img5={items.img5}/>)
  return (
       <div>
        {homeData}
       </div>
  )
}

export default homesub