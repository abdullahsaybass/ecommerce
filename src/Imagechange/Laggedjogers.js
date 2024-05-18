
import React from 'react'
import blackshoe1 from '../Imagechange/Images/laced-joggers-big-image-1.webp';
import blackshoe2 from '../Imagechange/Images/laced-joggers-big-image-2.webp';
import blackshoe3 from '../Imagechange/Images/laced-joggers-big-image-3.webp'
import blackshoe4 from '../Imagechange/Images/laced-joggers-big-image-4.webp';
import blackshoe5 from '../Imagechange/Images/laced-joggers-big-image-5.webp';
import blackshoe6 from '../Imagechange/Images/laced-joggers-big-image-6.webp';
import smallimage1 from '../Imagechange/Images/laced-joggers-small-image-1.avif';
import smallimage2 from '../Imagechange/Images/laced-joggers-small-image-2.webp';
import smallimage3 from '../Imagechange/Images/laced-joggers-small-image-3.webp';
import smallimage4 from '../Imagechange/Images/laced-joggers-small-image-4.webp';
import smallimage5 from '../Imagechange/Images/laced-joggers-small-image-5.avif';
import smallimage6 from '../Imagechange/Images/laced-joggers-small-image-6.avif';

import { useState} from "react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { LuMoveRight } from "react-icons/lu";
import '../Imagechange/Style.css';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const Laggedjogers = () => {
    const smallImages = [smallimage1, smallimage2, smallimage3, smallimage4,smallimage5, smallimage6];
    const bigImages = [blackshoe1, blackshoe2, blackshoe3, blackshoe4, blackshoe5, blackshoe6];
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

export default Laggedjogers