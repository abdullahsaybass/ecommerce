import React from 'react'
import redBigImage1 from '../Imagechange/Images/red-shoe-big-image-1.webp';
import redBigImage2 from '../Imagechange/Images/red-shoe-big-image-2.webp';
import redBigImage3 from '../Imagechange/Images/red-shoe-big-image-3.webp';
import redBigImage4 from '../Imagechange/Images/red-shoe-big-image-4.webp';
import redBigImage5 from '../Imagechange/Images/red-shoe-big-image-5.webp';
import redBigImage6 from '../Imagechange/Images/red-shoe-big-image-6.webp';
import redBigImage7 from '../Imagechange/Images/red-shoe-big-image-7.webp';
import redSmallImage1 from '../Imagechange/Images/red-shoe-small-image-1.avif';
import redSmallImage2 from '../Imagechange/Images/red-shoe-small-image-2.webp';
import redSmallImage3 from '../Imagechange/Images/red-shoe-small-image-3.webp';
import redSmallImage4 from '../Imagechange/Images/red-shoe-small-image-4.avif';
import redSmallImage5 from '../Imagechange/Images/red-shoe-small-image-5.avif';
import redSmallImage6 from '../Imagechange/Images/red-shoe-small-image-6.avif';
import redSmallImage7 from '../Imagechange/Images/red-shoe-small-image-7.avif';
import { useState} from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { LuMoveRight } from "react-icons/lu";
import '../Imagechange/Style.css';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const Imagechange = () => {
    const smallImages = [redSmallImage1, redSmallImage2, redSmallImage3, redSmallImage4,redSmallImage5, redSmallImage6, redSmallImage7];
    const bigImages = [redBigImage1, redBigImage2, redBigImage3, redBigImage4, redBigImage5, redBigImage6, redBigImage7];
    const [selectedBigImage, setSelectedbigImage] = useState(null);
    const [visiblitysmallImage , setVisiblitySmallImage] = useState(0);


    const visiblitysmallImageCount = 4;

    const handleSmallImageClcik = (index) => {
        setSelectedbigImage(index);
    }
    
    const handlePrevClick = () => {
       if(visiblitysmallImageCount > 0){
        setVisiblitySmallImage((prevIndex) => (prevIndex === 0 ? smallImages.length-1 : prevIndex-1));
       } 
       setSelectedbigImage((prevIndex) => {
        if(selectedBigImage === null){
          return smallImages.length-1;
        }
        else{
          return prevIndex === 0 ? smallImages.length-1 : prevIndex-1;
        }
      });
    }
    const handleNextClick = () => {
        setVisiblitySmallImage((nextIndex) => (nextIndex === smallImages.length-1 ? 0 : nextIndex+1))
        setSelectedbigImage( (nextIndex) => (nextIndex === smallImages.length-1 ? 0 : nextIndex+1));
      
    }
   

  return (
    
      <section className='images-container-section'>
        <div className='image-slider-wrapper'>
        <TransitionGroup>
          <CSSTransition
            key={bigImages[selectedBigImage]}
            timeout={1000}
            classNames='slider-left'
          >
          <div className='big-image-container'>
            {selectedBigImage === null ? <img src={bigImages[0]} alt="default-img" /> : <img src = {bigImages[selectedBigImage]} alt={'large-img ${selectedBigImage}'} />}
          </div>
          </CSSTransition>
        </TransitionGroup>
        </div>

        <div className='small-image-wrapper'>

              <div className='small-image-container'>
                {smallImages.slice(visiblitysmallImage, visiblitysmallImage + visiblitysmallImageCount).map((src, index) => (
                  <TransitionGroup key={index}>
                    <CSSTransition
                      timeout={1000}
                      classNames='small-slider-left'
                    >
                      <img
                        key={index}
                        src={src}
                        alt={`small-img ${index + 1}`}
                        onClick={() => handleSmallImageClcik(visiblitysmallImage + index)}
                        className={selectedBigImage === visiblitysmallImage + index ? 'active' : ''}
                      />
                    </CSSTransition>
                  </TransitionGroup>
                ))}
              </div>

            <div className='navigation-arrows'>  
              <HiArrowLongLeft onClick={handlePrevClick}/>
              <LuMoveRight onClick={handleNextClick}/>
            </div>     
        </div>
        
      </section>
  )
}

export default Imagechange