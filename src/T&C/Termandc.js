import React from 'react'
import Header from '../Header/Header'
import Nav from '../Header/Nav'
import Contactel from '../Subpages/Contactel'
import Footer from '../Footer/Footer'
import '../T&C/Style.css'
import { MdArrowRightAlt } from "react-icons/md";

const Termandc = () => {
  return (
    <section className='terms-and-condition-section'>
        <div className='terms-and-condition-container'>
            <Header />
            <Nav />
            <Contactel />
            <div className='terms-and-condition-wrapper'>
              <div className='adress-container'>

                <div>
                  <h3>CALL US</h3>
                  <h2>+48 0021-32-12</h2>
                  <h4>EMAIL:</h4>
                  <h4>shop@company.com</h4>
                </div>

                <div>
                  <h4>ADDRESS:</h4>
                  <h5>1093 Marigold Lane,</h5>
                  <h5>Coral Way, Miami,</h5>
                  <h5>Florida, 33169</h5>
                </div>

              </div>

              <div className='adress-form-wrapper'>
                <div className='adresse-form-container'>
                  <div>
                      <div>
                        <h5>First Name</h5>
                        <input type='text' placeholder='First name'/>
                      </div>
                      <div>
                        <h5>Last Name</h5>
                        <input type='text' placeholder='Last name'/>
                      </div>
                  </div>

                  <div>
                      <div>
                        <h5>Email</h5>
                        <input type='text' placeholder='shop@email.com' />
                      </div>
                      <div>
                        <h5>Phone number</h5>
                        <input type='text' placeholder='Phone-number' />
                      </div>         
                  </div>
                      <h5>Description</h5>
                      <input type='text' placeholder='Description' />      
                </div> 
                  <button type='submit'>Send Message <MdArrowRightAlt style={{marginLeft:'10px', color:'White', fontSize:'30px'}}/> </button>
              </div>
            </div>
            
            {/* <h1>GraphHopper Routing</h1>
            <IntergrateMap /> */}
   
            <Footer />
        </div>
    </section>
  )
}

export default Termandc