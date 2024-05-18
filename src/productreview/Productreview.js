import React, { useState } from 'react'
import '../productreview/Style.css'
import Rating from '@mui/material/Rating';
import BlackImg from '../Assest/sneakerblack (5).jpg'
import { Link } from 'react-router-dom';
import { SlArrowRightCircle } from "react-icons/sl";
import Review from './Review';

const Productreview = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () =>{
        setIsOpen(!isOpen);
    }
  return (
    <section className='product-review-container'>
        <div className="product-review-wrapper">
            <h1>Customer Reviews</h1>
            <div>
            <div>
                <Rating name="no-value" value={null}/>
                <p>Be the first to write a review</p>
            </div>
            <div className={`review-open ${isOpen ? 'open' : ''}`} >
                <button onClick={toggleAccordion} > {isOpen ? 'Cancel Reivew' : 'Write a reivew'}</button>
                {isOpen && (
                         <Review />)}
            </div>
            </div>
            <div>
                <div>
                    <h1>Trendmark</h1>
                    <h2>Sneakers 2023 Limited Edition</h2>
                    <p>The attention to detail is evident in every stitch and contour, ensuring a perfect fit and 
                    unmatched comfort. The carefully selected materials not only enhance their durability but also 
                    add a touch of sophistication to any outfit. Whether you're dressing up for a formal occasion 
                    or going for a casual outing, these shoes effortlessly merge versatility and 
                    timeless elegance.</p>
                    <li> <Link to = "/"style = {{fontSize:'12px',lineHeight:'12px',fontWeight:'400'}}>SHOW MORE <SlArrowRightCircle style={{marginLeft:'10px', backgroundColor:'#f5a280',borderRadius:'50px'}}/></Link></li>
                    
                </div>
                <img src = {BlackImg} alt="sneaker-black" />
            </div>
            <div>
                <img src = {BlackImg} alt="sneaker-black" />
                <div>
                    <h1>Description:</h1>
                    <p>With their sleek design and superior quality, these shoes are bound to become your go-to choice,
                    exuding confidence and leaving a lasting impression with every stride. Elevate your footwear 
                    collection with these extraordinary shoes that redefine fashion and embody the perfect blend of 
                    style and functionality.</p>
                    <p>The attention to detail is evident in every stitch and contour, ensuring a perfect fit and 
                    unmatched comfort. The carefully selected materials not only enhance their durability but also 
                    add a touch of sophistication to any outfit. Whether you're dressing up for a formal occasion 
                    or going for a casual outing, these shoes effortlessly merge versatility and 
                    timeless elegance.</p>
                </div>
            </div>

        </div>
        
    </section>
  )
}

export default Productreview