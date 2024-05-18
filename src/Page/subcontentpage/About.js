import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import fullwhiteimg from '../Assests/full-white-shoe-image.webp'
import reviewimage from '../Assests/review image.webp'
import Rating from '@mui/material/Rating';
import Abou from '../subcontentpage/Abou';

const About = () => {
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

    const reviewData = [
      {
        firstImg : <img src={fullwhiteimg} alt ="full-white-img" />,
        h3F : "Walking",
        pF: "Lisa,a decicated nurse, sings",
        spanF :"praises for these shoes and their",
        pS : "remarkable comfort. she...",
        secImg : <img src = {reviewimage} alt ="review-img" />,
        h4F : "Johnson",
        spanS: "Nurse",
        rating: <Rating name="half-rating-read" defaultValue={4} precision={4} readOnly />,
      },
      {
        firstImg : <img src={fullwhiteimg} alt ="full-white-img" />,
        h3F : "Comfort",
        pF: "sarah shares her experience with",
        spanF :"these remarkable shoes",
        pS : "highlighting thier exceptional",
        secImg : <img src = {reviewimage} alt ="review-img" />,
        h4F : "Johnson",
        spanS: "CEO",
        rating: <Rating name="half-rating-read" defaultValue={4} precision={4} readOnly />,
      },
      {
        firstImg : <img src={fullwhiteimg} alt ="full-white-img" />,
        h3F : "Stylish",
        pF: "Michael, a renowed athlete",
        spanF :"commends these shoes for thier",
        pS : "unparalled performance. He...",
        secImg : <img src = {reviewimage} alt ="review-img" />,
        h4F : "Micheal",
        spanS: "Professional",
        rating: <Rating name="half-rating-read" defaultValue={4} precision={4} readOnly />,
      },
      {
        firstImg : <img src={fullwhiteimg} alt ="full-white-img" />,
        h3F : "Versatile",
        pF: "Emma,a popular fashion blogger",
        spanF :"raves about these shoes for thier",
        pS : "stylish design and versatility.she...",
        secImg : <img src = {reviewimage} alt ="review-img" />,
        h4F : "Roberts",
        spanS: "Bloggers",
        rating: <Rating name="half-rating-read" defaultValue={4} precision={4} readOnly />,
      },
      {
        firstImg : <img src={fullwhiteimg} alt ="full-white-img" />,
        h3F : "Durability",
        pF: "Mark, an avid adventurer,shares",
        spanF :"his testimonial on these shoes",
        pS : "highlighting thier exceptional",
        secImg : <img src = {reviewimage} alt ="review-img" />,
        h4F : "Johnson",
        spanS: "CEO",
        rating: <Rating name="half-rating-read" defaultValue={4} precision={4} readOnly />,
      }
    ]

    const dataReview = reviewData.map((item,index) => <Abou firstImg = {item.firstImg} key = {index} isFirst={index === 0} h3F = {item.h3F} pF ={item.pF}
    spanF = {item.spanF} pS ={item.pS} secImg ={item.secImg} h4F ={item.h4F} spanS ={item.spanS} rating = {item.rating}/>)
  return (
    <section className='product-slider-section'> 
    <Carousel responsive={responsive}>
        {dataReview}
    </Carousel>
    </section>
  )
}

export default About