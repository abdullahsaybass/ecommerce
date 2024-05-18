import React from 'react';
import './Header.css';
import { PiTelegramLogo } from "react-icons/pi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineTrendingFlat } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";



const Header = () => {
  return (
    <div>
    <header className='header'>
      <div className='container'>
        <div className='header-container'>
          <div className='contact-info'>
            <div className='contact-item-1'>
            <PiTelegramLogo />
              <h5>7 Days A Week </h5>
              <p> From 9:00 Am To 7:00 Pm</p>
            </div>
            <div className='contact-item-2'>
              <p>Call Us :</p>
              <h5>610-403-403</h5>
              <IoPhonePortraitOutline />
            </div>
          </div>
          <div className='language-currency'>
            <p>USD</p>
            <FaAngleDown />
            <p>Language:</p>
            <h5>ENGLISH</h5>
            <MdOutlineTrendingFlat />
          </div>
        </div>
      </div>
    </header>
    
    </div>
  );
};

export default Header;
