import React from 'react'
import Nav from '../Header/Nav'
import Header from '../Header/Header'
import '../About/Style.css'
import Backabout from '../Subpages/Backabout'
import brownlady from '../Assest/brown-lady-img.webp';
import Violetlday from '../Assest/about-violet-lady.webp';
import { FaShippingFast } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { LuPhone } from "react-icons/lu";
import Footer from '../Footer/Footer'

const about = () => {
  return (
    <about>
        <section className='about-us-section'>
            <div className='about-us-container'>
                    <Header />
                    <Nav />
                    <Backabout />
                <div className='about-us-wrapper'> 

                    <h1>Be clear and concise</h1>
                    <div>
                      <p>Welcome to Steps Theme, where we believe that every journey begins with a single step. 
                        We are a dedicated team of professionals who are passionate about helping individuals and 
                        businesses take those crucial steps towards success. Our mission is to provide innovative solutions 
                        and support that propel our clients forward on their path to achieving their goals.</p>
                      <p>At Steps Theme, we have a diverse team of experts with extensive knowledge and experience 
                        in various industries. From marketing and branding to technology and design, 
                        we offer a comprehensive range of services to cater to the unique needs of our clients. 
                        Our team is constantly updated with the latest trends and developments in their respective 
                        fields to ensure we deliver cutting-edge solutions.</p>
                    </div>
                    <h1>The world needs to move fast to make a meaning against climate change.</h1>

                    <div className='brownlady-aboutus-decription'>
                      <div>
                        <h1>Make it inviting and engaging</h1>
                        <p>We believe that understanding our clients' needs is the key to delivering exceptional results. 
                          We take the time to listen and learn about your vision, objectives, and challenges. By gaining a deep understanding of your requirements, we can tailor our strategies and solutions to meet your specific needs. 
                          Your success is our top priority, and we work closely with you every step of the way.</p>
                        <p>In a rapidly evolving world, it's essential to stay ahead of the curve. At Steps Theme, 
                          we pride ourselves on our ability to think outside the box and provide creative and innovative solutions. 
                          Whether it's developing a unique branding strategy, designing an eye-catching website, or implementing 
                          a targeted marketing campaign, we strive to bring fresh ideas and approaches to the table</p>
                      </div>
                      <img src={brownlady} alt='about-us-brown-lady-img' />
                    </div>

                    <div className='violetlady-about-us-decription'>
                      <img src={Violetlday} alt='about-us-violet-lady-img' />
                      <div>
                        <h1>Keep it short and sweet</h1>
                        <p>We believe that collaboration is the key to achieving outstanding results. We view our clients as partners, 
                          working together towards a shared goal. We foster a collaborative environment where open communication, mutual 
                          respect, and teamwork thrive. Through regular feedback and transparent processes, we ensure that our clients 
                          are actively involved in the decision-making process and are satisfied with the final outcome.</p>
                        <p>Excellence is at the core of everything we do. We are committed to delivering high-quality services and 
                          exceeding our clients' expectations. Our team of skilled professionals maintains the highest standards of
                          professionalism, attention to detail, and dedication to excellence. We strive for continuous improvement, 
                          regularly evaluating our processes and adopting best practices to provide the best possible outcomes for 
                          our clients.</p>
                      </div>
                    </div>

                  <div className="about-services-container">
                    <h1>About our services</h1>
                    <p>Our mission is to empower individuals with knowledge and facilitate meaningful connections through our platform.
                    We <span>understand the importance of reliable and up-to-date information in today's fast-paced world.</span></p>

                    <div className='service-three-box'>

                      <div className='fast-delivery'>
                        <div>
                          <h2>Fast Devilvery</h2>
                          <FaShippingFast />
                        </div>
                        <p>The specific delivery time will vary depending on the shipping address and the selected delivery option. 
                          Customers can track their order online to see the estimated delivery date.</p>
                      </div>

                      <div className='many-offers'>
                        <div>
                          <h2>Many offers</h2>
                          <BiSolidOffer />
                        </div>
                        <p>CMS also offers a variety of training and technical assistance to help providers and state 
                          agencies meet their responsibilities under Medicare, Medicaid, and SCHIP.</p>
                      </div>

                      <div className='support'>
                        <div>
                          <h2>24/7 support</h2>
                          <LuPhone />
                        </div>
                        <p>CMS Service support is available 24 hours a day, 7 days a week.
                           You can reach them by phone, email, or chat. Here are the contact information for CMS Service support.</p>
                      </div>

                    </div>
                  </div>
                </div>
                <Footer />
            </div>
        </section>
    </about>
  )
}

export default about