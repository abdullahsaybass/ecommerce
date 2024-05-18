import React from 'react'
import './Homee.css'
import { IoIosAdd } from "react-icons/io";
import boximg1 from '../Page/Assests/12.jpg';
import boximg2 from '../Page/Assests/12 (1).jpg';
import boximg3 from '../Page/Assests/11.jpg';
import clasimg1 from '../Page/Assests/shoe-1.webp';
import clasimg2 from '../Page/Assests/clas-shoe-2.webp';
import clasimg3 from '../Page/Assests/clas-shoe-3.webp';
import { CgRemote } from "react-icons/cg";
import { HiArrowLongRight } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import Rating from '@mui/material/Rating';
import { CiShoppingCart } from "react-icons/ci";
import Slideproducts from '../Page/Product/Slideproducts';
import { Link } from 'react-router-dom';
import Menproduct from '../Page/Product/Menproduct';
import Homesubcon from './Homesubcon';
import snekaerimg from '../Page/Assests/white-shoe-image.webp';
import sellerimg3 from '../Page/Assests/seller-img2.avif';
import sellerimg4 from '../Page/Assests/seller-img3.webp';
import sellerimg5 from '../Page/Assests/seller-img4.webp';
import sellerimg6 from '../Page/Assests/sellerimg 5 (1).jpg';
import ShowMore from '../Page/Buttons/ShowMore';
import ShowMoreB from '../Page/Buttons/ShowMoreB';
import Sneakers from '../Page/Buttons/Sneakers';
import Threeicons from '../Page/Icons/Threeicons';
import bestsellershoe from '../Page/Assests/best-seller-red-shoe.avif';
import Addtocart from '../Page/Buttons/Addtocart';
import Allcategories from '../Page/subcontentpage/Allcategories';
import Testproduct from '../Page/subcontentpage/Testproduct';
import ReactPlayer from 'react-player';
import { useRef } from 'react';
import Slidingproducts2 from '../Page/Product/Slidingproducts2';
import violetlady from '../Page/Assests/violet-lady (1).jpg'
import About from '../Page/subcontentpage/About';
import Slider3 from '../Page/Product/Slider3';
// import Patners from '../subcontentpage/Patners';
import logo from '../Page/Assests/logo-img.png';
import Header from '../Header/Header'
import Nav from '../Header/Nav'
import Footer from '../Footer/Footer'

