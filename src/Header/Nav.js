import logo from '../Assest/logo_small.png';
import './Nav.css'
// import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2';
import {Link } from 'react-router-dom';

const Nav = () => {
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [ispageMenuOpen, setIspageMenuOpen] = useState(false);
    const [isFashionMenuOpen2, setIsFashionMenuOpen2] = useState(false);
    const [isFashionMenuOpen, setIsFashionMenuOpen] =   useState(false);
    const [isBlogProfileOpen, setIsBlogProfileOpen] = useState(false);

    const fashionMenuOpenClickHandler = () => {
        setIsFashionMenuOpen(!isFashionMenuOpen)
    }
    
    const fashionMenuOpenClick = () => {
        setIsFashionMenuOpen2(!isFashionMenuOpen2);
    }
    const handleProfile = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    };
    const pageProfile = () => {
        setIspageMenuOpen(!ispageMenuOpen);
    };

    const blogProfile = () => {
        setIsBlogProfileOpen(!isBlogProfileOpen);
    }
  return (
    <section className='navigation'>
        <div className='navigation-container'>
            <div className='navigation-wrapper'>
                <div className='navigation-logo'>
                    <img src = {logo} alt="Logo"/>
                </div>

                <div className='navigation-menu'>
                    <nav>
                        <ul class ='list list-inline'>
                            <li className='list list-items'>
                            <Link to="/" onClick={fashionMenuOpenClickHandler } >FASHION<MdKeyboardArrowDown style={{ fontSize: '20px', verticalAlign: 'middle', marginLeft: '10px' }} /></Link>
                            {isFashionMenuOpen && (
                                <Dropdown  />
                            )}
                            </li>
                            <li className='list list-items'>
                            <Link to="/" onClick={fashionMenuOpenClick}>OUTDOOR<MdKeyboardArrowDown style={{ fontSize: '20px',verticalAlign: 'middle',marginLeft: '5px' }}/></Link>
                            {isFashionMenuOpen2 && (
                                <Dropdown2 />
                            )}
                            </li>
                            <li className='list list-items'>
                                <Link onClick={pageProfile}>PAGES<MdKeyboardArrowDown style={{ fontSize: '20px',verticalAlign: 'middle',marginLeft: '5px',fontWeight:'normal' }}/></Link>
                                
                                <div className="dropdown-pages">
                                {ispageMenuOpen && (
                                    <ul className="drop-down" style = {{borderTop: '1px solid #ccc',paddingTop: '15px',
                                    paddingLeft: '10px', paddingBottom: '10px'}}>
                                        <li><Link to="/about-us" style={{ textDecoration: 'none' }}>about us</Link></li>
                                        <li><Link to="/contact-us" style={{ textDecoration: 'none' }}>Contact Us</Link></li>
                                        <li><Link to="/faq" style={{ textDecoration: 'none' }}>Faq's</Link></li>
                                        <li><Link to="/shipping-delivery" style={{ textDecoration: 'none' }}>Shipping & Delivery</Link></li>
                                        <li><Link to="/terms-and-condition" style={{ textDecoration: 'none' }}>Terms & Conditions</Link></li>                 
                                    </ul>
                                )}
                                </div>

                                
                            </li>
                            <li className='list list-items'>
                                <Link onClick={blogProfile}>BLOGS<MdKeyboardArrowDown style={{ fontSize: '20px',verticalAlign: 'middle',marginLeft: '5px' }}/></Link>
                                <div className="dropdown-Blog">
                                {isBlogProfileOpen && (
                                    <ul className="drop-down" style = {{borderTop: '1px solid #ccc'}}>
                                    <li><Link to="/" style={{ textDecoration: 'none' }}>Article Page</Link></li>
                                    <li><Link to="/" style={{ textDecoration: 'none' }}>Blog Page</Link></li>   
                                    </ul>
                                )}
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className='navigation-symbol'>
                <nav>
                        <ul class ='list list-inlines'>
                            <li className='list list-item'>
                                <Link><IoIosSearch style={{ fontSize: '30px',verticalAlign: 'middle',marginRight: '5px'}}/>Search</Link>
                            </li>
                            <li className='list list-item'>
                                <Link to = "/" onClick={handleProfile}><RxAvatar style={{ fontSize: '30px',verticalAlign: 'middle',marginRight:'5px' }}/>My Profile</Link>
                                {isProfileMenuOpen && (
                                    <div className="dropdown-myprofile">
                                    <ul className="drop-down-profile">
                                        <li><Link to="/" style={{ textDecoration: 'none' }}>Log In</Link></li>
                                        <li><Link to="/" style={{ textDecoration: 'none' }}>Create Account</Link></li>
                                        <li><Link to="/" style={{ textDecoration: 'none' }}>Wishlist(0)</Link></li>
                                    </ul>
                                    </div>
                                )}
                            </li>
                            <li className='list list-item'>
                                <Link><CiShoppingCart style={{ fontSize: '30px',verticalAlign: 'middle',marginRigth: '10px' }}/>Cart(0)</Link>
                            </li>
                            <li className='list list-item'>
                                <Link><IoMenuOutline style={{ fontSize: '55px',verticalAlign: 'middle',color:'white'}}/></Link>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Nav