import React from 'react'
import '../Footer/Style.css'
import logo from '../Assest/logo_small.png';
import { Link } from 'react-router-dom';
import { CiTwitter } from "react-icons/ci";
import { RiMessengerLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { PiYoutubeLogoBold } from "react-icons/pi";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import rightblack from '../Page/Assests/black-right-shoe.avif';
import leftblack from '../Page/Assests/black-left-shoe.avif';

const Footer = () => {
  return (
    <footer>

        <section className='product-offer-section'>
            <div className='product-offer-container'>
                <h2>ALL PRODUCTS</h2>
                <div>
                <h1>Get 20% off <span>for first order</span></h1>
                <input type="email" name="email" placeholder="Enter your email" />
                </div>
                <HiMiniArrowSmallRight />
                <div className='black-shoes'>
                <img src= {leftblack} alt='left-black-shoe' />
                <img src= {rightblack} alt='right-black-shoe' />
                </div>
                </div>
        </section>

        <section className='footer-section'>
            <div className='footer-container'>
                <div>
                    <img src={logo} alt= "footer-logo" />
                    <h2>STEP 2023 EDITION</h2>
                    <p>Step into the forefront of fashion with our latest<span> collection of shoes. 
                    From sleek heels to trendy</span>sneakers.</p>
                    <div class="footer-social-icons">
                        <div class="social-iconn-twitter">
                            <CiTwitter />
                        </div>
                        <div class="social-iconn-messenger">
                            <RiMessengerLine />
                        </div>
                        <div class="social-iconn-instagram">
                            <FaInstagram />
                        </div>
                        <div class="social-iconn-youtube">
                            <PiYoutubeLogoBold />
                        </div>
                    </div>
                </div>
                <ul>
                    <h3>NAVIGATION:</h3>
                    <li><Link to ="/">Search</Link></li>
                    <li><Link to ="/">All collections</Link></li>
                    <li><Link to ="/">All products</Link></li>
                    <li><Link to ="/">privacy policy</Link></li>
                </ul>
                <ul>
                    <h3>EXTRA:</h3>
                    <li><Link to ="/">about us</Link></li>
                    <li><Link to ="/">Contact Us</Link></li>
                    <li><Link to ="/">Faq's</Link></li>
                    <li><Link to ="/">Shipping & Delivery</Link></li>
                    <li><Link to ="/">Terms & Conditions</Link></li>
                </ul>
                <ul>
                    <h3>CATEGORIES:</h3>
                    <li><Link to ="/">Women</Link></li>
                    <li><Link to ="/">Kids</Link></li>
                    <li><Link to ="/">Men</Link></li>
                    <li><Link to ="/">Featured</Link></li>
                    <li><Link to ="/">Bestseller</Link></li>
                    <li><Link to ="/">Latest</Link></li>
                </ul>
                <ul>
                    <h3>NAVIGATION:</h3>
                    <li><Link to ="/">Sneakers</Link></li>
                    <li><Link to ="/">Brogue boots</Link></li>
                    <li><Link to ="/">Leather Shoes</Link></li>
                    <li><Link to ="/">Running Shoes</Link></li>
                    <li><Link to ="/">Sports Shoes</Link></li>
                </ul>
            </div>
        </section>
    </footer>
  )
}

export default Footer