const Homee = () => {
  const VIDEO_PATH = 'https://www.youtube.com/watch?v=TsRgQuud3Sk';
  const playerRef = useRef(null);
  return (
    <header>
      <Header />
      <Nav />
      <div className='headers'>
        <div className='header-containerr'>
          
          
          <div className='header-img-container'>

            <div className='header-wrapperr'>
              <div className='header-part1'>
                <h1>Trendmark</h1>
                <h2>Sneakers 2023 Limited Edition</h2>
              </div>
               
              <div className='header-box'>
                <div className='box-1'>
                    <div className='box-wrapper1'>
                      <img src = {boximg2} alt="Logo"class="box-image2"/>
                        <div className='box-content1'>
                          <h6>Classic 2.5 Edge Shoes</h6>
                          <p>Heel Pant</p>
                        </div>
                    </div>
                  <IoIosAdd style={{ fontSize: '30px',verticalAlign: 'middle',marginRight:'5px', color: 'orange', backgroundColor: 'white',borderRadius: '50px',marginLeft: '80px' }}/>
                </div>

                <div className = 'box-2'>
                  <div className='box-wrapper2'>
                    <img src = {boximg1} alt="Logo"class="box-image1"/>
                      <div className='box-content2'>
                        <h6>Classic 2.5 Edge Shoes</h6>
                        <p>Shoe lace Part</p>
                      </div>
                  </div>
                  <IoIosAdd style={{ fontSize: '30px',verticalAlign: 'middle',marginRight:'5px', color: 'orange', backgroundColor: 'white',borderRadius: '50px',marginLeft: '210px' }}/>
                </div>

                <div className = 'box-3'>
                  <div className='box-wrapper3'>
                    <img src = {boximg3} alt="Logo"class="box-image3"/>
                      <div className='box-content3'>
                        <h6>Classic 2.5 Edge Shoes</h6>
                        <p>Toe Cap Part</p>
                      </div>
                  </div>
                  <IoIosAdd style={{ fontSize: '30px',verticalAlign: 'middle',marginRight:'5px', color: 'orange', backgroundColor: 'white',borderRadius: '50px', marginLeft: '110px' }}/>
                </div>
              </div>

              {/* Explore icon */}
              <div className='explore-icon'>
                <CgRemote  style={{ fontSize: '30px' }}/>
                <h4>EXPLORE</h4>
              </div>
            </div>
            
          </div>
        </div>

        {/* play video */}

        <div className='header-container-box'>
          <div className='header-part2'>

            <div className='shoe-shows-part-1'>
              <div className='play-button'>
                <CgRemote style ={{color:'white', fontSize: '30px'}} />
              </div>
              <p>Play Video</p>
            </div>

            <div className='shoe-shows-part-2'>
              <div className='shoe-part-1'>
                <p>01</p>
                <HiArrowLongRight style ={{color:'white', fontSize: '30px'}} />
              </div>
                <h6>Trendmark</h6>
                <p>Meteor Lace-Up</p>
                <p>Running Shoe</p>
                <span class="fa fa-star checked"></span>
            </div>

            <div className='shoe-shows-part-2'>
              <div className='shoe-part-1'>
                <p>02</p>
                <HiArrowLongRight style ={{color:'white', fontSize: '30px'}} />
              </div>
                <h6>Trendmark</h6>
                <p>Laced Joggers</p>
                <p>For Men</p>
            </div>

            <div className='shoe-shows-part-2'>
              <div className='shoe-part-1'>
                <p>03</p>
                <HiArrowLongRight style ={{color:'white', fontSize: '30px'}} />
              </div>
                <h6>Trendmark</h6>
                <p>Barley Textured</p>
                <p>Pannelled Shoes</p>
            </div>

            <div className='shoe-shows-part-2'>
              <div className='shoe-part-1'>
                <p>04</p>
                <HiArrowLongRight style ={{color:'white', fontSize: '30px'}} />
              </div>
                <h6>Trendmark</h6>
                <p>Omax Lace-Up</p>
                <p>Sports Shoes</p>
            </div>

            <div className="shoe-shows-part-3"> 
              <div className='shoe-part-container'>
                  <HiArrowLongRight />

                <div className="shoe-show-symbol">
                  <CiHeart style ={{fontSize: '20px',verticalAlign: 'middle',marginRight:'5px', color: '#534a37', backgroundColor: '#cdcdcd',borderRadius: '50px'}}/>
                  <IoEyeOutline style ={{fontSize: '20px',verticalAlign: 'middle',marginRight:'5px', color: '#534a37', backgroundColor: '#cdcdcd',borderRadius: '50px'}} />
                  <TbArrowsDoubleNeSw  style ={{fontSize: '20px',verticalAlign: 'middle',marginRight:'5px', color: '#534a37', backgroundColor: '#cdcdcd',borderRadius: '50px'}}/>
                </div>

                  <Rating name="half-rating-read" defaultValue={5} precision={5} readOnly />
                  <h3>Classic 2.5 Edge Shoes</h3>
                  <h4>SNEAKERS 2023 LIMITED EDITION</h4>
                  <p>The InstaPump Fury was released in 1994.The shoe <br /> was lace-less and featured Reebok's pump <br /> technology, a reduced midsole, Hexalite Cushioning <br /> and a fully synthetic</p>

                <div className='shoe-imgs'>
                  <img src = {clasimg1} alt="Logo"class="clas-image1"/>
                  <img src = {clasimg2} alt="Logo"class="clas-image2"/>
                  <img src = {clasimg3} alt="Logo"class="clas-image3"/>
                </div>

                <div className='shoe-add-symbols'>
                  <div className='shoe-icon1'>
                    <IoIosAdd className="add-icon" />
                  </div>

                  <div className='shoe-icon2'>
                    <IoIosAdd className="add-icon" />
                  </div>

                  <div className='shoe-icon3'>
                    <IoIosAdd className="add-icon" />
                  </div>
                </div>

                <div className='shoe-sizes'>
                    <h4>AVAILABLE <br />SIZES:</h4>
                    <p>32</p>
                    <p>34</p>
                    <p>36</p>
                </div>

                <div className='shoe-price'>
                  <h3>780.00 USD</h3>
                  <h4>800.00  USD</h4>
                  <button>ADD TO CART <CiShoppingCart style={{ fontSize: '20px',verticalAlign: 'middle' }}/></button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* snaker products section */}
      <section>
        <div className="home-subs-con">
          <Homesubcon />
          <div className='sneakers-part-2'>
              <div className='sneakers-full-image'>
                <img src= {snekaerimg} alt="sneakers-img" />
              </div>
            </div>
        </div>

        <div className="all-sneakers-product">
          <h1>ALL PRODUCTS</h1>
          <div className='all-sneakers-title'>
            <h1>All the <span>Sneakers</span></h1>
            <ShowMoreB />
          </div>
          <Slideproducts />
        </div>
      </section>
      {/* sneaker products end*/}

      <section className='Best Selling Products'>
        <div className='best-selling-container'>
          <div className='best-selling-wrapper'>

            <div className='best-selling-products-part-1'>
              <div className='best-selling-title'>
                <h1>Best<span>Seller</span></h1>
                <ShowMore />
              </div>
                <ul>
                  <li><Link to = "/">MENS</Link></li>
                  <li><Link to = "/">WOMENS</Link></li>
                  <li><Link to = "/">KIDS</Link></li>
                  <li><Link to = "/">CUSTOMIZE</Link></li>
                </ul>
                <Menproduct />
            </div>

            <div className='best-selling-products-2'>
              <div className='best-selling-products-img'>
                <img src ={sellerimg6} alt = "sneaker-lady-img" />
              </div>
              <div className='best-selling-option'>
                  <Sneakers />
                  <Threeicons />
                <img src ={bestsellershoe} alt = 'best-seller-red-shoe' />
              <div className='best-seller-rating'>
                <Rating name="no-value" value={null} />
              </div>
                <h1>Explore Mid-Top <span>Lace-Up</span> <span>Casual...</span></h1>
                <h2>SNEAKERS 2023 LIMITED EDITION</h2>
                <p>It is thought that shoes may have been used long <span>before this, but because the materials used were...</span></p>

              <div className='best-seller-three-image'>
                <img src = {sellerimg3} alt = 'seller-img-2'/>
                <img src = {sellerimg4} alt = 'seller-img-3'/>
                <img src = {sellerimg5} alt = 'seller-img-4'/>
              </div>

              <div className='sneakers-symbols'>
                <div className='addtion-icon1'>
                  <IoIosAdd className="sneaker-icon" />
                </div>
                <div className='addtion-icon2'>
                  <IoIosAdd className="sneaker-icon" />
                </div>
                <div className='addtion-icon3'>
                  <IoIosAdd className="sneaker-icon" />
                </div>
              </div>

              <div className='best-seller-shoe-variant'>
                <h3>COLOR <br />VARIANTS:</h3>
                <div className='red'></div>
                <div className='yellow'></div>
              </div>

              <div className='best-seller-shoe-price'>
                <h3>859.00<span>USD</span></h3>
                <Addtocart />
              </div>

              <div className='seller-deals-striker-price'>
                <h3>900.00 <span>USD</span></h3>
              </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='all-categories'>
        <div className='all-categories-container'>
          <div className='all-categories-part1'>
            <h2>ALL PRODUCTS</h2>
            <div className='all-categories-buttons'>
              <h1>Meet <span>Categories</span></h1>
              <ShowMoreB />
            </div>
          </div>
          <div className='all-categories-part2'>
            <Allcategories />
          </div>
        </div>
      </section>
      <section className='testing-video-section'>
        <div className='testing-product-violet'>
          <Testproduct />
        </div>
        <div className='testing-video-container'>
          <div className='testing-video-product'>
            <p>ALL PRODUCTS</p>
            <h2>Our shoes <span>during testing</span></h2>
            <p>Step into the world of unparalleled comfort and
            <span>style with these exceptional shoes that are bound</span> 
            to leave a lasting impression wherever you go.</p>
            <ShowMore />
          </div>
          <div className="video-red-img">
            <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />
        </div>
        </div>
      </section>
      <section class='slider-products-2-section'>
        <div class='slider-products2-container'>
          <p>ALL PRODUCTS</p>
          <div class='slider-products2-title'>
            <h1>All Sneakers</h1>
            <ShowMoreB />
          </div>
            <Slidingproducts2 />
        </div>
      </section>

      {/* violet-lady */}

      <section>
        <div className="home-subs-con">
          <Homesubcon />
              <div className='violet-full-image'>
                <img src= {violetlady} alt="violet-lday-img" />
              </div>
        </div>
      </section>

      {/* violet -lady section end */}

      {/* product features reviwe section start*/}

      <section className='product-design-setion'>
        <div className='product-design-container'>
          <div>
              <h2>ALL PRODUCTS</h2>
              <h1>About <span>our shoes</span></h1>
          </div>
          <About />
        </div>
      </section>

      {/* product features reviwe section end */}

      {/*  slider three section start */}

      <section className='sneaker-slider3-section'>
        <div className='sneaker-slider3-container'>
            <h2>ALL PRODUCT</h2>
          <div>
            <h1>All the sneaker</h1>
            <ShowMoreB />
          </div>
          <Slider3 />
        </div>
      </section>

      {/* slider three section end */}

      {/* our customer section  start */}

      <section className='our-cutomer-section'>
        <div className='our-cutomer-container'>
          <div className='our-cutomer-wrapper'>
            <h2>ALL PRODUCTS</h2>
            <div className='patner-carosuel-logo'>
              <h1>Patners</h1>
              <img src = {logo} alt = "logo-patners-img" />
              <img src = {logo} alt = "logo-patners-img" />
              <img src = {logo} alt = "logo-patners-img" />
              <img src = {logo} alt = "logo-patners-img" />
            </div>
          </div>
        </div>
      </section>

      {/* our customer section end */}
      <Footer />
    </header>
  )
}
export default Homee